// LanguageSelection.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const languages = [
  { name: "English (India)", code: "en-IN" },
  { name: "Hindi", code: "hi" },
  { name: "Bengali", code: "bn" },
  { name: "Marathi", code: "mr" },
  { name: "Tamil", code: "ta" },
  { name: "Gujarati", code: "gu" },
  { name: "Kannada", code: "kn" },
  { name: "Odia", code: "or" },
  { name: "Malayalam", code: "ml" },
  { name: "Punjabi", code: "pa" },
];

const LanguageSelection = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [filteredLanguages, setFilteredLanguages] = useState(languages);

  const handleSearch = (text) => {
    setSearch(text);
    if (text === "") {
      setFilteredLanguages(languages);
    } else {
      const filtered = languages.filter((language) =>
        language.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredLanguages(filtered);
    }
  };

  const handleLanguageSelect = (language) => {
    // Navigate to the Login page
    navigation.navigate("Login", { selectedLanguage: language });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.languageItem}
      onPress={() => handleLanguageSelect(item)}
    >
      <Text style={styles.languageName}>{item.name}</Text>
      <Text style={styles.languageCode}>{item.code}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Select Language</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={search}
          onChangeText={handleSearch}
        />
        <TouchableOpacity>
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>LANGUAGES</Text>
      <FlatList
        data={filteredLanguages}
        keyExtractor={(item) => item.code}
        renderItem={renderItem}
        style={styles.languageList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  cancelButton: {
    color: "#007bff",
    marginLeft: 10,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#666",
    marginBottom: 10,
  },
  languageList: {
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  languageItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  languageName: {
    fontSize: 16,
    color: "#333",
  },
  languageCode: {
    fontSize: 12,
    color: "#999",
  },
});

export default LanguageSelection;
