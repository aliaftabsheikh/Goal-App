import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ text, onDelete, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDelete.bind(this, id)}

        //Android 
          android_ripple={{ color: "#210644" }}
        // IOS
        style={(pressed)=> pressed && styles.pressedItem}
        >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#52086A",
},
goalText: {
    color: "#F1F1F1",
    padding: 8,
  },
  pressedItem:{
      opacity: 0.5 //IOS
  }
});

export default GoalItem;
