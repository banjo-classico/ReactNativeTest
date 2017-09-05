import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Button } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ee2',
  },
});

const Main = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Welcome, please click the button to log out.</Text>
    <Button
      onPress={() => navigation.dispatch({ type: 'Logout' })}
      title="Log out"
    />
  </View>
);

Main.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Main.navigationOptions = {
  title: 'Home',
};

export default Main;
