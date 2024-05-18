import { View, Text, Button, Image, StyleSheet, TouchableOpacity, Alert, PermissionsAndroid, Platform } from 'react-native'
import FireButton from "@/components/FireButton";

export default function Home() {
    return (
        <View style={style.container}>
            <Text>
                Bonjour
            </Text>
            <FireButton />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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