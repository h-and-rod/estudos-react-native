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

  function resetarContador(){
    setContador(0)
  }

  return (
    <View style={[styles.container, {backgroundColor: taFeliz?'#4b83f4':'#474646'}]}>
      <Text style={styles.textoFeliz}>{taFeliz?"ôôô vida boa":""}</Text>
      <Text style={styles.emogis}>{taFeliz?"😂😂😂":"💀"}</Text>
      <TouchableOpacity onPress={handleHumor}>
        <Image
          style={[
            taFeliz ? styles.tamanhoImagemFeliz : styles.tamanhoImagemTriste,
            taFeliz ? styles.bordaFeliz : styles.bordaTriste,
          ]}
          source={taFeliz ? chicoHappy : chicoSad}
        />
      </TouchableOpacity>
      <Text style={styles.legenda}>{taFeliz?"Aeeeee" : "Aaaaaa"}</Text>
      <Text style={styles.contador}>Contador: {contador}</Text>
      <TouchableOpacity onPress={handleHumor} style={styles.botaoMudarHumor}>
        <Text style={styles.textoBotaoMudarHumor}>{taFeliz?"Lembrar de um pepino":"Contar piada"}</Text>
      </TouchableOpacity>
      <Text style={[styles.botaoResetarContador,styles.textoBotaoResetarContador]} onPress={resetarContador}>Resetar contador</Text>
      <Text style={styles.textoMaiorQue10}>{contador>10?"calma lá também":""}</Text>
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
  legenda:{
    marginTop: 10,
    color: "#fff"
  },
  tamanhoImagemFeliz:{
    width: 350,
    height: 350
  },
  tamanhoImagemTriste:{
    width: 250,
    height: 250
  },
  bordaFeliz: {
    borderWidth: 6,
    borderColor: '#ffe066',
  },
  bordaTriste: {
    borderWidth: 6,
    borderColor: '#03080c',
  },
  botaoMudarHumor: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#7d7d7e',
    borderRadius: 5
  },
  textoBotaoMudarHumor: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  botaoResetarContador: {
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#7d7d7e',
    borderRadius: 5
  },
  textoBotaoResetarContador: {
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
  textoMaiorQue10: {
    marginTop: 30,
    color: '#d6ff1e',
    fontSize: 40,
    fontWeight: 'bold'
  },
  emogis: {
    fontSize: 60,
    marginBottom: 20
  },
  textoFeliz: {
    marginTop: 30,
    color: '#d6ff1e',
    fontSize: 40,
    fontWeight: 'bold'
  },
});
