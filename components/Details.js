import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity,Dimensions } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MyBackButton from "./MyBackButton";
import colors from "../assets/colors/colors";
const { width } = Dimensions.get('window');
export default class Details extends Component {


  componentDidMount() {
    setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
  }


  static navigationOptions = {
    header: null
  };





  render() {

    let item = this.props.navigation.getParam("item");
    console.log(item.ingredient);


    return (
      <View style={styles.container}>

          <View style={styles.titleContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}>
              <Feather style={{marginLeft:'5%',marginTop:"2%",paddingTop:".3%"}}name="chevron-left" size={28} color={'#000'}/>
            </TouchableOpacity>
            <Text style={styles.titleText}>{item.title}</Text>
          </View>
          <View style={styles.imgContainer}>
            <Image style={{ width: "75%",
              height: "80%",borderRadius:15}} source={{uri:item.largeImg}}/>
          </View>
        <View style={styles.textContainer}>
          <ScrollView
            ref={(scrollView) => { this.scrollView = scrollView; }}
            style={styles.container}
            pagingEnabled={true}
            horizontal= {true}
            decelerationRate={0}
            snapToInterval={width - 60}
            snapToAlignment={"center"}
            contentInset={{
              top: 0,
              left: 30,
              bottom: 0,
              right: 30,
            }}>
            <View style={styles.view}>

              <Text style={{fontFamily:"Montserrat-Bold",color:colors.black,paddingTop:"5%"}}>Malzemeler</Text>
              <ScrollView contentContainerStyle={{alignItems:"center",marginTop:"5%"}}>
                <Text style={{textTransform:"capitalize",fontFamily:"Montserrat-Semi-Bold",color:colors.textDark,padding:3,fontSize:15}}> {item.ingredient} </Text>
              </ScrollView>

            </View>
            <View style={styles.view2}>

              <Text style={{fontFamily:"Montserrat-Bold",color:colors.black,paddingTop:"5%"}}>Yemek Tarifi</Text>
              <ScrollView contentContainerStyle={{alignItems:"center",marginTop:"5%"}}>
                <Text style={{textTransform:"capitalize",fontFamily:"Montserrat-Semi-Bold",color:colors.textDark,padding:1}}> {item.instruction} </Text>
              </ScrollView>

            </View>

          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  imgContainer:{
    flex:7,
    alignItems:"center",
  },
  titleText:{
    fontFamily:"Montserrat-SemiBold",
    fontSize:20,
    marginLeft:'3%',
    padding:"1%",
    textAlign:"center"
  },
  titleContainer:{
    flex:1,
    borderBottomWidth:.5,
    marginBottom:"4%",
    marginTop:"4%",
    padding:5,
    flexDirection:"row",
  },
  ingredientsContainer:{
    flex:1,
    marginHorizontal:"8%",
    marginBottom:"15%"
  },
  view: {
    backgroundColor: colors.background,
    width: width - 30,
    margin: 10,
    height: 300,
    borderRadius: 15,
    paddingHorizontal : 30,
    alignItems:"center",
    borderWidth:4,
    borderColor:colors.primary
  },
  view2: {
    backgroundColor: colors.background,
    width: width - 30,
    margin: 10,
    height: 300,
    borderRadius: 15,
    paddingHorizontal : 30,
    alignItems:"center",
    borderWidth:4,
    borderColor:colors.secondary
  },
  textContainer:{
    flex:7
  }
});
