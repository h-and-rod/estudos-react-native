import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🎉Bem-vindos à aula!🎉</Text>
      <Text style={[styles.card1, styles.pattern]}>📝 Vamos aprender React Native</Text>
      <Text style={[styles.card2, styles.pattern]}>🚀 Inline styles são fáceis de entender!</Text>
      <Text style={[styles.card3, styles.pattern]}>🌈🎨 Alterar cores e tamanhos é divertido!</Text>
      <Text style={[styles.card4, styles.pattern]}>✨ Desafio: tente recriar este layout!</Text>
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
  titulo: {
    fontSize: 30,
    color: "orange",
    marginBottom: 20
  },
  pattern: {
    marginBottom: 20,
    fontSize: 20,
    padding: 5
  },
  card1: {
    padding: 5,
    backgroundColor: "#E6F2FF",
    color: "#5F93BF",
    borderRadius: 4 
  },
  card2: {
    padding: 5,
    backgroundColor: "#D4F5E1",
    color: "#4E9F72",
    borderRadius: 4
  },
  card3: {
    padding: 5,
    backgroundColor: "#FFF5E6",
    color: "#FFB65F",
    borderRadius: 4
  },
  card4: {
    padding: 5,
    backgroundColor: "#F3E6FF",
    color: "#941595",
    borderRadius: 4,
  }
});
