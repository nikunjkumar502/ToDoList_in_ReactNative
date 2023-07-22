// //import liraries
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Background from './Background';
// import Btn from './Btn';
// import { lightBlue } from './Style';

// // create a component
// const Home = (props) => {
//     return (
//         <Background>
//             <View style={{marginHorizontal: 40, marginVertical: 100}}>
//             <Text style={{color:"black", fontSize: 50, fontWeight:'bold'}}>Let's Start</Text>
//             <Text style={{color:"black", fontSize: 50, fontWeight:'bold', marginBottom: 60}}>The Jarvis!!!</Text>
//             <Btn bgColor={lightBlue} textColor='black' btnLable="Login" Press={() => props.navigation.navigate("Login")}></Btn>
//             <Btn bgColor='black' textColor={lightBlue} btnLable="Signup" Press={() =>props.navigation.navigate("Signup")}></Btn>

//             </View>
//         </Background>
//     );
// };

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#ffffff',
//     },
// });

// //make this component available to the app
// export default Home;
