import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


class News extends Component{
  render() {
    
    return (
      <View style={styles.container}>
        <Text>Hello I am the News screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});

export default News;
