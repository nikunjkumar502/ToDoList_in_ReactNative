import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Background from "./Background";
import { lightBlue } from "./Style";
import Field from "./Field";
import Btn from "./Btn";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

// create a component
const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const handleLogin = () => {
    try {
      const user = signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
      alert("Sign In Failed: " + error.message);
    }
  }

  return (
    <Background>
      <View>
        <View style={{ alignItems: "center", width: 460 }}>
          <Text
            style={{
              color: "#2BB789",
              fontWeight: "bold",
              fontSize: 80,
              marginVertical: 20,
              marginTop: 100,
              paddingTop: 20,
              paddingBottom: 50,
            }}
          >
            Login
          </Text>

          <View
            style={{
              backgroundColor: "white",
              height: 700,
              width: 460,
              borderTopLeftRadius: 100,
              paddingTop: 50,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 35, color: "black", fontWeight: "bold" }}>
              Welcome Back
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              Login to your account
            </Text>
            <Field
              placeholder="Email/Username"
              keyboardType={"email-address"}
              onChangeText={(text) => setEmail(text)}
              value={email}
              autoCapitalize="none"
            />
            <Field
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
            <View
              style={{ alignItems: "flex-end", width: "80%", paddingRight: 16 }}
            >
              <Text
                style={{
                  color: { lightBlue },
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Forgot Password
              </Text>
            </View>

            <Btn
              textColor="white"
              bgColor={lightBlue}
              btnLable="Login"
              Press={() => handleLogin()}
            />

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
                Don't have an account ?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Signup")}
              >
                <Text
                  className="font-semibold text-yellow-500"
                  style={{
                    color: { lightBlue },
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Background>
  )
};

//make this component available to the app
export default Login;
