import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>🎉Bem-vindos à aula!🎉</Text>
      <Text>📝 Vamos aprender React Native</Text>
      <Text>🚀 Inline styles são fáceis de entender!</Text>
      <Text>🌈🎨 Alterar cores e tamanhos é divertido!</Text>
      <Text>✨ Desafio: tente recriar este layout!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#147BD1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
