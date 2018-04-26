import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './src/components/common';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';

class App extends Component {

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyA44IbBy1TUifZ7rZEqbsCP7wOg1Nlvtyo",
      authDomain: "auth-aecd4.firebaseapp.com",
      databaseURL: "https://auth-aecd4.firebaseio.com",
      projectId: "auth-aecd4",
      storageBucket: "auth-aecd4.appspot.com",
      messagingSenderId: "981434833484"
    });
  }

  render() {
    return (
      <View >
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;