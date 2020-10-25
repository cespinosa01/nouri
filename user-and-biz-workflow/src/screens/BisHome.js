import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import CupertinoSegmentWithTwoTabs from "../components/CupertinoSegmentWithTwoTabs";
import MaterialCardWithImageAndTitle5 from "../components/MaterialCardWithImageAndTitle5";
import MaterialCardWithImageAndTitle6 from "../components/MaterialCardWithImageAndTitle6";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";

function BisHome(props) {
  return (
    <View style={styles.container}>
      <CupertinoSegmentWithTwoTabs
        style={styles.cupertinoSegmentWithTwoTabs}
      ></CupertinoSegmentWithTwoTabs>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <MaterialCardWithImageAndTitle5
            style={styles.materialCardWithImageAndTitle5}
          ></MaterialCardWithImageAndTitle5>
          <MaterialCardWithImageAndTitle6
            style={styles.materialCardWithImageAndTitle6}
          ></MaterialCardWithImageAndTitle6>
          <MaterialCardWithImageAndTitle5
            style={styles.materialCardWithImageAndTitle7}
          ></MaterialCardWithImageAndTitle5>
          <View style={styles.materialCardWithImageAndTitle9StackStack}>
            <View style={styles.materialCardWithImageAndTitle9Stack}>
              <MaterialCardWithImageAndTitle5
                style={styles.materialCardWithImageAndTitle9}
              ></MaterialCardWithImageAndTitle5>
              <MaterialIconTextButtonsFooter
                style={styles.materialIconTextButtonsFooter}
              ></MaterialIconTextButtonsFooter>
            </View>
            <MaterialCardWithImageAndTitle6
              style={styles.materialCardWithImageAndTitle10}
            ></MaterialCardWithImageAndTitle6>
          </View>
          <MaterialCardWithImageAndTitle5
            style={styles.materialCardWithImageAndTitle15}
          ></MaterialCardWithImageAndTitle5>
          <MaterialCardWithImageAndTitle6
            style={styles.materialCardWithImageAndTitle14}
          ></MaterialCardWithImageAndTitle6>
          <MaterialCardWithImageAndTitle5
            style={styles.materialCardWithImageAndTitle13}
          ></MaterialCardWithImageAndTitle5>
          <MaterialCardWithImageAndTitle5
            style={styles.materialCardWithImageAndTitle12}
          ></MaterialCardWithImageAndTitle5>
          <MaterialCardWithImageAndTitle6
            style={styles.materialCardWithImageAndTitle11}
          ></MaterialCardWithImageAndTitle6>
          <MaterialCardWithImageAndTitle5
            style={styles.materialCardWithImageAndTitle16}
          ></MaterialCardWithImageAndTitle5>
          <MaterialCardWithImageAndTitle5
            style={styles.materialCardWithImageAndTitle17}
          ></MaterialCardWithImageAndTitle5>
          <MaterialCardWithImageAndTitle6
            style={styles.materialCardWithImageAndTitle18}
          ></MaterialCardWithImageAndTitle6>
        </ScrollView>
      </View>
      <View style={styles.imageRow}>
        <Image
          source={require("../assets/images/nouri_long.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <IoniconsIcon name="ios-settings" style={styles.icon7}></IoniconsIcon>
      </View>
      <View style={styles.image1Row}>
        <Image
          source={require("../assets/images/dig-logo.png")}
          resizeMode="cover"
          style={styles.image1}
        ></Image>
        <View style={styles.welcomeBackDigInnColumn}>
          <Text style={styles.welcomeBackDigInn}>Welcome back, Dig Inn</Text>
          <View style={styles.loremIpsumStackStack}>
            <View style={styles.loremIpsumStack}>
              <Text style={styles.loremIpsum}>15 Donations This Month</Text>
              <EntypoIcon name="chevron-up" style={styles.icon6}></EntypoIcon>
            </View>
            <Text style={styles.loremIpsum1}>up 20% from last month</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Donate")}
        style={styles.button8}
      >
        <Text style={styles.makeADonation}>Make a Donation</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoSegmentWithTwoTabs: {
    height: 56,
    width: 375,
    borderRadius: 21,
    backgroundColor: "rgba(15,15, 15,0)",
    marginTop: 305
  },
  scrollArea: {
    width: 375,
    height: 451
  },
  scrollArea_contentContainerStyle: {
    height: 1420,
    width: 375
  },
  materialCardWithImageAndTitle5: {
    height: 100,
    width: 359,
    borderRadius: 21,
    alignSelf: "center"
  },
  materialCardWithImageAndTitle6: {
    height: 102,
    width: 359,
    borderRadius: 21,
    marginTop: 8,
    marginLeft: 8
  },
  materialCardWithImageAndTitle7: {
    height: 100,
    width: 359,
    borderRadius: 21,
    marginTop: 9,
    marginLeft: 8
  },
  materialCardWithImageAndTitle9: {
    height: 100,
    width: 359,
    position: "absolute",
    top: 0,
    borderRadius: 21,
    left: 7
  },
  materialIconTextButtonsFooter: {
    position: "absolute",
    left: 0,
    top: 51,
    height: 0,
    width: 0,
    opacity: 0
  },
  materialCardWithImageAndTitle9Stack: {
    top: 0,
    left: 0,
    width: 375,
    height: 122,
    position: "absolute"
  },
  materialCardWithImageAndTitle10: {
    height: 102,
    width: 359,
    position: "absolute",
    left: 6,
    top: 110,
    borderRadius: 21
  },
  materialCardWithImageAndTitle9StackStack: {
    width: 375,
    height: 212,
    marginTop: 10
  },
  materialCardWithImageAndTitle15: {
    height: 100,
    width: 359,
    borderRadius: 21,
    marginTop: 8,
    marginLeft: 10
  },
  materialCardWithImageAndTitle14: {
    height: 102,
    width: 359,
    borderRadius: 21,
    marginTop: 8,
    marginLeft: 10
  },
  materialCardWithImageAndTitle13: {
    height: 100,
    width: 359,
    borderRadius: 21,
    marginTop: 9,
    marginLeft: 10
  },
  materialCardWithImageAndTitle12: {
    height: 100,
    width: 359,
    borderRadius: 21,
    marginTop: 10,
    marginLeft: 9
  },
  materialCardWithImageAndTitle11: {
    height: 102,
    width: 359,
    borderRadius: 21,
    marginTop: 10,
    marginLeft: 8
  },
  materialCardWithImageAndTitle16: {
    height: 100,
    width: 359,
    borderRadius: 21,
    marginTop: 8,
    marginLeft: 10
  },
  materialCardWithImageAndTitle17: {
    height: 100,
    width: 359,
    borderRadius: 21,
    marginTop: 10,
    marginLeft: 9
  },
  materialCardWithImageAndTitle18: {
    height: 102,
    width: 359,
    borderRadius: 21,
    marginTop: 10,
    marginLeft: 8
  },
  image: {
    width: 200,
    height: 68
  },
  icon7: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 113
  },
  imageRow: {
    height: 68,
    flexDirection: "row",
    marginTop: -762,
    marginLeft: 7,
    marginRight: 25
  },
  image1: {
    width: 114,
    height: 114,
    borderRadius: 100
  },
  welcomeBackDigInn: {
    fontFamily: "oswald-regular",
    color: "#121212",
    fontSize: 24,
    textAlign: "left",
    lineHeight: 38,
    width: 200,
    height: 34,
    marginLeft: 2
  },
  loremIpsum: {
    top: 0,
    left: 4,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 23,
    width: 191
  },
  icon6: {
    top: 11,
    left: 0,
    position: "absolute",
    color: "rgba(152,185,130,1)",
    fontSize: 40
  },
  loremIpsumStack: {
    top: 0,
    left: 0,
    width: 195,
    height: 54,
    position: "absolute"
  },
  loremIpsum1: {
    top: 23,
    left: 42,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 167
  },
  loremIpsumStackStack: {
    width: 209,
    height: 54,
    marginTop: 3
  },
  welcomeBackDigInnColumn: {
    width: 209,
    marginLeft: 3,
    marginTop: 5,
    marginBottom: 18
  },
  image1Row: {
    height: 114,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 29,
    marginRight: 20
  },
  button8: {
    width: 319,
    height: 35,
    backgroundColor: "rgba(255,225,77,1)",
    borderRadius: 20,
    marginTop: 12,
    marginLeft: 29
  },
  makeADonation: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 7,
    marginLeft: 90
  }
});

export default BisHome;
