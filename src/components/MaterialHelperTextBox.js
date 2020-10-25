import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

function MaterialHelperTextBox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder="Harlem Community Fridge @theharlemcommunityfridge"
        numberOfLines={1}
        style={styles.inputStyle}
      ></TextInput>
      <Text style={styles.helper}>116th Street X</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    lineHeight: 16,
    paddingTop: 8,
    flex: 1,
    paddingBottom: 8,
    width: 375
  },
  helper: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 8
  }
});

export default MaterialHelperTextBox;
