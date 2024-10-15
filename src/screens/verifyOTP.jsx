import { useState } from "react";
import { Text ,View ,TextInput, Alert ,TouchableOpacity,StyleSheet} from "react-native"
import axios from "axios";
export const VerifyOTPScreen = ({route , navigation})=>{
    
    const { phoneNumber } = route.params;
    const[otp ,setOTP] = useState("");
    const verifyOTP = async()=>{
        console.log("Phone Number: ", phoneNumber);
        console.log("Entered OTP: ", otp);
        try {
            const response = await axios.post("https://next-in-api.vercel.app/api/v1/users/login/verify",
                {
                    "phoneNumber" : phoneNumber,
                    "otp" : otp
                }
            ).then((res)=>{
                console.log(res.data)
                if(res.data.status == "success"){
                    navigation.navigate('HomeScreen');
                }
            })
        } catch (error) {
            console.log(error)
            Alert.alert("Wrong OTP")
        }
    }
    return(
        <View style={styles.container}>
            <Text> Verify page</Text>
            {/* OTP Input */}
      <Text style={styles.title} >OTP</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your OTP"
        keyboardType="number-pad"
        maxLength={6}
        value = {otp}
        onChangeText={setOTP}
      />
      <TouchableOpacity style={styles.loginButton} onPress={verifyOTP}>
        <Text > Verify OTP </Text>
      </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#f0f0f0',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 16,
      color: '#666',
      textAlign: 'center',
      marginBottom: 20,
    },
    toggleContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20,
    },
    toggleButtonActive: {
      backgroundColor: '#f8c1c1',
      paddingVertical: 10,
      paddingHorizontal: 40,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
    },
    toggleButtonInactive: {
      backgroundColor: '#f0e1e1',
      paddingVertical: 10,
      paddingHorizontal: 40,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
    },
    toggleButtonTextActive: {
      color: '#fff',
      fontWeight: 'bold',
    },
    toggleButtonTextInactive: {
      color: '#888',
    },
    label: {
      fontSize: 14,
      color: '#333',
      marginBottom: 5,
    },
    input: {
      height: 50,
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 15,
      marginBottom: 15,
      backgroundColor: '#e6f0f5',
    },
    forgotText: {
      textAlign: 'right',
      color: '#007bff',
      marginBottom: 20,
    },
  
    loginButton: {
      backgroundColor: '#6495ed',
      borderRadius: 30,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 24,
    },
  });