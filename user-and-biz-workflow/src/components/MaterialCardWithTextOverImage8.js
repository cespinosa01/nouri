import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

function MaterialCardWithTextOverImage8(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/cardImage16.png")}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.titleStyle}>
            {props.titleStyle || "Resturant Name"}
          </Text>
          <Text style={styles.subtitleStyle}>Address</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <TouchableOpacity style={styles.actionButton1}>
            <Text style={styles.learnMore}>Learn More</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
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
  cardBody: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    left: 0,
    right: 0
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center"
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
  button: {
    padding: 8,
    flexDirection: "row"
  },
  actionButton1: {
    padding: 8,
    height: 36
  },
  learnMore: {
    fontSize: 14,
    color: "#FFF",
    opacity: 0.9
  }
});

export default MaterialCardWithTextOverImage8;
