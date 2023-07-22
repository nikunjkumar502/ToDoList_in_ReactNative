//import liraries
import React from 'react';
import { View, ImageBackground } from 'react-native';

// create a component
const Background = ({children}) => {
    return (
        <View >
            <ImageBackground source={require('../assets/images/jarvis.jpg')} style ={{height: '100%'}}/>
            <View style={{position: 'absolute'}}>
                {children}
            </View>
        </View>
    )
};



//make this component available to the app
export default Background;
