import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useAuth } from "@/context/authContext";

export default function ToolBar() {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        height: 90,
        backgroundColor: "#303030",
        borderTopWidth: 1,
        borderTopColor: "#303030",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View className="flex items-center flex-row gap-0 bg-zinc-700 pl-2 rounded-xl">
          <Text style={{ marginRight: -10 }} className="text-white pr-1">
            {user?.alertCount}
          </Text>
          <Image
            style={{ width: 50, height: 50, marginLeft: -10 }}
            source={require("../assets/fire_button.png") }
            />
        </View>
        <TouchableOpacity onPress={handleLogout}>
          <SimpleLineIcons name="logout" size={24} color={"#A1A1AA"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
