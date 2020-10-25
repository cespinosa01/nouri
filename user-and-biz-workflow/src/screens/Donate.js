import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialUnderlineTextbox1 from "../components/MaterialUnderlineTextbox1";
import MaterialUnderlineTextbox2 from "../components/MaterialUnderlineTextbox2";

function Donate(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}>
          <Text style={styles.loremIpsum}>I would like to donate</Text>
          <MaterialUnderlineTextbox1
            inputStyle="Placeholder"
            inputStyle="food item"
            style={styles.materialUnderlineTextbox1}
          ></MaterialUnderlineTextbox1>
          <Text style={styles.iHave}>I have</Text>
          <MaterialUnderlineTextbox2
            inputStyle="Placeholder"
            inputStyle="amount"
            style={styles.materialUnderlineTextbox2}
          ></MaterialUnderlineTextbox2>
          <Text style={styles.iHave1}>it can be picked up at</Text>
          <MaterialUnderlineTextbox2
            inputStyle="Placeholder"
            inputStyle="time "
            style={styles.materialUnderlineTextbox3}
          ></MaterialUnderlineTextbox2>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Thankyou1")}
            style={styles.button}
          >
            <Text style={styles.text}>Donate!</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rect2}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect1: {
    width: 375,
    height: 812,
    position: "absolute",
    backgroundColor: "rgba(249,153,141,1)",
    left: 0,
    top: 0
  },
  loremIpsum: {
    fontFamily: "oswald-regular",
    color: "#121212",
    height: 84,
    width: 328,
    fontSize: 36,
    marginTop: 92,
    marginLeft: 20
  },
  materialUnderlineTextbox1: {
    height: 43,
    width: 329,
    marginLeft: 19
  },
  iHave: {
    fontFamily: "oswald-regular",
    color: "#121212",
    height: 84,
    width: 328,
    fontSize: 36,
    marginTop: 24,
    marginLeft: 20
  },
  materialUnderlineTextbox2: {
    height: 43,
    width: 324,
    marginLeft: 24
  },
  iHave1: {
    fontFamily: "oswald-regular",
    color: "#121212",
    height: 84,
    width: 328,
    fontSize: 36,
    marginTop: 33,
    marginLeft: 24
  },
  materialUnderlineTextbox3: {
    height: 43,
    width: 324,
    marginLeft: 25
  },
  button: {
    width: 165,
    height: 46,
    backgroundColor: "rgba(0,0,0,1)",
    borderRadius: 21,
    marginTop: 168,
    marginLeft: 104
  },
  text: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 27,
    marginTop: 6,
    marginLeft: 31
  },
  rect2: {
    top: 224,
    left: 348,
    width: 62,
    height: 488,
    position: "absolute",
    backgroundColor: "rgba(249,153,141,1)"
  },
  rect1Stack: {
    width: 410,
    height: 812
  }
});

export default Donate;
