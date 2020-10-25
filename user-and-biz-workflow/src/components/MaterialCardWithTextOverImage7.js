import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

function MaterialCardWithTextOverImage7(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/cardImage15.png")}
        style={styles.cardItemImagePlace}
      ></Image>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Thankyou")}
        style={styles.button}
      >
        <TouchableOpacity
          onPress={() => console.log("Navigate to Thankyou")}
          style={styles.button2}
        >
          <Text style={styles.fromDigInn}>From: DigInn</Text>
          <Text style={styles.titleStyle}>
            To: Harlem {"\n"}Community Fridge
          </Text>
          <Text style={styles.subtitleStyle}>Pick up at 7 pm, 5 min walk</Text>
        </TouchableOpacity>
        <View style={styles.actionBody}>
          <TouchableOpacity
            onPress={() => console.log("Navigate to Thankyou")}
            style={styles.actionButton1}
          >
            <Text style={styles.accept}>ACCEPT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Navigate to Thankyou")}
            style={styles.actionButton2}
          >
            <Text style={styles.decline}>DECLINE</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => console.log("Navigate to Thankyou")}
          style={styles.button3}
        ></TouchableOpacity>
      </TouchableOpacity>
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
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    flex: 1,
    minHeight: 359
  },
  button: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    left: 0,
    right: 0,
    width: 357,
    top: 137,
    height: 211
  },
  button2: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center"
  },
  fromDigInn: {
    fontSize: 24,
    color: "#FFF",
    paddingBottom: 12
  },
  titleStyle: {
    fontSize: 24,
    color: "#FFF",
    paddingBottom: 12
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#FFF",
    lineHeight: 16,
    opacity: 0.5
  },
  actionBody: {
    padding: 8,
    flexDirection: "row"
  },
  actionButton1: {
    padding: 8,
    height: 36
  },
  accept: {
    fontSize: 14,
    color: "#FFF",
    opacity: 0.9
  },
  actionButton2: {
    padding: 8,
    height: 36
  },
  decline: {
    fontSize: 14,
    color: "#FFF",
    opacity: 0.9
  },
  button3: {
    flex: 1,
    backgroundColor: "rgba(214, 214, 214,1)"
  }
});

export default MaterialCardWithTextOverImage7;
