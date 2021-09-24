import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList, Image, TouchableOpacity, TextInput, ActivityIndicator} from 'react-native';
import yemekData from '../yemekData.json';
import colors from '../assets/colors/colors'
import Feather from "react-native-vector-icons/Feather";

export default class CategorySearch extends Component {

  static navigationOptions = {
    header:null
};

  state = {
    text: '',
    meals: [],
    allMeals: [],
    loading: true,
    refreshing: false
  };

  componentDidMount() {
    console.log("selam");
    this.getMeals();
  }

  getMeals = async () => {
    console.log("getMealsBaşı");
    this.setState({
      loading: true,
    });
    const meals = yemekData;
    const items = [...this.state.allMeals, ...meals];
    console.log("getMealsSonu");
    if (this.state.refreshing) {
      items.reverse();
    }

    this.setState({
      meals: items,
      allMeals: items,
      loading: false,
      refreshing: false
    });
  };


  onRefresh = () => {
    this.setState({
      refreshing: true
    }, () => {
      this.getMeals();
    });
  };

  gotoDetail = item => {
    this.props.navigation.navigate('Details', {
      item
    })
  };

  renderMealsItem = ({item, index}) => {
    console.log("rendering");
    return (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Details',{item:item})}
          style={[styles.itemContainer, {backgroundColor: index % 2 === 1 ? colors.price : colors.primary}]}>
          <Image
            style={styles.avatar}
            source={{uri: item.smallImg}}/>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.title}</Text>
          </View>
          <View style={styles.itemIcon}>
            <Feather style={{marginLeft:'5%',marginTop:"5%"}}name="chevron-right" size={28} color={'#000'}/>
          </View>
        </TouchableOpacity>

    )
  };

  searchFilter = text => {
    const newData = this.state.allMeals.filter(item => {
      const listItem = `${item.title.toLowerCase()}}`;

      return listItem.indexOf(text.toLowerCase()) > -1;
    });

    this.setState({
      meals: newData,
    });
  };

  renderHeader = () => {
    const {text} = this.state;
    return (
      <View style={styles.searchContainer}>
        <View style={{}}>
          <TextInput
            onChangeText={text => {
            this.setState({
              text,
            });

            this.searchFilter(text);
          }}
            value={text}
            placeholder="Yemek Ara..."
            style={styles.searchInput}
          />
        </View>

      </View>
    )
  };

  renderFooter = () => {
    if (!this.state.loading) return null;
    return(
      <View style={{
        paddingVertical: 20
      }}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.titleContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}>
            <Feather style={{marginLeft:'5%',marginTop:"2%",paddingTop:".3%"}}name="chevron-left" size={28} color={'#000'}/>
          </TouchableOpacity>
          <Text style={styles.titleText}>Tüm Yemekler</Text>
        </View>


        <FlatList
        ListFooterComponent={this.renderFooter}
        ListHeaderComponent={this.renderHeader()}
        renderItem={this.renderMealsItem}
        keyExtractor={item => item.id}
        data={this.state.meals}

        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}
      />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderRadius:15,
    marginTop:"3%",
    backgroundColor:colors.background,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  textContainer: {
    justifyContent: 'space-around',
    width:"70%"
  },
  name: {
    fontSize: 16
  },
  searchContainer: {
    padding: 10,
    backgroundColor:colors.white,
    borderWidth:1.5,
    paddingHorizontal:5,
    borderRadius:20,

  },
  searchInput: {
    fontSize: 16,
    backgroundColor: colors.white,
    paddingLeft:20,
    borderWidth:.5,
    borderColor:colors.price,
    borderRadius:10,
    fontFamily:"Montserrat-Bold"
  },
  titleText:{
    fontFamily:"Montserrat-Bold",
    fontSize:21,
    paddingHorizontal:"1%",
    paddingTop:1,
    textAlign:"center",
    color:colors.price
  },
  titleContainer:{
    borderBottomWidth:.5,
    marginBottom:"4%",
    marginTop:"4%",
    padding:5,
    flexDirection:"row"
  },
  itemIcon:{
    justifyContent:"center",

  }
});
