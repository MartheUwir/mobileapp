import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './loginstyles'; // Import the styles

const LoginScreen = ({ navigation }) => {
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SupaMenu</Text>
      <Text style={styles.welcomeText}>Welcome ...</Text>
      <Text style={styles.instructionText}>Please fill in the information</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#666"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        placeholderTextColor="#666"
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.proceedButton} onPress={() => {}}>
        <Text style={styles.proceedButtonText}>Proceed</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        Don't have an account? <Text style={styles.registerLink} onPress={() => navigation.navigate('Register')}>Register</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
