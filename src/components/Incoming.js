import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function Incoming(props) {
  return <View style={[styles.container, props.style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    opacity: 0
  }
});

export default Incoming;
