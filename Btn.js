//import liraries
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// create a component
const Btn = ({ bgColor, textColor, btnLable, Press}) => {
    return (
        <TouchableOpacity onPress={Press}
        style={
            {
                backgroundColor: bgColor, 
                borderRadius: 100, 
                alignItems: 'center', 
                width: 350,
                height: 50,
                paddingVertical: 5,
                marginVertical: 15
            }
        }>
            <Text style={{color: textColor, fontSize:32, fontWeight: 'bold' }}>{btnLable}</Text>
        </TouchableOpacity>
    )
};


//make this component available to the app
export default Btn;
