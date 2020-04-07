import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';


class App extends Component{
  
  render() {
  
    
    return (
      <View style={styles.container}>
        <App />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
  },
});

export default App;