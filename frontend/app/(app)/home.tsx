import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { useAuth } from "@/context/authContext";
import Map from "@/components/MapView";
import ToolBar from "@/components/ToolBar";

export default function Home() {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <View style={{ flex: 1 }}>
      <Map />
      <ToolBar />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "absolute",
    right: 20,
    bottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  content_text: {
    fontWeight: "bold",
  },
});
