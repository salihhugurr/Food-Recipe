import React, { Component } from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Feather from "react-native-vector-icons/Feather";

export default class MyBackButton extends Component {
  render() {
    return (



      <Feather style={{marginLeft:'5%',marginTop:"5%"}}name="chevron-left" size={28} color={'#000'}/>


    );
  }
}

const styles = StyleSheet.create({
  headerBackButton:{

  },
  backButton: {



  },
});
