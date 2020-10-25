import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function No(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <Image
          source={require("../assets/images/cardImage4.png")}
          style={styles.cardItemImagePlace}
        ></Image>
        <View style={styles.bodyContent}>
          <Text style={styles.subtitleStyle}>2h ago</Text>
        </View>
      </View>
      <Text style={styles.loremIpsum}>
        Eve droped off food from here to there
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    height: 80,
    width: 80,
    margin: 16
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  loremIpsum: {
    top: 44,
    left: 129,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 52,
    width: 136
  }
});

export default No;
