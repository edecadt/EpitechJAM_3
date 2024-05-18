import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { useAuth } from "@/context/authContext";
import FireButton from "@/components/FireButton";
import Map from "@/components/MapView";

export default function Home() {
    const { logout, user } = useAuth();

  // console.log("User data: ", user);
  const handleLogout = async () => {
    await logout();
  };
return (
    <View style={{ flex: 1 }}>
        <Map />
        <FireButton />
    </View>
);
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        position: 'absolute',
        right: 20, // Adjust this value as needed
        bottom: 20, // Adjust this value as needed
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