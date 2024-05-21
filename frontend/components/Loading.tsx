import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

type LoadingProps = {
  size: number;
};

export default function Loading({ size }: LoadingProps) {
  return <View style={{ height: size, aspectRatio: 1 }}>
    <LottieView style={{ flex: 1 }} source={require("../assets/loading.json")} autoPlay loop />
  </View>;
}
