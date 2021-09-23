import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{justifyContent:"center"}} onPress={() => this.props.navigation.navigate('Home')}>
          <Text>Login</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  }
});
