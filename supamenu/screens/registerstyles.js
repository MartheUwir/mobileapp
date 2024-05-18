import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    
  },
  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBlack: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  titleOrange: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  welcomeText: {
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
    marginTop: 20,
  },
  instructionText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  signInButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  signInButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  socialButton: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  socialButtonText: {
    fontSize: 18,
    color: '#000',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#FFA500',
    marginTop: 20,
    marginBottom: 20,
  },
  loginText: {
    fontSize: 14,
    color: '#666',
  },
  loginLink: {
    color: '#FFA500',
    fontWeight: 'bold',
  },
});

export default styles;
