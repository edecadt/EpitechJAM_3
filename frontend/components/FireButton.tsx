import { View, Text, Button, Image, StyleSheet, TouchableOpacity, Alert, PermissionsAndroid, Platform } from 'react-native'
import Geolocation from 'react-native-geolocation-service'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location';

export default function FireButton() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const getPermission = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.error('Permission to access location was denied');
            return;
        }
    };

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.error('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        Alert.alert('Incendie déclaré', 'Merci d’avoir signalé l’incendie. Les secours ont été alertés.');
    };

    useEffect(() => {
        getPermission();
    }, []);

    return (
        <View style={style.container}>
            <TouchableOpacity onPress={getLocation}>
                <Image
                    source={require('../assets/fire_button.png')}
                    style={style.image}
                />
            </TouchableOpacity>
            {location && (() => {
                console.log("Latitude: ", location.coords.latitude);
                console.log("Longitude: ", location.coords.longitude);
                return null; // Add this line
            })()}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width : 200,
        height : 200,
        resizeMode: 'contain',
    },
    content_text: {
        fontWeight: "bold"
    }
});