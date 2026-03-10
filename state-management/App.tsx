import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import chicoHappy from './assets/chico-happy.jpg';
import chicoSad from './assets/chico-sad.jpg';
import { useState } from 'react';

export default function App() {

  const [taFeliz, setTaFeliz] = useState(false)
  const [contador, setContador] = useState(0)

  function handleHumor(){
    console.log(taFeliz)
    setTaFeliz(humor => !humor)
    aumentarContador()
  }

  function aumentarContador(){
    setContador((valorAtual) => valorAtual + 1)
  }

  return (
    <View style={[styles.container, {backgroundColor: taFeliz?'#4b83f4':'#474646'}]}>
      <TouchableOpacity onPress={handleHumor}>
        <Image style={taFeliz ? styles.tamanhoImagemFeliz:styles.tamanhoImagemTriste} source={taFeliz ? chicoHappy : chicoSad} />
      </TouchableOpacity>
      <Text>{taFeliz?"Aeeeee" : "Aaaaaa"}</Text>
      <Text style={styles.contador}>Contador: {contador}</Text>
      <TouchableOpacity onPress={handleHumor} style={styles.botao}>
        <Text style={styles.textoBotao}>Mudar humor</Text>
      </TouchableOpacity>
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
  tamanhoImagemFeliz:{
    width: 350,
    height: 350
  },
  tamanhoImagemTriste:{
    width: 250,
    height: 250
  },
  botao: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#7d7d7e',
    borderRadius: 5
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  contador: {
    color: '#fff',
    marginTop: 20,
    fontSize: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#7d7d7e',
    borderRadius: 5
  },
});
