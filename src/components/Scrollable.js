import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Scrollable(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardItem1Style}></View>
      <View style={styles.body}></View>
      <Text style={styles.loremIpsum}>Your most recent update</Text>
      <Text style={styles.loremIpsum3}>
        Currently we are overflowing with food, but {"\n"}thank you!
      </Text>
      <Text style={styles.lastUpdated}>Last updated: 10/09 9am</Text>
      <View style={styles.rect}>
        <Text style={styles.updateStatus}>Update Status</Text>
      </View>
      <View style={styles.rect2Stack}>
        <View style={styles.rect2}>
          <Text style={styles.incomingDeliveries}>Incoming Deliveries</Text>
        </View>
        <View style={styles.rect3}>
          <View style={styles.todayStackRow}>
            <View style={styles.todayStack}>
              <Text style={styles.today}>Today</Text>
              <Text style={styles.today1}>6:30-7:30pm</Text>
            </View>
            <Text style={styles.today2}>5 gallons of milk</Text>
          </View>
          <Text style={styles.today3}>3 boxes of pasta</Text>
        </View>
      </View>
      <View style={styles.rect4}>
        <View style={styles.thursdayStackRow}>
          <View style={styles.thursdayStack}>
            <Text style={styles.thursday}>Thursday</Text>
            <Text style={styles.thursday1}>7:30-8:30pm</Text>
          </View>
          <Text style={styles.today4}>2 pounds of tomatoes</Text>
        </View>
        <Text style={styles.today5}>3 loaves of bread</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  cardItem1Style: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    height: 72
  },
  body: {
    padding: 16
  },
  loremIpsum: {
    top: 20,
    left: 60,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 153,
    height: 16
  },
  loremIpsum3: {
    top: 40,
    left: 60,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 268,
    height: 32
  },
  lastUpdated: {
    top: 88,
    left: 194,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)"
  },
  rect: {
    top: 115,
    left: 195,
    width: 157,
    height: 34,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 21,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0
  },
  updateStatus: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    marginTop: 8,
    marginLeft: 31
  },
  rect2: {
    top: 0,
    left: 0,
    width: 461,
    height: 44,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  incomingDeliveries: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 15,
    marginTop: 12,
    marginLeft: 141
  },
  rect3: {
    top: 43,
    left: 27,
    width: 358,
    height: 78,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  today: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  today1: {
    top: 15,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  todayStack: {
    width: 78,
    height: 31
  },
  today2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 18,
    marginTop: 23
  },
  todayStackRow: {
    height: 39,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 33,
    marginRight: 127
  },
  today3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 128
  },
  rect2Stack: {
    top: 189,
    left: 0,
    width: 461,
    height: 121,
    position: "absolute"
  },
  rect4: {
    top: 321,
    left: 0,
    width: 461,
    height: 125,
    position: "absolute",
    backgroundColor: "rgba(252,204,198,1)"
  },
  thursday: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  thursday1: {
    top: 14,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  thursdayStack: {
    width: 78,
    height: 30
  },
  today4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 16,
    marginTop: 24
  },
  thursdayStackRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 61,
    marginRight: 169
  },
  today5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 155
  }
});

export default Scrollable;
