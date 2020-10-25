import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Center } from "@builderx/utils";
import Icon from "react-native-vector-icons/Entypo";

function MaterialCardWithImageAndTitle6(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Center horizontal>
        <View style={styles.cardBody}>
          <View style={styles.bodyContent}>
            <Text style={styles.text}>2 pounds of potatos</Text>
            <TextInput
              placeholder="7pm | Unclaimed"
              style={styles.textInput}
            ></TextInput>
          </View>
        </View>
      </Center>
      <Icon name="circular-graph" style={styles.icon}></Icon>
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
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 357,
    top: 1,
    height: 112
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  text: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12,
    width: 273,
    height: 42
  },
  textInput: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5,
    width: 216,
    height: 16
  },
  icon: {
    top: 30,
    left: 279,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  }
});

export default MaterialCardWithImageAndTitle6;
