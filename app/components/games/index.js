import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


class Games extends Component{
  render() {
    
    return (
      <View style={styles.container}>
        <Text>GAMES Screen</Text>
      </View>
    )
  }
}
// Games.options = {
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
    backgroundColor: '#FFFFE0',
  },
});

export default Games;