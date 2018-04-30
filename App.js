import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, CardSection, Button, Spinner } from './src/components/common';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false
    }
  }

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyA44IbBy1TUifZ7rZEqbsCP7wOg1Nlvtyo",
      authDomain: "auth-aecd4.firebaseapp.com",
      databaseURL: "https://auth-aecd4.firebaseio.com",
      projectId: "auth-aecd4",
      storageBucket: "auth-aecd4.appspot.com",
      messagingSenderId: "981434833484"
    });

    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.setState({loggedIn:true})
      } else {
        this.setState({loggedIn:false})
      }
    })
  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true: 
        return (
          <CardSection>
            <Button whenPressed={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false: 
        return <LoginForm />;
      default: 
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View >
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;