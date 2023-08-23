import { StyleSheet, Text, View } from 'react-native';

export default function ConverterScreen() {
    return (
        <View style={styles.container}>
            <Text>Converter</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'red',
    },
});
