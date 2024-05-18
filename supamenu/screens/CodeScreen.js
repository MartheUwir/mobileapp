import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FourthScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search for your preferred restaurant</Text>
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      {/* QR Code component here */}

      <Text style={styles.qrText}>Scan, Pay & Enjoy below QR code to scan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7931a', // Orange background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 20,
  },
  searchButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f7931a', // Orange color
  },
  orText: {
    fontSize: 18,
    marginBottom: 20,
  },
  qrText: {
    fontSize: 16,
  },
});

export default FourthScreen;
