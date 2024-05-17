import { Text, View, StyleProp, ViewStyle, Image, TouchableOpacity } from 'react-native';

export default function Index() {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => alert('Flame button pressed!')}>
                <Image source={require('../assets/images/flame.png')} style={styles.flameButton} />
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    } as StyleProp<ViewStyle>,
    flameButton: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    } as StyleProp<ViewStyle>,
};
