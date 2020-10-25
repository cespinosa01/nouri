import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function CupertinoSegmentWithTwoTabs(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.rect2}>
          <Text style={styles.upcomingPickups}>
            {props.upcomingPickups || "Upcoming Pickups"}
          </Text>
        </View>
        <TouchableOpacity style={styles.segmentTextWrapperRight}>
          <Text style={styles.pastDonations}>
            {props.pastDonations || "Past Donations"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  rect: {
    height: 29,
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row",
    borderTopRightRadius: 21,
    borderBottomRightRadius: 21
  },
  rect2: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(255,225,77,1)",
    padding: 6,
    borderTopLeftRadius: 21,
    borderBottomLeftRadius: 21
  },
  upcomingPickups: {
    fontSize: 13,
    color: "rgba(18,3,3,1)"
  },
  segmentTextWrapperRight: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 6,
    borderWidth: 1,
    borderColor: "rgba(255,225,77,1)",
    borderTopRightRadius: 21,
    borderBottomRightRadius: 21
  },
  pastDonations: {
    fontSize: 13,
    color: "rgba(0,0,0,1)"
  }
});

export default CupertinoSegmentWithTwoTabs;
