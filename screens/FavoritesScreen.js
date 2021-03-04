import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import {useSelector} from 'react-redux';
import DefaultText from "../components/DefaultText";

const FavoritesScreen = (props) => {

  const favMeals = useSelector(state => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals ){
    return <View><DefaultText>No Favorite meals found. Start adding some! </DefaultText></View>
  }

  return <MealList listData={favMeals} navigation={props.navigation}/>;
};


FavoritesScreen.navigationOptions = (navData) => {
  return {
    title: "Your Favorites",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
             navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};
export default FavoritesScreen;
