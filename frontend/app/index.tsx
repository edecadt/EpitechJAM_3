import {Text, View, StyleProp, ViewStyle} from "react-native";

export default function Index() {
    return (
        <View style={styles.container} >
            <Text>FireAlert</Text>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    } as StyleProp<ViewStyle>
};
