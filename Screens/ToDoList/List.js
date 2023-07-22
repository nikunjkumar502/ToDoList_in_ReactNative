import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DatePicker from "react-native-modern-datepicker";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { FIREBASE_DB } from "../../firebaseConfig";
import Field from "../Field";

const List = () => {
  const navigation = useNavigation();
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateOfTask, setDateOfTask] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Connection to firebase
  const renderTodo = ({ item }) => {
    const ref = doc(FIREBASE_DB, `/todos/${item.id}`);

    const toggleDone = async () => {
      updateDoc(ref, { done: !item.done });
    };

    const deleteItem = async () => {
      deleteDoc(ref);
    };

    return (
      <View style={styles.todoContainer}>
        <TouchableOpacity onPress={toggleDone} style={styles.todo}>
          {item.done && (
            <Ionicons name="md-checkmark-circle" size={24} color="green" />
          )}
          {!item.done && <Entypo name="circle" size={24} color="black" />}
          <Text style={styles.todoText}>{item.title}</Text>
        </TouchableOpacity>
        <Ionicons
          name="trash-bin-outline"
          size={24}
          color="red"
          onPress={deleteItem}
        />
      </View>
    );
  };


  const handleDateSelect = (text) => {
    setDateOfTask(text);
    setShowDatePicker(false); // Hide the date picker after selecting a date
  };


  useEffect(() => {
    const todoRef = collection(FIREBASE_DB, "todos");

    const subscriber = onSnapshot(todoRef, {
      next: (snapshot) => {
        const todos = [];
        snapshot.docs.forEach((doc) => {
          todos.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setTodos(todos);
      },
    });

    return () => subscriber();
  }, []);

  const addTodo = async (route) => {
    const docRef = await addDoc(collection(FIREBASE_DB, "todos"), {
      title: title,
      description: description,
      date: dateOfTask,
      done: false,
    });

    setTitle("");
    setDescription("");
    setDateOfTask("");
    navigation.navigate(route);
  };

  return (
    <View style={styles.container}>
      <View style={{alignItems: "center" }}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>ToDo List</Text>
      </View>
      <View style={styles.form}>
        <Field
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <Field
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
          multiline
        />
        </View>
         <View style={{alignItems:'center'}}>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <Field
            placeholder="Sat Jun 06 2023"
            value={dateOfTask}
            editable={false}
          />
        </TouchableOpacity>
      </View>
      <Modal
        visible={showDatePicker}
        animationType="slide"
        onRequestClose={() => setShowDatePicker(false)}
      >
        <DatePicker
          mode="datepicker"
          selectorStartingYear={2000}
          onSelectedChange={handleDateSelect}
          selected={dateOfTask}
          minuteInterval={1}
          style={{ borderRadius: 10 }}
          
        />
      </Modal>
      <View>
        <TouchableOpacity title="Add Todo" onPress={addTodo("Schedule")} />
        {todos.length > 0 && (
        <FlatList
          data={todos}
          renderItem={renderTodo}
          keyExtractor={(todo) => todo.id}
        />
      )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 30,
    marginTop: 40
  },
  form: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    marginVertical: 150,
    marginTop:20,
  },
  input: {
    marginBottom: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  todoContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginTop: 20,
    padding: 20,
  },
  todoText: {
    flex: 1,
    paddingHorizontal: 4,
  },
  todo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default List;
