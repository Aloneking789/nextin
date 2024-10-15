// HomeScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const categories = [
  { id: '1', name: 'XYX', icon: '🍕' },
  { id: '2', name: 'ABC', icon: '🍔' },
  { id: '3', name: 'PQR', icon: '🍣' },
  { id: '4', name: 'LOL', icon: '🥗' },
  { id: '5', name: 'SOS', icon: '🍰' },
];

const popularItems = [
  { id: '1', name: 'SOS', price: '₹199', image: require('../../assets/images/logo.png') },
  { id: '2', name: 'XYX', price: '₹149', image: require('../../assets/images/logo.png') },
  { id: '3', name: 'ZXZ', price: '₹299', image: require('../../assets/images/logo.png') },
];

export const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Text style={styles.categoryIcon}>{item.icon}</Text>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderPopularItem = ({ item }) => (
    <TouchableOpacity style={styles.popularItem}>
      <Image source={item.image} style={styles.popularItemImage} />
      <Text style={styles.popularItemName}>{item.name}</Text>
      <Text style={styles.popularItemPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello, Nextinn!</Text>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.profileIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for restaurants or dishes"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Icon name="search" size={24} color="#666" style={styles.searchIcon} />
        </View>

        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.banner}
          resizeMode="cover"
        />

        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryList}
        />

        <Text style={styles.sectionTitle}>Popular Now</Text>
        <FlatList
          data={popularItems}
          renderItem={renderPopularItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.popularList}
        />
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="#FF4500" />
          <Text style={[styles.navText, { color: '#FF4500' }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="search" size={24} color="#666" />
          <Text style={styles.navText}>Search Services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="cart" size={24} color="#666" />
          <Text style={styles.navText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person" size={24} color="#666" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 10,
  },
  banner: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  categoryList: {
    marginBottom: 20,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryIcon: {
    fontSize: 30,
    marginBottom: 5,
  },
  categoryName: {
    fontSize: 14,
    color: '#666',
  },
  popularList: {
    marginBottom: 20,
  },
  popularItem: {
    width: 150,
    marginRight: 15,
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    padding: 10,
  },
  popularItemImage: {
    width: 130,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  popularItemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  popularItemPrice: {
    fontSize: 14,
    color: '#FF4500',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  navText: {
    fontSize: 12,
    color: '#666',
  },
});