import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MovieCard from './MovieCard';

const { width} = Dimensions.get('window');


export default function trendingMovies({ trending }) {
  return (
    <View className={'mb-5'}>
      {/* <Text className={'text-[#fff] text-xl mx-4 mb-5'}>Trending Movies</Text> */}
      <Carousel data={trending}
        renderItem={({ item }) => <MovieCard item={item} />}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.7}
        slideStyle={{display: 'flex', alignItems: 'center'}}
        // loop={true}
      />
    </View>
  )
}
