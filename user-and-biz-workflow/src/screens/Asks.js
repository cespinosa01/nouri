import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialSearchBarWithBackground1 from "../components/MaterialSearchBarWithBackground1";
import MaterialCardWithTextOverImage7 from "../components/MaterialCardWithTextOverImage7";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import Svg, { Ellipse } from "react-native-svg";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Asks(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/images/WIN_20200912_14_07_24_Pro1.jpg")}
          resizeMode="cover"
          style={styles.image}
        ></Image>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("You")}
          style={styles.button3}
        ></TouchableOpacity>
      </View>
      <View style={styles.button1Row}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Feed")}
          style={styles.button1}
        >
          <View style={styles.button2Stack}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Untitled3")}
              style={styles.button2}
            >
              <Text style={styles.feed}>feed</Text>
            </TouchableOpacity>
            <IoniconsIcon
              name="ios-arrow-round-back"
              style={styles.icon1}
            ></IoniconsIcon>
          </View>
        </TouchableOpacity>
        <IoniconsIcon name="ios-settings" style={styles.icon}></IoniconsIcon>
      </View>
      <Text style={styles.loremIpsum}>Click on a trip to accept a Pickup</Text>
      <MaterialSearchBarWithBackground1
        style={styles.materialSearchBarWithBackground1}
      ></MaterialSearchBarWithBackground1>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.materialCardWithTextOverImage7StackStack}>
            <View style={styles.materialCardWithTextOverImage7Stack}>
              <MaterialCardWithTextOverImage7
                style={styles.materialCardWithTextOverImage7}
              ></MaterialCardWithTextOverImage7>
              <MaterialIconTextButtonsFooter
                style={styles.materialIconTextButtonsFooter1}
              ></MaterialIconTextButtonsFooter>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Thankyou")}
                style={styles.button4}
              >
                <View style={styles.ellipseStack}>
                  <Svg viewBox="0 0 42.59 43.4" style={styles.ellipse}>
                    <Ellipse
                      stroke="rgba(230, 230, 230,1)"
                      strokeWidth={0}
                      fill="rgba(152,185,130,1)"
                      cx={21}
                      cy={22}
                      rx={21}
                      ry={22}
                    ></Ellipse>
                  </Svg>
                  <EntypoIcon name="check" style={styles.icon2}></EntypoIcon>
                </View>
              </TouchableOpacity>
            </View>
            <MaterialCardWithTextOverImage7
              style={styles.materialCardWithTextOverImage8}
            ></MaterialCardWithTextOverImage7>
          </View>
          <MaterialCardWithTextOverImage7
            style={styles.materialCardWithTextOverImage9}
          ></MaterialCardWithTextOverImage7>
        </ScrollView>
      </View>
      <Text style={styles.hiEve}>Hi Eve, are you free to volenteer today?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    top: 1,
    left: 0,
    width: 114,
    height: 114,
    position: "absolute",
    borderRadius: 100
  },
  button3: {
    top: 0,
    left: 0,
    width: 114,
    height: 114,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)"
  },
  imageStack: {
    width: 114,
    height: 115,
    marginTop: 106,
    marginLeft: 130
  },
  button1: {
    width: 128,
    height: 43
  },
  button2: {
    top: 11,
    left: 0,
    width: 85,
    height: 23,
    position: "absolute"
  },
  feed: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 3,
    marginLeft: 50
  },
  icon1: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(23,5,5,1)",
    fontSize: 40
  },
  button2Stack: {
    width: 85,
    height: 43,
    marginTop: -1
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 167
  },
  button1Row: {
    height: 43,
    flexDirection: "row",
    marginTop: -171,
    marginLeft: 25,
    marginRight: 25
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 26,
    width: 301,
    textAlign: "center",
    marginTop: 241,
    marginLeft: 37
  },
  materialSearchBarWithBackground1: {
    height: 53,
    width: 307,
    marginLeft: 34
  },
  scrollArea: {
    width: 375,
    height: 387,
    backgroundColor: "rgba(230,230, 230,0)",
    marginTop: 12
  },
  scrollArea_contentContainerStyle: {
    height: 1092,
    width: 375
  },
  materialCardWithTextOverImage7: {
    height: 354,
    width: 307,
    position: "absolute",
    left: 34,
    top: 0,
    borderRadius: 21
  },
  materialIconTextButtonsFooter1: {
    position: "absolute",
    left: 0,
    top: 316,
    height: 0,
    width: 0,
    opacity: 0
  },
  button4: {
    top: 6,
    left: 293,
    width: 45,
    height: 49,
    position: "absolute"
  },
  ellipse: {
    top: 6,
    left: 0,
    width: 43,
    height: 43,
    position: "absolute"
  },
  icon2: {
    top: 0,
    left: 5,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  ellipseStack: {
    width: 45,
    height: 49
  },
  materialCardWithTextOverImage7Stack: {
    top: 0,
    left: 0,
    width: 375,
    height: 387,
    position: "absolute"
  },
  materialCardWithTextOverImage8: {
    height: 354,
    width: 307,
    position: "absolute",
    left: 34,
    top: 369,
    borderRadius: 21
  },
  materialCardWithTextOverImage7StackStack: {
    width: 375,
    height: 723
  },
  materialCardWithTextOverImage9: {
    height: 354,
    width: 307,
    borderRadius: 21,
    marginTop: 15,
    marginLeft: 34
  },
  hiEve: {
    fontFamily: "oswald-regular",
    color: "#121212",
    fontSize: 36,
    textAlign: "center",
    lineHeight: 38,
    width: 311,
    height: 80,
    marginTop: -569,
    marginLeft: 32
  }
});

export default Asks;
