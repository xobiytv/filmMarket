import React, { useEffect, useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchPopularMovie, fetchTopratedMovie, fetchTrendingMovie, fetchUpcomingMovie } from '../api';
import TrendingMovies from '../componets/trendingMovies';
import UpComingMovies from '../componets/UpComingMovies';
import Loading from '../componets/loader'
import { useNavigation } from '@react-navigation/native';
// import TopRatedMovies from '../componets/TopRatedMovies';

export default function Home() {

	const [trending, setTrending] = useState([])
	const [upcoming, setUpcoming] = useState([])
	const [topRated, setTopRated] = useState([])
	const [popular, setPopular] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const navigation = useNavigation()

	useEffect(() => {


		getTrendingMovie();
		getUpcomingMovie();
		getTopRatedMovie()
		getPopularMovie()

	}, [])

	const getTrendingMovie = async () => {
		const data = await fetchTrendingMovie()
		setTrending(data.results);
		setIsLoading(false)
			;
		// console.log(data);
	}

	const getUpcomingMovie = async () => {
		const data = await fetchUpcomingMovie()
		setUpcoming(data.results);
		// console.log(data);
	}
	const getTopRatedMovie = async () => {
		const data = await fetchTopratedMovie()
		setTopRated(data.results);
		// console.log(data);
	}
	const getPopularMovie = async () => {
		const data = await fetchPopularMovie()
		setPopular(data.results);

	}
	return (
		<View className='flex-1 items-center justify-center bg-slate-900'>
			<SafeAreaView>
				<StatusBar style='light' />
				<View
					className={
						'flex-row justify-between items-center mx-4 border-b-2'
					}
				>
					<Image source={require('../../assets/logo.png')} />
					<TouchableOpacity onPress={() => navigation.navigate('Search')}>
						<MagnifyingGlassIcon
							size={30}
							strokeWidth={2}
							color={'white'}
						/>
					</TouchableOpacity>

				</View>


			</SafeAreaView>
			{isLoading ? (
				<Loading />
			) : (
				<ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>

					{trending.length > 0 && <TrendingMovies trending={trending} />}

					{upcoming.length > 0 && <UpComingMovies upcoming={upcoming} title={"Upcoming movie"} />}
					{upcoming.length > 0 && <UpComingMovies upcoming={trending.reverse()} title={"Treding movie"} />}
					{popular.length > 0 && <UpComingMovies upcoming={popular} title={'Popular movie'} />}
					{topRated.length > 0 && <TrendingMovies trending={topRated} />}
				</ScrollView>
			)}





		</View>
	);
}