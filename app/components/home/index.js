import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from '../../screens';
import Login from '../auth';

registerScreens();

const HomeScreen = (props) => {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button style={styles.LoginButton}
         title='Login' 
         onPress={() => Navigation.push(props.componentId, {
           component: {
             name: 'Login'
           }
         })}>
        </Button>
      </View>
    );
  };
  // HomeScreen.options = {
  //   topBar: {
  //     title: {
  //       text: 'Home',
  //       color: 'white'
  //     },
  //     background: {
  //       color: '#4d089a'
  //     }
  //   }
  // };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    width: '10%',
    height: '10%',
    color: 'green',
  },
});

export default HomeScreen;