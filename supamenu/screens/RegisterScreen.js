import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './registerstyles';

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleBlack}>Supa</Text>
          <Text style={styles.titleOrange}>Menu</Text>
        </View>
      </View>
      <Text style={styles.welcomeText}>Welcome...</Text>
      <Text style={styles.instructionText}>Sign in to continue</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Email"
        placeholderTextColor="#666"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666"
        secureTextEntry
      />

      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      <TouchableOpacity style={styles.socialButton}>
        {/* <Icon name="google" size={20} color="#DB4437" style={{ marginRight: 10 }} /> */}
        <Text style={styles.socialButtonText}>Login with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        {/* <Icon name="facebook" size={20} color="#3b5998" style={{ marginRight: 10 }} /> */}
        <Text style={styles.socialButtonText}>Login with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Don’t have an account? <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>Login</Text>
      </Text>
    </View>
  );
};

export default RegisterScreen;
