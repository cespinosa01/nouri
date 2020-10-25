import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import No from "./No";

function MaterialCardWithImageAndTitle3(props) {
  return (
    <View style={[styles.container, props.style]}>
      <No style={styles.no}></No>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  no: {
    height: 112,
    width: 357,
    marginTop: -1,
    alignSelf: "center"
  }
});

export default MaterialCardWithImageAndTitle3;
