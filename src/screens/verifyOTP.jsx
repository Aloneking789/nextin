import { useState, useRef } from "react";
import { Text, View, TextInput, Alert, TouchableOpacity, StyleSheet } from "react-native";
import axios from "axios";

export const VerifyOTPScreen = ({ route, navigation }) => {
  const { phoneNumber } = route.params;
  // const { phoneNumber, setphoneNumber } = useState("8887838118");

  const [otp, setOTP] = useState(new Array(6).fill(""));

  // Refs to manage focus on the TextInput fields
  const otpInputs = useRef([]);

  const verifyOTP = async () => {
    const otpCode = otp.join("");
    console.log("Phone Number: ", phoneNumber);
    console.log("Entered OTP: ", otpCode);

    try {
      const response = await axios.post("https://next-in-api.vercel.app/api/v1/users/login/verify", {
        "phoneNumber": phoneNumber,
        "otp": otpCode
      });
      if (response.data.status === "success") {
        navigation.navigate('HomeScreen');
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Wrong OTP");
    }
  };

  const handleOTPChange = (value, index) => {
    // Update the OTP value
    const updatedOTP = [...otp];
    updatedOTP[index] = value;
    setOTP(updatedOTP);

    // Focus the next input box if value is entered
    if (value && index < otpInputs.current.length - 1) {
      otpInputs.current[index + 1].focus();
    }
    // If backspace and there is nothing, go back to previous
    else if (!value && index > 0) {
      otpInputs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
      
      <Text style={styles.title}>Verify Phone Number</Text>
      <Text style={styles.subtitle}>We have sent you a 6 digit code. Please enter it here to verify your number.</Text>
      
      <View style={styles.phoneNumberContainer}>
        <Text style={styles.phoneNumber}>{phoneNumber}</Text>
        <TouchableOpacity>
          <Text style={styles.editIcon}>✎</Text>
        </TouchableOpacity>
      </View>

      {/* OTP Input */}
      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            ref={(el) => (otpInputs.current[index] = el)} // Assign ref to input field
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={otp[index]}
            onChangeText={(value) => handleOTPChange(value, index)}
          />
        ))}
      </View>

      {/* Verify Button */}
      <TouchableOpacity style={styles.verifyButton} onPress={verifyOTP}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>

      {/* Resend OTP */}
      <Text style={styles.resendText}>
        Didn’t Receive Code? <Text style={styles.resendLink} onPress={() => {/* Resend OTP function */}}>Get a New one</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  backText: {
    fontSize: 16,
    color: '#000',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  phoneNumber: {
    fontSize: 18,
    color: '#333',
    marginRight: 10,
  },
  editIcon: {
    fontSize: 18,
    color: '#FF8C94',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#e6f0f5',
  },
  verifyButton: {
    backgroundColor: '#6495ed',
    borderRadius: 30,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  resendText: {
    textAlign: 'center',
    color: '#666',
  },
  resendLink: {
    color: '#FF8C94',
    fontWeight: 'bold',
  },
});
