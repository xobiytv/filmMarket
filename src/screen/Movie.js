import { useNavigation } from '@react-navigation/native'
// import { StatusBar } from 'expo-status-bar'
import React, { useReducer, useState } from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'

export default function Movie() {
    const navigation = useNavigation()
    const [isFavorite, setIsFavorite] = useState(false)
    const {params: item} = useReducer()

    console.log(item);
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 50 }}
            className={'flex-1 bg-slate-900'}
        >
            <View className={'w-full'}>
                <SafeAreaView className={'absolute z-20 w-full flex-row justify-between items-center px-4'} >
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <ChevronLeftIcon color={'#fff'} strokeWidth={2.5} size={35} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsFavorite(prev => !prev)} >
                        <HeartIcon color={isFavorite ? 'red' : 'white'} strokeWidth={2.5} size={35} />
                    </TouchableOpacity>
                </SafeAreaView>

            </View>
        </ScrollView>
    )
}
