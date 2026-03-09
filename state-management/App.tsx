import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import chicoHappy from './assets/chico-happy.jpg';
import chicoSad from './assets/chico-sad.jpg';
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={chicoSad} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
