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

export const LoginScreen = ({ route, navigation }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const language = route.params["selectedLanguage"]["name"];

  const isHindi = language === "Hindi"; // Check if the selected language is Hindi

  // Define translations for both languages
  const translations = {
    title: isHindi ? "स्वागत है! उपयोगकर्ता" : "Welcome! User",
    subtitle: isHindi
      ? "अपने खाते में साइन अप या लॉगिन करें"
      : "Sign up or Login to your Account",
    nameLabel: isHindi ? "आपका नाम" : "Your Name",
    phoneLabel: isHindi ? "फोन नंबर" : "Phone no.",
    loginButton: isHindi ? "लॉगिन" : "Login",
    signUpButton: isHindi ? "साइन अप" : "Sign Up",
    socialLoginText: isHindi ? "या उपयोग करके लॉगिन करें:" : "Or Login Using:",
    serviceProviderLogin: isHindi
      ? "सेवा प्रदाता के रूप में लॉगिन करें"
      : "Login as Service Provider",
    sendOtpButton: isHindi ? "ओटीपी भेजें" : "Send OTP",
    invalidNumberAlert: isHindi
      ? "कृपया एक मान्य 10-अंकीय मोबाइल नंबर दर्ज करें।"
      : "Please enter a valid 10-digit mobile number.",
    loginFailedAlert: isHindi ? "लॉगिन विफल" : "Login Failed",
    loginError: isHindi
      ? "लॉगिन के दौरान एक त्रुटि उत्पन्न हुई।"
      : "An error occurred while logging in.",
  };

  const handleLogin = async () => {
    console.log("button clicked");
    if (mobileNumber.length !== 10) {
      Alert.alert("Invalid Number", translations.invalidNumberAlert);
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
      Alert.alert(translations.loginFailedAlert, translations.loginError);
    }

    console.log("after the login attempt");
  };

  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text style={styles.title}>{translations.title}</Text>
      <Text style={styles.subtitle}>{translations.subtitle}</Text>
=======
      <Image
        source={require('../../assets/images/logo.png')} // Local image
        style={styles.logo} // Add styling for the image
      />
      <Text style={styles.title}>Welcome! User</Text>
      <Text style={styles.subtitle}>Sign up or Login to your Account</Text>
>>>>>>> origin/main

      {/* Toggle Buttons for Login/Sign Up */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity style={styles.toggleButtonActive}>
          <Text style={styles.toggleButtonTextActive}>
            {translations.loginButton}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toggleButtonInactive}>
          <Text style={styles.toggleButtonTextInactive}>
            {translations.signUpButton}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Mobile Number Input */}
      <Text style={styles.inputLabel}>{translations.nameLabel}</Text>
      <TextInput style={styles.input} placeholder={translations.nameLabel} />

      <Text style={styles.inputLabel}>{translations.phoneLabel}</Text>
      <TextInput
        style={styles.input}
        placeholder={translations.phoneLabel}
        keyboardType="phone-pad"
        maxLength={10}
        value={mobileNumber}
        onChangeText={(value) => setMobileNumber(value)}
      />

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
      <Text style={styles.socialLoginText}>{translations.socialLoginText}</Text>
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
          {translations.serviceProviderLogin}
        </Text>
      </TouchableOpacity>

      {/* Send OTP Button */}
      <TouchableOpacity style={styles.sendOtpButton} onPress={handleLogin}>
        <Text style={styles.sendOtpButtonText}>
          {translations.sendOtpButton}
        </Text>
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
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2, // Border thickness
    borderColor: "#ddd", // Border color
  },
  circularImage: {
    width: 50, // Image size
    height: 50,
    borderRadius: 25, // Again, half of the width/height of the image for circular shape
  },
  container: {
    justifyContent: "center",
    // textAlign: "center",
    // alignItems: "center",
    flex: 1,
<<<<<<< HEAD
    marginTop : 5,
    justifyContent: "left",
=======
    // justifyContent: "left",
>>>>>>> origin/main
    padding: 20,
    backgroundColor: "#fff",
  },
  logo : {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
<<<<<<< HEAD
    textAlign: "left",
    marginTop : 10,
=======
    textAlign: "center",
>>>>>>> origin/main
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
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
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
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
  serviceProviderButton: {
    backgroundColor: "#F4739E",
    borderRadius: 30,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    // textAlign: "center",
  },
  serviceProviderButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
  },
  sendOtpButton: {
    backgroundColor: "#87cefa",
    borderRadius: 30,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    // textAlign: "center",
  },
  sendOtpButtonText: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },
});
