//import liraries
import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Background from "./Background";
import { lightBlue } from "./Style";
import Field from "./Field";
import Btn from "./Btn";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword} from "firebase/auth";

// create a component
const Signup = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [contact, setContact] = useState("");

  const auth = getAuth();

  const handleSignup = () => {
    try {
      const user = createUserWithEmailAndPassword(
        auth,
        email,
        password,
        firstname,
        lastname,
        contact
      );
      console.log(user);
      props.navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Background>
      <View style={{ alignItems: "center", width: 460 }}>
        <Text
          style={{
            color: "#2BB789",
            fontWeight: "bold",
            alignContent: "center",
            fontSize: 80,
            marginVertical: 10,
            marginTop: 50,
          }}
        >
          Register
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Create a new account!
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: 700,
            width: 460,
            borderTopLeftRadius: 100,
            paddingTop: 20,
            alignItems: "center",
          }}
        >
          <Field
            placeholder="First Name"
            onChangeText={(text) => setFirstName(text)}
            value={firstname}
          />
          <Field
            placeholder="Last Name"
            onChangeText={(text) => setLastName(text)}
            value={lastname}
          />
          <Field
            placeholder="Contact Number"
            keyboardType="numeric"
            onChangeText={(text) => setContact(text)}
            value={contact}
          />
          <Field
            placeholder="Email/Username"
            keyboardType={"email-address"}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <Field
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <View
            style={{
              width: "80%",
              paddingRight: 19,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={{ color: "grey" }}>
              By signing in, you agree to our{" "}
            </Text>
            <Text
              style={{ color: { lightBlue }, fontWeight: "bold", fontSize: 16 }}
            >
              Terms & Conditions
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={lightBlue}
            btnLable="Signup"
            Press={handleSignup}
          ></Btn>

          <Text style={{ paddingBottom: 20 }}>Or</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifycontent: "center",
              gap: 20,
              paddingBottom: 20,
            }}
          >
            <TouchableOpacity
              style={{
                padding: 5,
                backgroundColor: "#f7fafc",
                borderRadius: 20,
              }}
            >
              <Image
                source={require("../assets/icons/google.png")}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 5,
                backgroundColor: "#f7fafc",
                borderRadius: 20,
              }}
            >
              <Image
                source={require("../assets/icons/apple.png")}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 5,
                backgroundColor: "#f7fafc",
                borderRadius: 20,
              }}
            >
              <Image
                source={require("../assets/icons/facebook.png")}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Already have an account?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text
                style={{
                  color: { lightBlue },
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  )
};

//make this component available to the app
export default Signup;
