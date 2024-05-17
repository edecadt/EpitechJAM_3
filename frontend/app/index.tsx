import {Text, View, StyleProp} from "react-native";
import {ViewStyle} from "react-native";

export default function Index() {
    return (
        <View style={styles.container} >
            <Text>Edit app/index.tsx to edit this screen.</Text>
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
