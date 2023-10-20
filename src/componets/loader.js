import React from 'react'
import AnimatedLoader from "react-native-animated-loader";
import { StyleSheet, Text } from 'react-native';

export default function loaders() {
    return (
        <AnimatedLoader
            visible={true}
            overlayColor='rgba(2,6,23, .5)'
            source={require("../../assets/loader.json")}
            animationStyle={styles.lottie}
            speed={10}
        >
            <Text>Loding...</Text>
        </AnimatedLoader>
    );
}
const styles = StyleSheet.create({
    lottie: {
        width: 100,
        height: 100
    }
});