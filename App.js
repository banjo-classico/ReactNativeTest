import React from 'react';
import { Provider, connect } from "react-redux";
import { StyleSheet, Text, View } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import configureStore from "./src/store/configureStore";

import AppWithNavigationState from "./src/navigation/index";

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
