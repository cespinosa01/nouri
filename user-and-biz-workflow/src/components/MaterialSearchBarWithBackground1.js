import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialSearchBarWithBackground1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1}>
        <TouchableOpacity
          onPress={() => console.log("Navigate to Finder")}
          style={styles.leftIconButton}
        >
          <MaterialCommunityIconsIcon
            name="map-search"
            style={styles.leftIcon}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <View style={styles.inputStyleStack}>
          <TextInput
            placeholder="Search for another location"
            placeholderTextColor="#ffffff"
            style={styles.inputStyle}
          ></TextInput>
          <TouchableOpacity style={styles.rightIconButton}>
            <MaterialCommunityIconsIcon
              name="close"
              style={styles.rightIcon}
            ></MaterialCommunityIconsIcon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(249,153,141,1)",
    padding: 4,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3,
    borderRadius: 21
  },
  rect1: {
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "center",
    flex: 1
  },
  leftIconButton: {
    padding: 11,
    marginLeft: 5,
    marginTop: 5
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  inputStyle: {
    height: 48,
    color: "#FFFFFF",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "flex-start",
    width: 284,
    lineHeight: 16,
    position: "absolute",
    left: 0,
    top: 0
  },
  rightIconButton: {
    padding: 11,
    position: "absolute",
    top: 1,
    right: 0,
    alignItems: "center"
  },
  rightIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  inputStyleStack: {
    width: 319,
    height: 49,
    marginTop: 4
  }
});

export default MaterialSearchBarWithBackground1;
