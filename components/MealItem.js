import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import DefaultText from './DefaultText'

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <Text style={styles.title}>{props.title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <DefaultText>{props.duration}m</DefaultText>
            <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealHeader: {
    height: "85%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: 'flex-end'
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-around",
    alignItems: 'center'
  },
  mealItem: {
    height: 200,
    width: "90%",
    backgroundColor: "#f5f5f5",
    marginHorizontal: "5%",
    marginVertical: '2%',
    borderRadius: 10,
    overflow: 'hidden'
  },
  mealRow: {
    flexDirection: "row",
  },
  title: {
      fontFamily: 'open-sans-bold',
      fontSize: 20,
      color: 'white',
      backgroundColor: 'rgba(0,0,0,0.7)',
      paddingVertical: 2,
      paddingHorizontal:5,
      textAlign:"center"
  }
});

export default MealItem;
