import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';

import AuthLogo from './authLogo';
import AuthForm from './authForm';


class Login extends Component {

  state = {
    loading: false
  }

goNext = () => {
  this.props.navigation.navigate('App')
}

  render() {
    if(this.state.loading){
      return (
      <View style={styles.loading}>
        <ActivityIndicator/>
      </View>
      )
    } else {
      return (
        <ScrollView style={styles.container}>
        <View>
          <AuthLogo />
          <AuthForm goNext={this.goNext} />
        </View>

        </ScrollView>
      );
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#1d428a',
  },
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Login;
