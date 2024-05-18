import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, View} from 'react-native';
import {ref, onValue} from "firebase/database";
import {database} from "@/firebaseConfig";
import Points from "@/components/Points";

export default function Map() {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const starCountRef = ref(database, '/locations');
        onValue(starCountRef, (snapshot) => {
            const val = snapshot.val();
            setData(val ? Object.values(val) : []);
        });
    }, []);
    return (
        <View style={styles.container}>
            <MapView style={styles.map}>
                {data.map((location: any, index: number) => {
                    return (
                        <Points location={location} key={index}/>
                    )
                })}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});