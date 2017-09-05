import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ad3',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const Login = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      This is a log in page
    </Text>
    <Text style={styles.instructions}>
      This is a subtext, click the button to log in
    </Text>
    <Button
      onPress={() => navigation.dispatch({ type: 'Login' })}
      title="Log in"
    />
  </View>
);

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Login.navigationOptions = {
  title: 'Log In',
};

export default Login;
