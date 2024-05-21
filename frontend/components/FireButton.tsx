import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { ref, push, set } from "firebase/database";
import { database } from "@/firebaseConfig";
import { useAuth } from "@/context/authContext";
import { LocationObject } from "expo-location";

interface FireButtonProps {
  location: LocationObject | null;
}

export default function FireButton({ location }: FireButtonProps) {
  const { user, increaseAlertCount } = useAuth();

  const handlePress = async () => {
    if (!location) {
      Alert.alert("Erreur", "Localisation non disponible.");
      return;
    }

    try {
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
      Alert.alert("Erreur", "Échec de l'envoi de l'alerte. Veuillez réessayer.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
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
    position: "absolute",
    bottom: 75,
    right : 20,
    alignSelf: "center",
  },
  fireButton: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 100,
    borderWidth: 1.2,
    borderColor: 'black',
    backgroundColor: '#303030',
  },
});
