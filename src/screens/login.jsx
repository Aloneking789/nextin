import React, { useState } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';

export const LoginScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  
  const handleLogin = async() => {
    console.log("butoon clicked")
    if (mobileNumber.length !== 10) {
      Alert.alert(
        'Invalid Number',
        'Please enter a valid 10-digit mobile number.'
      );
    }

    try {

        const res = await axios.post("https://next-in-api.vercel.app/api/v1/users/login", {
          phoneNumber: `+91${mobileNumber}`
        });
  
        console.log(res.data);

        navigation.navigate('Verify',{ phoneNumber: `+91${mobileNumber}` });
  
      } catch (e) {
        console.error("Error logging in:", e);
        Alert.alert('Login Failed', 'An error occurred while logging in.');
      }
  
      console.log("after the login attempt");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>Sign up or Login to your Account</Text>

      {/* Toggle Buttons for Login/Sign Up */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity style={styles.toggleButtonActive}>
          <Text style={styles.toggleButtonTextActive}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toggleButtonInactive}>
          <Text style={styles.toggleButtonTextInactive}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Mobile Number Input */}
      <Text style={styles.label}>Mobile Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Mobile Number"
        keyboardType="phone-pad"
        maxLength={10}
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

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

