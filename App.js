import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from "react-native";
import {StatusBar} from 'expo-status-bar'

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput"

const App = () => {
  const [modalVisibility, setModalVisibility] = useState(false)
  const [courseGoal, setCourseGoal] = useState([]);

  const startAddGoalHandler = ()=>{
    setModalVisibility(true);
  }

  const endAddGoalHandler = ()=>{
    setModalVisibility(false);
  }
 
  const addGoalHandler = (enterGoalText) => {
    setCourseGoal((currentCourseGoal) => [...currentCourseGoal, {text : enterGoalText, id : Math.random().toString()}]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) =>{
    setCourseGoal((currentCourseGoal)=>{
      return currentCourseGoal.filter((goal)=> goal.id !== id);
    })
  };
  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalHandler}/>
      {modalVisibility && <GoalInput visible={modalVisibility} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoal}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} onDelete={deleteGoalHandler} id={itemData.item.id}/>;
          }}
          keyExtractor = {(item, index)=>{
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
</>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  }
  
});

export default App;
