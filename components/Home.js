import  React ,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';
import { color, round } from 'react-native-reanimated';
import {useState} from "react";
import {carouselData} from "../assets/data/carouselData";
import Carousel from "./Carousel";


Feather.loadFont();
MaterialCommunityIcons.loadFont();

class Home extends Component {
  renderCategoryItem = ({ item, index }) => {
    return (
          <TouchableOpacity
              style={[
                styles.categoryItemWrapper,
                {
                  backgroundColor: item.selected ? colors.primary : colors.white,
                  marginLeft: item.id === 1 ? 20 : 0,
                },
              ]}>
            <Image source={item.image} style={styles.categoryItemImage} />
            <Text style={styles.categoryItemTitle}>{item.title}</Text>
            <View
                style={[
                  styles.categorySelectWrapper,
                  {
                    backgroundColor: item.selected ? colors.white : colors.secondary,
                  },
                ]}>
              <Feather
                  name="chevron-right"
                  size={8}
                  style={styles.categorySelectIcon}
                  color={item.selected ? colors.black : colors.white}
              />
            </View>
          </TouchableOpacity>
    );
  };

render() {
  return (
      <View style={styles.container}>
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}>
          {/* Header */}
          <SafeAreaView>
            <View style={styles.headerWrapper}>
              <Image
                  source={require('../assets/images/profile.png')}
                  style={styles.profileImage}
              />
              <Feather name="menu" size={24} color={colors.textDark} />
            </View>
          </SafeAreaView>

          {/* Titles */}
          <View style={styles.titlesWrapper}>
            <Text style={styles.titlesSubtitle}>Yemek</Text>
            <Text style={styles.titlesTitle}>Tarifim</Text>
          </View>

          {/* Search */}
          <View style={styles.searchWrapper}>
            <Feather name="search" size={16} color={colors.textDark} />
            <View style={styles.search}>
              <Text style={styles.searchText}>Search</Text>
            </View>
          </View>

          {/* Categories */}


          <View style={styles.categoriesWrapper}>
            <Text style={styles.categoriesTitle}>Kategoriler</Text>


            <View style={styles.categoriesListWrapper}>
              <FlatList
                  data={categoriesData}
                  renderItem={this.renderCategoryItem}
                  keyExtractor={(item,index) => index}
                  horizontal={true}
              />
            </View>


          </View>

          {/* Popular */}
          <View>
            <Carousel data = {carouselData}/>
          </View>
        </ScrollView>
      </View>
  );
}
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesSubtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.textDark,
  },
  titlesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: 'Montserrat-Semibold',
    fontSize: 14,
    marginBottom: 5,
    color: colors.textLight,
  },
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    backgroundColor: '#F5CA48',
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginTop: 10,
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: 'center',
  },
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  popularCardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  popularTitlesWrapper: {
    marginTop: 20,
  },
  popularTitlesTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.textDark,
  },
  popularTitlesWeight: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  addPizzaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  rating: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 40,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});
