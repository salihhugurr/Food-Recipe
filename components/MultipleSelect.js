import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator, FlatList, TextInput,
} from "react-native";
import MultiSelect from 'react-native-multiple-select'
import yemekData from "../yemekData.json";
import colors from "../assets/colors/colors";
import Feather from "react-native-vector-icons/Feather";

const items = [
  {id:1,name:"Pirinç"},
  {id:2,name:"Bulgur"},
  {id:3,name:"Sucuk"},
  {id:4,name:"Tavuk"},
  {id:5,name:"Pirinç"},
  {id:6,name:"Et"},
  {id:7,name:"Patates"},
  {id:8,name:"Makarna"},
  {id:9,name:"Tarhana"},
  {id:10,name:"Pul Biber"},
  {id:11,name:"Salatalık"},
  {id:12,name:"Domates"},
  {id:13,name:"Patlıcan"},
  {id:14,name:"Peynir"},
  {id:15,name:"Kaşar"},
  {id:16,name:"Dondurma"},
  {id:17,name:"Krema"},
  {id:18,name:"Lahana"},
  {id:19,name:"Soğan"},
  {id:20,name:"Yeşil Soğan"},

]

export default class  extends Component {

  state = {
    selectedItems:[],
    item:'',
    meals: [],
    allMeals: [],
    loading: true,
    refreshing: false
  }

  onSelectedItemsChange = selectedItems =>{
    this.setState({selectedItems,allSelectedItems:[...this.state.selectedItems,...selectedItems]});
  }

  componentDidMount() {
    console.log("selam");
    this.getMeals();
  }

  getMeals = async () => {
    console.log("getMealsBaşı");
    this.setState({
      loading: true,
    });
    const {selectedItems} = this.state;
    const data = selectedItems.map((val,index)=> {

        if(selectedItems.length>1) {
           data:yemekData.filter(function(item){
            return (item.title.includes(items[val-1].name));
          })
        }
        else yemekData;

      })

    const meals = data;

    const items = [...this.state.allMeals, ...meals];
    console.log("getMealsSonu");
    if (this.state.refreshing) {
      items.reverse();
    }

    this.setState({
      meals: items,
      allMeals: items,
      loading: false,
      refreshing: false,
      selectedItems: this.state.selectedItems,
    });
  };
  onRefresh = () => {
    this.setState({
      refreshing: true
    }, () => {
      this.getMeals();
    });
  };

  delete=(item,index)=>{
    const splicedArray = this.state.selectedItems;
    splicedArray.splice(index,1)
    console.log("array",splicedArray)
    this.setState({
      selectedItems:splicedArray
    });


    console.log("selam",item)
  }

  renderMealsItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Details',{item:item})}
        style={[styles.itemContainer, {backgroundColor: index % 2 === 1 ? colors.price : colors.primary}]}>
        <Image
          style={styles.avatar}
          source={{uri: item.smallImg}}/>

        <View style={{flexDirection:"row" ,justifyContent:"space-around"}}>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.title}</Text>
          </View>
          <View style={styles.itemIcon}>
            <Feather style={{marginLeft:'5%',marginTop:"5%"}}name="chevron-right" size={28} color={'#000'}/>
          </View>
        </View>

      </TouchableOpacity>
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
    const {selectedItems} = this.state;
    return (
      <View style={styles.container}>

          <View style={{flexDirection:"row"}}>

            <MultiSelect
              style={styles.searchBar}
              hideTags
              items={items}
              uniqueKey="id"
              ref = {(component) => {this.multiselect = component}}
              onSelectedItemsChange={this.onSelectedItemsChange}
              selectedItems={selectedItems}
              selectText="Malzeme Seçiniz"
              searchInputPlaceholderText="Malzemeler"
              onChangeInput={(text) => console.log(text)}
              tagRemoveIconColor="red"
              altFontFamily="Proxima-Light"
              tagBorderColor="#CCC"
              tagTextColor="#CCC"
              selectedItemTextColor="green"
              selectedItemIconColor="green"
              itemTextColor="#000"
              displayKey="name"
              searchInputStyle={{color:"#CCC"}}
              hideSubmitButton={true}
              hideDropdown={true}
              styleMainWrapper={{borderWidth:.5,padding:10,backgroundColor:"white",width:"70%",borderBottomRightRadius:20,borderTopLeftRadius:20}}
              styleTextDropdown={{alignItems:"center",padding:5,marginLeft:10,borderBottomRightRadius:10,borderWidth:.8}}
              styleDropdownMenuSubsection={{marginTop:10,alignContent:"center"}}
              styleTextDropdownSelected={{alignItems:"center",padding:5,marginLeft:10,borderBottomRightRadius:10,borderWidth:.8}}
              styleDropdownMenu={{padding:5}}

            />


          </View>


        {selectedItems.map((item,index)=> {
          const selectedItems = this.state.selectedItems;
          console.log("item ne geldi? :",item,index);
          console.log(items[item-1].name)
          return(
            <View style={styles.selectedItemsView}>
              <TouchableOpacity style={styles.selectedItemsContainer} onPress={()=>{this.delete(item,index),console.log("item",item,index)}}>
                <Text style={styles.itemContainerText}>{items[item-1].name}</Text>
              </TouchableOpacity>
            </View>

          )
        })}

        <FlatList
          ListFooterComponent={this.renderFooter}
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
  searchBar:{
    padding:10,
    margin:10,
    borderRadius:8,
    borderWidth:.5,
  },
  selectedItemsView: {
    width:"100%",
    flexDirection:"row",
  },
  selectedItemsContainer: {
    width:"25%",
    borderWidth:.5,
    borderRadius:5,
    margin:5,
    flexDirection:"row",
  },
  itemContainerText:{
    textAlign:"center",
    padding:5,
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
