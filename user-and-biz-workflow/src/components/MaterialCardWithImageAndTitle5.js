import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";

function MaterialCardWithImageAndTitle5(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.eveWashington}>Eve Washington</Text>
          <Text style={styles.pickupAt7Pm}>
            Pickup at 7pm | 3 Bags of Apples
          </Text>
        </View>
      </View>
      <Icon name="check" style={styles.icon}></Icon>
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
    justifyContent: "space-between"
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  eveWashington: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  pickupAt7Pm: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  icon: {
    top: 29,
    left: 278,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  }
});

export default MaterialCardWithImageAndTitle5;
