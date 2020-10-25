import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function MaterialSearchBarWithBackground(props) {
  return <View style={[styles.container, props.style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,1)",
    padding: 4,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  }
});

export default MaterialSearchBarWithBackground;
