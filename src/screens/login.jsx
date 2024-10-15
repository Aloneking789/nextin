import React, { useState } from "react";
import axios from "axios";
import { Image } from "react-native";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export const LoginScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleLogin = async () => {
    console.log("button clicked");
    if (mobileNumber.length !== 10) {
      Alert.alert(
        "Invalid Number",
        "Please enter a valid 10-digit mobile number."
      );
      return;
    }

    try {
      const res = await axios.post(
        "https://next-in-api.vercel.app/api/v1/users/login",
        {
          phoneNumber: `+91${mobileNumber}`,
        }
      );

      console.log(res.data);
      navigation.navigate("Verify", { phoneNumber: `+91${mobileNumber}` });
    } catch (e) {
      console.error("Error logging in:", e);
      Alert.alert("Login Failed", "An error occurred while logging in.");
    }

    console.log("after the login attempt");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome! User</Text>
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
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Your Name
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Phone no.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Phone No."
        keyboardType="phone-pad"
        maxLength={10}
        value={mobileNumber}
        onChangeText={(value) => {
          setMobileNumber(value);
        }}
      />
      {/* 
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity> */}
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginTop: 30,
          marginBottom: 20,
          width: "100%",
        }}
      />
      {/* Social Login */}
      <Text style={styles.socialLoginText}>Or Login Using:</Text>
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity style={styles.circularButton}>
          <Image
            source={require("../../assets/images/google.png")}
            style={styles.circularImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circularButton}>
          <Image
            source={require("../../assets/images/apple.png")}
            style={styles.circularImage}
          />
        </TouchableOpacity>
      </View>

      {/* Login as Service Provider Button */}
      <TouchableOpacity style={styles.serviceProviderButton}>
        <Text style={styles.serviceProviderButtonText}>
          Login as Service Provider
        </Text>
      </TouchableOpacity>

      {/* Send OTP Button */}
      <TouchableOpacity style={styles.sendOtpButton} onPress={handleLogin}>
        <Text style={styles.sendOtpButtonText}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  circularButton: {
    margin: 15,
    width: 60, // Width and height should be equal to make it a circle
    height: 60,
    borderRadius: 30, // Half of the width/height to make it circular
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2, // Border thickness
    borderColor: '#ddd', // Border color
  },
  circularImage: {
    width: 50, // Image size
    height: 50,
    borderRadius: 25, // Again, half of the width/height of the image for circular shape
  },
  container: {
    flex: 1,
    justifyContent: "left",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    textAlign: "left",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "left",
    marginBottom: 20,
  },
  toggleContainer: {
    flexDirection: "row",
    marginBottom: 20,
    borderRadius: 30, // Give rounded corners to the entire segment
    overflow: "hidden", // Make sure child elements respect the rounded corners
    width: "100%", // Take the full width of the screen
    alignSelf: "center", // Center it horizontally
    justifyContent: "space-between",
  },
  toggleButtonActive: {
    backgroundColor: "#F4739E",
    flex: 1, // Make each button take equal width
    paddingVertical: 10,
    alignItems: "center",
  },
  toggleButtonInactive: {
    backgroundColor: "#f0e1e1",
    flex: 1, // Make each button take equal width
    paddingVertical: 10,
    alignItems: "center",
  },
  toggleButtonTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },
  toggleButtonTextInactive: {
    color: "#888",
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#f7f7f7",
  },
  forgotText: {
    textAlign: "right",
    color: "#007bff",
    marginBottom: 20,
  },
  socialLoginText: {
    textAlign: "center",
    color: "#666",
    marginBottom: 10,
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  socialIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#eee",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  serviceProviderButton: {
    backgroundColor: "#F4739E",
    borderRadius: 30,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  serviceProviderButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  sendOtpButton: {
    backgroundColor: "#87cefa",
    borderRadius: 30,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  sendOtpButtonText: {
    color: "#fff",
    fontSize: 24,
  },
});
