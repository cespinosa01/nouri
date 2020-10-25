import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";

function You(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.yourProfile}>your profile</Text>
      <Image
        source={require("../assets/images/WIN_20200912_14_07_24_Pro1.jpg")}
        resizeMode="cover"
        style={styles.image1}
      ></Image>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Feed")}
        style={styles.button1}
      >
        <View style={styles.button2Stack}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Untitled3")}
            style={styles.button2}
          >
            <Text style={styles.pickups}>pickups</Text>
          </TouchableOpacity>
          <IoniconsIcon
            name="ios-arrow-round-back"
            style={styles.icon1}
          ></IoniconsIcon>
        </View>
      </TouchableOpacity>
      <View style={styles.group}>
        <View style={styles.rectStack}>
          <View style={styles.rect}>
            <Text style={styles.dropOffsThisMonth}>Drop-offs this month</Text>
          </View>
          <Text style={styles.loremIpsum}>24</Text>
        </View>
      </View>
      <Text style={styles.loremIpsum2}>Following 2 Fridges | 243 Friends</Text>
      <View style={styles.icon2Row}>
        <EntypoIcon name="chevron-thin-up" style={styles.icon2}></EntypoIcon>
        <Text style={styles.loremIpsum3}>up 11% from last month</Text>
      </View>
      <View style={styles.rect2}>
        <Text style={styles.pastDeliveries}>Past Deliveries</Text>
      </View>
      <View style={styles.rect3}>
        <Text style={styles.upcomingPickups}>Upcoming Pickups</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  yourProfile: {
    fontFamily: "oswald-regular",
    color: "#121212",
    height: 61,
    width: 375,
    fontSize: 36,
    textAlign: "center",
    lineHeight: 35,
    marginTop: 102
  },
  image1: {
    width: 114,
    height: 114,
    borderRadius: 100,
    marginLeft: 130
  },
  button1: {
    width: 145,
    height: 43,
    marginTop: -227,
    marginLeft: 34
  },
  button2: {
    top: 11,
    left: 0,
    width: 106,
    height: 20,
    position: "absolute"
  },
  pickups: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 1,
    marginLeft: 36
  },
  icon1: {
    top: 0,
    left: 9,
    position: "absolute",
    color: "rgba(23,5,5,1)",
    fontSize: 40
  },
  button2Stack: {
    width: 106,
    height: 43,
    marginTop: -1,
    marginLeft: -9
  },
  group: {
    width: 154,
    height: 104,
    marginTop: 229,
    marginLeft: 111
  },
  rect: {
    top: 7,
    left: 0,
    width: 154,
    height: 97,
    position: "absolute",
    borderRadius: 21,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(88,88,88,0.12)"
  },
  dropOffsThisMonth: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 21,
    width: 148,
    textAlign: "center",
    marginTop: 67,
    marginLeft: 3
  },
  loremIpsum: {
    top: 0,
    left: 53,
    position: "absolute",
    fontFamily: "oswald-regular",
    color: "#121212",
    fontSize: 50,
    textAlign: "center"
  },
  rectStack: {
    width: 154,
    height: 104
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 22,
    width: 212,
    marginTop: -139,
    marginLeft: 81
  },
  icon2: {
    color: "rgba(126,211,33,1)",
    fontSize: 40
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 167,
    marginLeft: 5,
    marginTop: 13
  },
  icon2Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 126,
    marginLeft: 86,
    marginRight: 77
  },
  rect2: {
    width: 245,
    height: 51,
    backgroundColor: "rgba(255,225,77,1)",
    borderRadius: 21,
    marginTop: 50,
    marginLeft: 65
  },
  pastDeliveries: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 15,
    width: 194,
    textAlign: "center",
    marginTop: 18,
    marginLeft: 21
  },
  rect3: {
    width: 245,
    height: 51,
    backgroundColor: "rgba(255,225,77,1)",
    borderRadius: 21,
    marginTop: 13,
    marginLeft: 65
  },
  upcomingPickups: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 15,
    width: 194,
    textAlign: "center",
    marginTop: 18,
    marginLeft: 21
  }
});

export default You;
