import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Octicons, Ionicons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Loading from "@/components/Loading";
import CustomKeyboardView from "@/components/CustomKeyboardView";

export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const emailRef = useRef("");
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSignUp = async () => {
    if (!emailRef.current || !passwordRef.current || !usernameRef.current) {
      Alert.alert("Inscription", "Veuillez remplir tous les champs");
      return;
    }
    setLoading(true);
  };

  return (
    <CustomKeyboardView>
      <StatusBar style="dark" />
      <View
        style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }}
        className="flex-1"
      >
        <View className="items-center pb-10">
          <Image
            style={{ height: hp(25) }}
            resizeMode="contain"
            source={require("../assets/images/register.png")}
          />
        </View>
        <View>
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold tracking-wider text-center text-neutral-800 pb-10"
          >
            Inscription
          </Text>
          <View className="gap-4">
            <View
              style={{ height: hp(7) }}
              className="flex-row px-4 bg-neutral-100 text-center items-center rounded-2xl"
            >
              <Feather name="user" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={(value) => (usernameRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700 px-4"
                placeholder="Nom d'utilisateur"
                placeholderTextColor={"gray"}
              />
            </View>
            <View
              style={{ height: hp(7) }}
              className="flex-row px-4 bg-neutral-100 text-center items-center rounded-2xl"
            >
              <Octicons name="mail" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={(value) => (emailRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700 px-4"
                placeholder="Adresse e-mail"
                placeholderTextColor={"gray"}
              />
            </View>
            <View>
              <View
                style={{ height: hp(7) }}
                className="flex-row px-4 bg-neutral-100 text-center items-center rounded-2xl"
              >
                <Octicons name="lock" size={hp(2.7)} color="gray" />
                <TextInput
                  onChangeText={(value) => (passwordRef.current = value)}
                  secureTextEntry={!passwordVisible} // Update based on state
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700 px-4"
                  placeholder="Mot de passe"
                  placeholderTextColor={"gray"}
                />
                <TouchableOpacity
                  onPress={() => setPasswordVisible(!passwordVisible)}
                >
                  <Ionicons
                    name={passwordVisible ? "eye" : "eye-off"}
                    size={hp(2.7)}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View>
              {loading ? (
                <View className="flex-row justify-center">
                  <Loading size={hp(6.5)} />
                </View>
              ) : (
                <TouchableOpacity
                  style={{ height: hp(6.5) }}
                  className="bg-indigo-500 rounded-xl justify-center items-center"
                  onPress={handleSignUp}
                >
                  <Text
                    style={{ fontSize: hp(2.7) }}
                    className="font-bold tracking-wider text-white"
                  >
                    S'inscrire
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            <View className="flex-row justify-center">
              <Text
                style={{ fontSize: hp(1.8) }}
                className="font-semibold text-neutral-500"
              >
                Vous avez déjà un compte ?
              </Text>
              <Pressable onPress={() => router.push("signIn")}>
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-bold text-indigo-500 pl-2"
                >
                  Se connecter
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
}
