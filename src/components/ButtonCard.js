import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default ButtonCard = (props) => (
  <View style={styles.buttonStyle}>
    <Button onPress={props.onPress} title="Buy Now" />
  </View>
);

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'black',
    borderWidth: 1,
    borderRadius: 5,   
    borderColor: '#007aff',   
    marginLeft: 5,
    marginRight: 5
  }
});