import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Scrollable from "./Scrollable";

function MaterialCard3(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Scrollable style={styles.scrollable}></Scrollable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 21,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    overflow: "hidden"
  },
  scrollable: {
    height: 446,
    width: 461,
    marginTop: -1,
    marginLeft: -30
  }
});

export default MaterialCard3;
