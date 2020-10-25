import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function MaterialCardWithContent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardItem1Style}>
        <View style={styles.headerStyle}>
          <Image
            source={require("../assets/images/cardImage18.png")}
            style={styles.leftImage}
          ></Image>
          <View style={styles.headerContent}>
            <Text style={styles.textStyle}>Harlem Community Fridge</Text>
            <Text style={styles.harlemNyc}>Harlem, NYC</Text>
          </View>
        </View>
      </View>
      <Image
        source={require("../assets/images/cardImage19.png")}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          Currently, we are overflowing with food, thank you!
        </Text>
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
  cardItem1Style: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    height: 72
  },
  headerStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  leftImage: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  headerContent: {
    paddingLeft: 16,
    justifyContent: "center"
  },
  textStyle: {
    fontSize: 16,
    color: "#000",
    lineHeight: 20
  },
  harlemNyc: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    flex: 1,
    minHeight: 210
  },
  body: {
    padding: 16
  },
  bodyText: {
    lineHeight: 20,
    fontSize: 14,
    color: "#424242"
  }
});

export default MaterialCardWithContent;
