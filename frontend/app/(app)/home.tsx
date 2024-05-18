import { View, Text, Pressable } from "react-native";
import React from "react";
import { useAuth } from "@/context/authContext";

export default function Home() {
  const { logout, user } = useAuth();

  console.log("User data: ", user);
  const handleLogout = async () => {
    await logout();
  };
  return (
    <View>
      <Text>Home</Text>
      <Pressable onPress={handleLogout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}
