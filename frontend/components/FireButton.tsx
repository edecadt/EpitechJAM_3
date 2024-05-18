import { View, Text, Button, Image, StyleSheet, TouchableOpacity, Alert, PermissionsAndroid, Platform } from 'react-native'
import Geolocation from 'react-native-geolocation-service'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location';
import {database} from "@/firebaseConfig";
import {push, ref, set} from "firebase/database";
import {useAuth} from "@/context/authContext";

export default function FireButton() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const { logout, user } = useAuth();

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
    console.log("Latitude: ", location.coords.latitude);
    console.log("Longitude: ", location.coords.longitude);
    const locationsRef = ref(database, 'locations'); // Reference to the 'locations' path
    const newLocationRef = push(locationsRef); // Generates a new child location with a unique key
    set(newLocationRef, {
        userId: user.userId,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        timestamp: Date.now() // You can also store the current timestamp
    }).then(() => {
        console.log('Location data saved successfully.');
    }).catch((error) => {
        console.error('Failed to save location data: ', error);
    });
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
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        position: 'absolute',
        right: -30, // Increase this value to move the button further to the right
        bottom: 60,
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