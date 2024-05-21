import React, { useState, useEffect } from "react";
import MapView, { Marker, Circle } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { ref, onValue } from "firebase/database";
import { database } from "@/firebaseConfig";
import Points from "@/components/Points";
import FireButton from "@/components/FireButton";
import * as Location from "expo-location";

export default function Map() {
  const [data, setData] = useState<any[]>([]);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const starCountRef = ref(database, "/locations");
      onValue(starCountRef, (snapshot) => {
        const val = snapshot.val();
        if (val) {
          const currentTime = Date.now();
          const tenMinutesInMillis = 10 * 60 * 1000;
          const filteredData = Object.values(val).filter((location: any) => {
            return currentTime - location.timestamp <= tenMinutesInMillis;
          });
          setData(filteredData);
        } else {
          setData([]);
        }
      });
    };

    const getPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }
    };

    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (error) {
        console.error("Failed to get current location", error);
      }
    };

    getPermission();
    fetchData();
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsMyLocationButton={false}
        showsCompass={false}
        initialRegion={
          location
            ? {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }
            : undefined
        }
      >
        {location && (
          <>
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title="Votre position"
              style={styles.marker}
            />
            <Circle
              center={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              radius={100}
              fillColor="rgba(0, 0, 255, 0.1)"
              strokeColor="rgba(0, 0, 255, 0.3)"
              strokeWidth={2}
            />
          </>
        )}
        {data.map((location: any, index: number) => (
          <Points location={location} key={index} />
        ))}
      </MapView>
      <FireButton location={location} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
