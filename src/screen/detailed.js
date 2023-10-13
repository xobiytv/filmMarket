import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Button, Text, View } from 'react-native'

export default function detailed({navigation}) {
  return (
    <View className='flex-1 items-center justify-center bg-slate-500'>
			<Text>detailed</Text>
			<Button title="Go to Home" onPress={() => navigation.navigate('Home')} />

			<StatusBar style='auto' />
		</View>
  )
}
