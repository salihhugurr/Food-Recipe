import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList, Image, TouchableOpacity, TextInput, ActivityIndicator} from 'react-native';
import yemekData from '../yemekData.json';

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
        style={[styles.itemContainer, {backgroundColor: index % 2 === 1 ? '#fafafa' : ''}]}>
        <Image
          style={styles.avatar}
          source={{uri: item.smallImg}}/>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.title}</Text>
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
        <TextInput
          onChangeText={text => {
            this.setState({
              text,
            });

            this.searchFilter(text);
          }}
          value={text}
          placeholder="Search..."
          style={styles.searchInput}/>
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
      <FlatList
        ListFooterComponent={this.renderFooter}
        ListHeaderComponent={this.renderHeader()}
        renderItem={this.renderMealsItem}
        keyExtractor={item => item.id}
        data={this.state.meals}

        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}
      />
    );
  }
}


const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10
  },
  textContainer: {
    justifyContent: 'space-around'
  },
  name: {
    fontSize: 16
  },
  searchContainer: {
    padding: 10
  },
  searchInput: {
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    padding: 10
  }
});
