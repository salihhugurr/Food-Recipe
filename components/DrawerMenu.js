import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import colors from "../assets/colors/colors";
import MyBackButton from "./MyBackButton";
import Home from "./Home";
import Main from "./Main";
import categoriesData from "../assets/data/categoriesData";
import CategorySearch from "./CategorySearch";


export default class DrawerMenu extends Component {
  _navigateToScreen = (route) => {
    this.props.navigation.navigate(route);
  }

  state = {
    isActiveIcon:colors.primary
  };
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>

        <ScrollView>
          <View style={{display: 'flex',flexDirection: 'column',justifyContent:'space-between',height:'100%',paddingBottom:70}}>
          <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:"2%"}}>

            <TouchableOpacity style={{ flexDirection: 'row',justifyContent:'space-between',marginLeft:'.5%',marginTop:'2%'}} onPress={() => navigation.closeDrawer()}>
              <MyBackButton onPress={() => navigation.closeDrawer()}/>

            </TouchableOpacity >

          <Image source={require('../assets/images/chef.jpg')} style={{width: 60, height: 60, borderRadius: 40, marginRight:10,marginTop:10 }}  />
          </View>

            <Text style={styles.categoriesTitle}>Menü</Text>

            <TouchableOpacity style={styles.categoryWrapper}>
              <View style={{flexDirection:'row',marginTop:'2%'}}>
                <Text style={styles.categoryText}>Bugün Ne Yapsam?</Text>
                <Image source={require('../assets/images/search-icon.png')} style={styles.categoryImages}  />
              </View>

            </TouchableOpacity>


              <TouchableOpacity style={styles.categoryWrapper}>
              <View style={{flexDirection:'row',marginTop:'2%'}}>
                <Text style={styles.categoryText}>Balık Yemekleri</Text>
                <Image source={require('../assets/images/fishDrawer-icon.png')} style={styles.categoryImages}  />
              </View>

            </TouchableOpacity>





            <TouchableOpacity style={styles.categoryWrapper}>
              <View style={{flexDirection:'row',marginTop:'2%'}}>
                <Text style={styles.categoryText}>Tavuk Yemekleri</Text>
                <Image source={require('../assets/images/chickenDrawer-icon.png')} style={styles.categoryImages}  />
              </View>

            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryWrapper}
            onPress={() => this.props.navigation.navigate('CategorySearch')}
            >
              <View style={{flexDirection:'row',marginTop:'2%'}}>
                <Text style={styles.categoryText}>Et Yemekleri</Text>
                <Image source={require('../assets/images/beefDrawer-icon.png')} style={styles.categoryImages}  />
              </View>

            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryWrapper}>
              <View style={{flexDirection:'row',marginTop:'2%'}}>
                <Text style={styles.categoryText}>Sebze Yemekleri</Text>
                <Image source={require('../assets/images/broccoli-icon.png')} style={styles.categoryImages}  />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryWrapper}>
              <View style={{flexDirection:'row',marginTop:'2%'}}>
                <Text style={styles.categoryText}>Çorbalar</Text>
                <Image source={require('../assets/images/corba-icon.png')} style={styles.categoryImages}  />
              </View>

            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryWrapper}>
              <View style={{flexDirection:'row',marginTop:'2%'}}>
                <Text style={styles.categoryText}>Salatalar</Text>
                <Image source={require('../assets/images/salad-icon.png')} style={styles.categoryImages}  />
              </View>

            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryWrapper}>
              <View style={{flexDirection:'row',marginTop:'2%'}}>
                <Text style={styles.categoryText}>Tatlılar</Text>
                <Image source={require('../assets/images/dessert-icon.png')} style={styles.categoryImages}  />
              </View>

            </TouchableOpacity>


          </View>

        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {

    flex:1,
    backgroundColor:"#F9F9FB"
  },
  footerButtonText: {
    paddingLeft: 5,
    // fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    color:'#fff'

  },
  button: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    height: 50,
    borderRadius: 10,
    marginTop: '3%'


  },
  buttonText: {
    //fontFamily:'Inter',
    marginTop:'1%',

    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    marginLeft:'4%'

  },
  categoryWrapper: {
    backgroundColor: '#F5CA48',
    marginTop:10,
    marginHorizontal:5,
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    }
  },
  categoryText:{
    width:"75%",
    textAlign:"center",
    marginTop:'3%',
    fontFamily: 'Montserrat',
    color:"#313234"
  },
  categoryImages:{
    width:40,
    height:30,
    borderRadius:9,
    borderWidth:.5,
    marginBottom:5
  },
  categoriesTitle:{
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    paddingHorizontal: 20,
    marginTop:10
  }

});
