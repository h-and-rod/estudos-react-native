import { StatusBar } from "expo-status-bar";
import { useReducer, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button} from "react-native";

export default function App() {
  const listener = (state: any, action: any) => {
    switch (action.type) {
      case "add-new-task":
        return {
          tasks: [...state.tasks, { name: action.inputValue, isDone: false }],
        };
      default:
        return state;
    }
  };

  const [inputValue, setInputValue] = useState("");
  const [state, dispatch] = useReducer(listener, { tasks: [] });

  const handleAddTask = () => {
    dispatch({ type: "add-new-task", inputValue });
    setInputValue("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inline}>
        <TextInput
          style={styles.enter}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        ></TextInput>
        <Button title="adicionar tarefa" onPress={handleAddTask}></Button>
      </View>
      {state.tasks.map((task: any) => (
        <Text style={[styles.enter, { marginTop: 10 }]}>{task.name}</Text>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c013f",
    alignItems: "center",
    justifyContent: "center",
  },
  big: {
    fontSize: 30,
    fontWeight: 800,
  },
  inline: {
    flexDirection: "row",
    color: "white "
  },
  enter: {
    borderColor: "#fff",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    width: 160,
    color: "black",
  },
});
