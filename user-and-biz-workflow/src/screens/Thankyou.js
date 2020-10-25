import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function Thankyou(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.success}>success!</Text>
        <Text style={styles.loremIpsum}>
          Thank you for volenteering, the busness and Mutual Aid fund has been
          notified
        </Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Feed")}
          style={styles.button}
        >
          <Text style={styles.goBack}>go back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  rect: {
    width: 375,
    height: 812,
    backgroundColor: "rgba(152,185,130,1)",
    alignSelf: "center"
  },
  success: {
    fontFamily: "oswald-regular",
    color: "rgba(255,255,255,1)",
    height: 74,
    width: 241,
    fontSize: 50,
    textAlign: "center",
    marginTop: 265,
    marginLeft: 67
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 43,
    width: 278,
    textAlign: "center",
    marginTop: 12,
    marginLeft: 55
  },
  button: {
    width: 146,
    height: 31,
    backgroundColor: "rgba(255,225,77,1)",
    borderRadius: 21,
    marginTop: 265,
    marginLeft: 114
  },
  goBack: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 7,
    marginLeft: 49
  }
});

export default Thankyou;
