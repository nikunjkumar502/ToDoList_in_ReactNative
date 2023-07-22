import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

export default function WelcomePage() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#877dfa' }}>
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 40, textAlign: 'center' }}>
          Let's Get Started!
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image
            source={require("../assets/images/welcome.png")}
            style={{ width: 350, height: 350 }}
          />
        </View>
        <View style={{ marginVertical: 16 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('News')}
            style={{ padding: 12, backgroundColor: '#fcd34d', marginHorizontal: 28, borderRadius: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#333', textAlign: 'center' }}>
              News
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate("ToDoList")}>
              <Text style={{ fontWeight: 'bold', color: '#fcd34d' }}>To DoList</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
