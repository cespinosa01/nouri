import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCardWithButtons(props) {
  return (
    <View style={[styles.container, props.style]}>
      <ImageBackground
        source={require("../assets/images/cardImage17.png")}
        style={styles.cardItemImagePlace}
        imageStyle={styles.cardItemImagePlace_imageStyle}
      >
        <View style={styles.group}>
          <View style={styles.group3}>
            <View style={styles.group2}>
              <Text style={styles.loremIpsum3}>
                Currently, we are overflowing with food, thank you!
              </Text>
              <Text style={styles.loremIpsum}>Harlem Community Fridge</Text>
            </View>
            <View style={styles.buttonGroup}>
              <TouchableOpacity style={styles.leftBtn}>
                <MaterialCommunityIconsIcon
                  name="heart"
                  style={styles.icon1}
                ></MaterialCommunityIconsIcon>
              </TouchableOpacity>
              <TouchableOpacity style={styles.rightBtn}>
                <MaterialCommunityIconsIcon
                  name="share"
                  style={styles.icon3}
                ></MaterialCommunityIconsIcon>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    flex: 1,
    width: 185,
    overflow: "hidden"
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    flex: 1,
    height: 234,
    width: 183,
    marginTop: -1
  },
  cardItemImagePlace_imageStyle: {},
  group: {
    width: 183,
    height: 104,
    marginTop: 123
  },
  group3: {
    width: 183,
    height: 58,
    justifyContent: "space-between"
  },
  group2: {
    width: 151,
    height: 54
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 32,
    width: 150,
    fontSize: 11,
    textAlign: "center",
    marginTop: 22,
    marginLeft: 18
  },
  loremIpsum: {
    fontFamily: "oswald-700",
    color: "rgba(255,252,252,1)",
    marginTop: -53,
    marginLeft: 18
  },
  buttonGroup: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  leftBtn: {
    padding: 8
  },
  icon1: {
    fontSize: 24,
    color: "#000",
    opacity: 0.5
  },
  rightBtn: {
    padding: 8
  },
  icon3: {
    fontSize: 24,
    color: "#000",
    opacity: 0.5
  }
});

export default MaterialCardWithButtons;
