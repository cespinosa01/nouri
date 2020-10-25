import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Image
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import MaterialCardWithContent from "../components/MaterialCardWithContent";

function Finder(props) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Feed")}
          style={styles.button}
        >
          <View style={styles.button1Stack}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Untitled3")}
              style={styles.button1}
            >
              <Text style={styles.feed}>feed</Text>
            </TouchableOpacity>
            <IoniconsIcon
              name="ios-arrow-round-back"
              style={styles.icon1}
            ></IoniconsIcon>
          </View>
        </TouchableOpacity>
        <EvilIconsIcon name="search" style={styles.icon2}></EvilIconsIcon>
      </View>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <MaterialCardWithContent
            style={styles.materialCardWithContent}
          ></MaterialCardWithContent>
          <MaterialCardWithContent
            style={styles.materialCardWithContent1}
          ></MaterialCardWithContent>
          <MaterialCardWithContent
            style={styles.materialCardWithContent2}
          ></MaterialCardWithContent>
          <MaterialCardWithContent
            style={styles.materialCardWithContent3}
          ></MaterialCardWithContent>
          <MaterialCardWithContent
            style={styles.materialCardWithContent4}
          ></MaterialCardWithContent>
        </ScrollView>
      </View>
      <Image
        source={require("../assets/images/find_a_fridge.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    width: 128,
    height: 43,
    marginTop: 6
  },
  button1: {
    top: 11,
    left: 0,
    width: 106,
    height: 20,
    position: "absolute"
  },
  feed: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 3,
    marginLeft: 34
  },
  icon1: {
    top: 0,
    left: 6,
    position: "absolute",
    color: "rgba(23,5,5,1)",
    fontSize: 40
  },
  button1Stack: {
    width: 106,
    height: 43,
    marginTop: -1,
    marginLeft: -6
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 163
  },
  buttonRow: {
    height: 49,
    flexDirection: "row",
    marginTop: 29,
    marginLeft: 17,
    marginRight: 27
  },
  scrollArea: {
    width: 375,
    height: 677,
    backgroundColor: "#E6E6E6",
    marginTop: 57
  },
  scrollArea_contentContainerStyle: {
    height: 1817,
    width: 375
  },
  materialCardWithContent: {
    height: 352,
    width: 359,
    borderRadius: 21,
    marginTop: 22,
    alignSelf: "center"
  },
  materialCardWithContent1: {
    height: 352,
    width: 359,
    borderRadius: 21,
    marginTop: 6,
    alignSelf: "center"
  },
  materialCardWithContent2: {
    height: 352,
    width: 359,
    borderRadius: 21,
    marginTop: 3,
    alignSelf: "center"
  },
  materialCardWithContent3: {
    height: 352,
    width: 359,
    borderRadius: 21,
    marginTop: 10,
    marginLeft: 8
  },
  materialCardWithContent4: {
    height: 352,
    width: 359,
    borderRadius: 21,
    marginTop: 16,
    marginLeft: 8
  },
  image: {
    width: 228,
    height: 50,
    marginTop: -734,
    marginLeft: 67
  }
});

export default Finder;
