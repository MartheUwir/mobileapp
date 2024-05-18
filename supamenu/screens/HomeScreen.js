import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.title}>
          <Text style={styles.blackText}>Supa</Text>
          <Text style={styles.whiteText}>Menu</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7931a', // Set background color to orange
  },
  title: {
    fontSize: 35, // Set font size to 35
    fontWeight: 'bold', // Make font bold
  },
  blackText: {
    color: 'black', // Set text color to black
  },
  whiteText: {
    color: 'white', // Set text color to white
  },
});
