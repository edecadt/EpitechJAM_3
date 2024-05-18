import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { ref, onValue } from "firebase/database";
import { database } from "@/firebaseConfig";
import Points from "@/components/Points";

export default function Map() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
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
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsMyLocationButton={false}
        showsCompass={false}
      >
        {data.map((location: any, index: number) => {
          return <Points location={location} key={index} />;
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
    width: "100%",
    height: "100%",
  },
});
