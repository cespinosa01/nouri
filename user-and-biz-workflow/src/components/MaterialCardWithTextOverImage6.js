import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialMapView from "./MaterialMapView";

function MaterialCardWithTextOverImage6(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <MaterialMapView style={styles.materialMapView}></MaterialMapView>
        <View style={styles.bodyContent}>
          <Text style={styles.titleGoesHere2}>
            DigInn to Harlem Community Fridge
          </Text>
          <Text style={styles.text}>10 minute walk</Text>
        </View>
        <Text style={styles.titleGoesHere1}></Text>
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
  cardBody: {
    backgroundColor: "rgba(0,0,0,0.2)",
    width: 359,
    height: 94,
    flex: 1,
    marginTop: 200,
    marginLeft: -1,
    marginRight: -1
  },
  materialMapView: {
    position: "absolute",
    left: 0,
    top: -266,
    width: 359,
    height: 360
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 0.44
  },
  titleGoesHere2: {
    fontFamily: "oswald-regular",
    fontSize: 24,
    color: "#FFF",
    paddingBottom: 12,
    width: 395,
    height: 42
  },
  text: {
    fontSize: 14,
    color: "#FFF",
    lineHeight: 16,
    opacity: 0.5,
    width: 115,
    height: 16
  },
  titleGoesHere1: {
    fontSize: 24,
    color: "#FFF",
    paddingBottom: 12
  }
});

export default MaterialCardWithTextOverImage6;
