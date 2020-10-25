import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function MaterialHelperTextBox1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.label}>116th Street X Manhattan Ave.</Text>
      <TextInput
        placeholder="Harlem Community Fridge"
        style={styles.inputStyle}
      ></TextInput>
      <Text style={styles.helperText}>@theharlemcommunityfridge</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  label: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16
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
  helperText: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 8
  }
});

export default MaterialHelperTextBox1;
