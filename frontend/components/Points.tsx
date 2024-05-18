import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Marker } from 'react-native-maps';

export default function Points({location}: any) {
    return (
        <Marker coordinate={{latitude: location.latitude, longitude: location.longitude}}>
            <Image source={require("../assets/images/arrowflame.png")} style={styles.markerImage} />
        </Marker>
    );
}

const styles = StyleSheet.create({
    markerImage: {
        width: 30,
        height: 30,
    },
});