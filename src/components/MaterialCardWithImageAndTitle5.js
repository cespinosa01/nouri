import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

function MaterialCardWithImageAndTitle5(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View
        style={[
          styles.cardBody,
          {
            backgroundColor: props.cardBody || undefined
          }
        ]}
      >
        <Image
          source={require("../assets/images/cardImage5.png")}
          style={styles.cardItemImagePlace}
        ></Image>
        <View style={styles.bodyContent}>
          <Text style={styles.annetteCooper}>
            {props.annetteCooper || "Annette Cooper"}
          </Text>
          <Text style={styles.subtitleHere}>
            {props.subtitleHere || "Donated 5 pounds of potatos\nfrom Blossom"}
          </Text>
        </View>
      </View>
      <View style={styles.actionBody}>
        <TouchableOpacity style={styles.actionButton1}></TouchableOpacity>
        <TouchableOpacity style={styles.actionButton2}></TouchableOpacity>
      </View>
      <Text style={styles.loremIpsum}>
        {props.loremIpsum || "10/09: 10:10am"}
      </Text>
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
    left: 0,
    width: 357,
    top: 0,
    height: 112
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    height: 80,
    width: 80,
    margin: 16,
    borderRadius: 100
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  annetteCooper: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  subtitleHere: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  actionBody: {
    padding: 8,
    flexDirection: "row",
    borderRadius: 21
  },
  actionButton1: {
    padding: 8,
    height: 36
  },
  actionButton2: {
    padding: 8,
    height: 36
  },
  loremIpsum: {
    top: 49,
    left: 125,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    fontSize: 12
  }
});

export default MaterialCardWithImageAndTitle5;
