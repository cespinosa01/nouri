import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function How(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.findMoreFridges}>Find more fridges</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  findMoreFridges: {
    fontFamily: "roboto-regular",
    color: "#121212"
  }
});

export default How;
