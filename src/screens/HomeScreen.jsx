import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const categories = [
  { id: '1', name: 'Plumbing', icon: '🔧' },
  { id: '2', name: 'Electrical', icon: '💡' },
  { id: '3', name: 'Cleaning', icon: '🧹' },
  { id: '4', name: 'Pest Control', icon: '🐜' },
  { id: '5', name: 'Salon', icon: '💇‍♂️' },
  { id: '6', name: 'Massage', icon: '💆‍♀️' },
  { id: '7', name: 'Car Repair', icon: '🚗' },
  { id: '8', name: 'Painting', icon: '🎨' },
  { id: '9', name: 'Gardening', icon: '🌱' },
];

const popularItems = [
  { id: '1', name: 'Full Home Cleaning', price: '₹499', icon: '🧼' },
  { id: '2', name: 'AC Repair', price: '₹999', icon: '❄️' },
  { id: '3', name: 'Carpet Cleaning', price: '₹399', icon: '🧽' },
  { id: '4', name: 'Fridge Repair', price: '₹799', icon: '🧊' },
  { id: '5', name: 'TV Mounting', price: '₹599', icon: '📺' },
  { id: '6', name: 'Furniture Assembly', price: '₹499', icon: '🛠️' },
];

export const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Text style={styles.categoryIcon}>{item.icon}</Text>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderPopularItem = ({ item }) => (
    <TouchableOpacity style={styles.popularItem}>
      <Text style={styles.popularItemIcon}>{item.icon}</Text>
      <Text style={styles.popularItemName}>{item.name}</Text>
      <Text style={styles.popularItemPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Notification Bar */}
      <View style={styles.notificationBar}>
        <Text style={styles.notificationText}>🔔 3 New notifications</Text>
      </View>

      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello, Nextinn!</Text>
          <TouchableOpacity onPress={() => setShowProfileDropdown(!showProfileDropdown)}>
            <Icon name="person-circle-outline" size={40} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Profile Dropdown Menu */}
        {showProfileDropdown && (
          <View style={styles.profileDropdown}>
            <TouchableOpacity style={styles.dropdownItem}>
              <Icon name="person" size={20} color="#333" />
              <Text style={styles.dropdownText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}>
              <Icon name="settings" size={20} color="#333" />
              <Text style={styles.dropdownText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}>
              <Icon name="log-out" size={20} color="#333" />
              <Text style={styles.dropdownText}>Sign Out</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}>
              <Icon name="help-circle" size={20} color="#333" />
              <Text style={styles.dropdownText}>Help & Support</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for services"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Icon name="search" size={24} color="#666" style={styles.searchIcon} />
        </View>

        {/* Categories Section */}
        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryList}
        />

        {/* Popular Services */}
        <Text style={styles.sectionTitle}>Popular Now</Text>
        <FlatList
          data={popularItems}
          renderItem={renderPopularItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.popularList}
        />

        {/* Additional Services */}
        <Text style={styles.sectionTitle}>More Services</Text>
        <View style={styles.additionalServices}>
          <TouchableOpacity style={styles.serviceOption}>
            <Text style={styles.serviceIcon}>🧑‍🍳</Text>
            <Text style={styles.serviceName}>Cook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceOption}>
            <Text style={styles.serviceIcon}>🧵</Text>
            <Text style={styles.serviceName}>Tailor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceOption}>
            <Text style={styles.serviceIcon}>🏡</Text>
            <Text style={styles.serviceName}>Home Inspection</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceOption}>
            <Text style={styles.serviceIcon}>🛁</Text>
            <Text style={styles.serviceName}>Bathroom Cleaning</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
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
          <Icon name="cart" size={25} color="#666" />
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
  notificationBar: {
    backgroundColor: '#FF4500',
    padding: 10,
    alignItems: 'center',
  },
  notificationText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
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
  profileDropdown: {
    position: 'absolute',
    top: 60,
    right: 20,
    width: 180,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 5,
    padding: 10,
    zIndex: 10,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  dropdownText: {
    fontSize: 16,
    marginLeft: 10,
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
    fontSize: 16,
    paddingVertical: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  categoryList: {
    marginBottom: 20,
  },
  categoryItem: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  categoryIcon: {
    fontSize: 24,
  },
  categoryName: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: 'bold',
    color: '#333',
  },
  popularList: {
    marginBottom: 20,
  },
  popularItem: {
    backgroundColor: '#FFF8F0',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    width: 120,
  },
  popularItemIcon: {
    fontSize: 24,
  },
  popularItemName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
  },
  popularItemPrice: {
    fontSize: 12,
    color: '#FF4500',
  },
  additionalServices: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceOption: {
    backgroundColor: '#E0F7FA',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    width: '48%',
    alignItems: 'center',
  },
  serviceIcon: {
    fontSize: 24,
  },
  serviceName: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: 'bold',
    color: '#333',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#E0E0E0',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
});

export default HomeScreen;
