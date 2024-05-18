import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  PermissionsAndroid,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { database } from "@/firebaseConfig";
import { push, ref, set } from "firebase/database";
import { useAuth } from "@/context/authContext";

export default function FireButton() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const { logout, user, increaseAlertCount } = useAuth();

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
      const locationsRef = ref(database, "locations");
      const newLocationRef = push(locationsRef);
      await set(newLocationRef, {
        userId: user.userId,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        timestamp: Date.now(),
      });
      Alert.alert(
        "Incendie déclaré",
        "Merci d’avoir signalé l’incendie. Les secours ont été alertés."
      );
      increaseAlertCount();
    } catch (error) {
      Alert.alert(
        "Erreur",
        "Échec de l'envoi de l'alerte. Veuillez réessayer."
      );
    }
  };

  useEffect(() => {
    getPermission();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={getLocation}>
        <Image
          style={styles.fireButton}
          source={require("../assets/fire_button.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fireButton: {
    width: 250,
    height: 250,
    marginBottom: 20,
    marginLeft: -20,
  },
});
