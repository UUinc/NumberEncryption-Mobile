import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';

// Screens
import ConverterScreen from './app/screens/ConverterScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <ConverterScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3a6e82'
  },
});
