//import liraries
import React from "react";
import { TextInput } from "react-native";
import { lightBlue } from "./Style";

// create a component
const Field = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 500,
        width: 30,
        height: 50,
        color: { lightBlue },
        paddingHorizontal: 10,
        width: "80%",
        backgroundColor: "#eae2be",
        marginVertical: 10,
      }}
      placeholderTextColor={lightBlue}
    ></TextInput>
  )
};

//make this component available to the app
export default Field;
