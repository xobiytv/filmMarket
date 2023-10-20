import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import {  Text, ScrollView, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import { fetchPersonDetail, fetchPersonMovies, image185, image342, image500 } from '../api';
import Loading from '../componets/loader'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import UpComingMovies from '../componets/UpComingMovies';

const {width, height} = Dimensions.get('window')

export default function Person() {
  const [isLoading, setIsLoading] = useState(true);
  const [person, setPerson] = useState({});
  const [personMovies, setPersonMovies] = useState([])

  const navigation = useNavigation();
  const [isFavourite, setIsFavourite] = useState(false)

  const {params: id} = useRoute();
  useEffect(() => {
    getPersonDetail();
    getPersonMovies()
  }, [id])

  console.log(id);
  const getPersonDetail  = async () => {
    const data = await fetchPersonDetail(id);
    setPerson(data);
    setIsLoading(false)
    console.log(data);
  };
  console.log(person.profile_path);
  const getPersonMovies = async () => {
    const data = await fetchPersonMovies(id);
    setPersonMovies(data.cast)

    // console.log(data);
  };
  return (
    <ScrollView className={'flex-1 bg-slate-900' } 
      contentContainerStyle={{paddingBottom:40}}
    >
      <SafeAreaView
					className={
						'absolute z-20 w-full flex-row justify-between items-center px-4'
					}
				>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<ChevronLeftIcon
							color={'#fff'}
							strokeWidth={2.5}
							size={30}
						/>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => setIsFavourite(prev => !prev)}
					>
						<HeartIcon
							color={isFavourite ? 'red' : 'white'}
							strokeWidth={2.5}
							size={35}
						/>
					</TouchableOpacity>
				</SafeAreaView>
      {isLoading ? <Loading/> : 
      
      <View>
        <View
						className={'flex-row justify-center'}
						style={{
							shadowColor: 'gray',
							shadowRadius: 40,
							shadowOffset: { width: 0, height: 5 },
							shadowOpacity: 1,
						}}
					>
						<View className='items-center rounded-full overflow-hidden h-72 w-72 border-neutral-500 border-2'>
							<Image
								source={{ uri: image342(person?.profile_path) }}
								style={{ height: height * 0.43, width: width * 0.74 }}
							/>
						</View>
					</View>

          <View className={'mt-6'}>
						<Text
							className={'text-3xl text-white font-bold text-center'}
						>
							{person?.name}
						</Text>
						<Text
							className={'text-neutral-400 text-base text-center'}
						>
							{person?.place_of_birth}
						</Text>
					</View>

          <View
						className={
							'mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full'
						}
					>
						<View
							className={
								'border-r-2 border-r-neutral-400 px-2 items-center'
							}
						>
							<Text className={'text-white font-semibold'}>
								Gender
							</Text>
							<Text className={'text-neutral-400 text-sm'}>
								{person?.gender === 1 ? 'Female' : 'Male'}
							</Text>
						</View>
						<View
							className={
								'border-r-2 border-r-neutral-400 px-2 items-center'
							}
						>
							<Text className={'text-white font-semibold'}>
								Birthday
							</Text>
							<Text className={'text-neutral-400 text-xs'}>
								{person?.birthday}
							</Text>
						</View>
						<View className='border-r-2 border-r-neutral-400 px-2 items-center'>
							<Text className='text-white font-semibold'>
								Known for
							</Text>
							<Text className='text-neutral-300 text-xs'>
								{person?.known_for_department}
							</Text>
						</View>
						<View className='px-2 items-center'>
							<Text className='text-white font-semibold'>
								Popularity
							</Text>
							<Text className='text-neutral-300 text-xs'>
								{person?.popularity?.toFixed(2)} %
							</Text>
						</View>
					</View>

            <View className={'my-6 mx-4 space-y-2'}>
              <Text className={'text-white text-lg'}>Biography</Text>
              <Text className={'text-neutral-400 tracking-wide'}>{person?.biography}</Text>
            </View>


        {person?.id && personMovies.length > 0 && <UpComingMovies title={'Movies'} upcoming={personMovies}/>}
      </View>
      
      

      }
      
       
    </ScrollView>
  )
}
