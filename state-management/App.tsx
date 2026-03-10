import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import chicoHappy from './assets/chico-happy.jpg';
import chicoSad from './assets/chico-sad.jpg';
import { useState } from 'react';

export default function App() {

  const [taFeliz, setTaFeliz] = useState(false)

  function handleHumor(){
    console.log(taFeliz)
    setTaFeliz(humor => !humor)
  }

  return (
    <View style={[styles.container, {backgroundColor: taFeliz?'#4b83f4':'#474646'}]}>
      <TouchableOpacity onPress={handleHumor}>
        <Image style={styles.tamanhoImagem} source={taFeliz ? chicoHappy : chicoSad} />
      </TouchableOpacity>
      <Text>{taFeliz?"Aeeeee" : "Aaaaaa"}</Text>
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
  tamanhoImagem:{
    width: 250,
    height: 250
  }
});
