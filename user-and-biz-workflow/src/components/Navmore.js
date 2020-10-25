import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import How from "./How";
import Icon from "react-native-vector-icons/Ionicons";

function Navmore(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.buttonStack}>
        <TouchableOpacity /* Conditional navigation not supported at the moment */
          onPress={() => console.log("Navigate to Untitled3")}
          style={styles.button}
        >
          <How style={styles.how}></How>
        </TouchableOpacity>
        <Icon name="ios-arrow-round-forward" style={styles.icon}></Icon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    top: 10,
    left: 0,
    width: 138,
    height: 20,
    position: "absolute"
  },
  how: {
    height: 17,
    width: 110,
    marginTop: 2
  },
  icon: {
    left: 116,
    position: "absolute",
    color: "rgba(23,5,5,1)",
    fontSize: 40,
    top: 0
  },
  buttonStack: {
    width: 139,
    height: 43
  }
});

export default Navmore;
