import React, {useState } from 'react';
import { ImageBackground,Image, StyleSheet,TextInput, View, Button } from 'react-native';
export default function App() {

const [valor, setValor] = useState('');

  const [resultado, setResultado] = useState('')


  return (

    <View style={styles.container}>
      <ImageBackground source={require("./logo-escanor.jpg")} resizeMode = 'cover' style={styles.img1}>
      <View>
        <Image source={require('./escanoooor.jpg')}  resizeMode="" style={styles.img2}/>
      </View>
        <View style={styles.titulo}>
        <h1>{resultado}</h1>
          </View>       
        <TextInput style={styles.input} placeholder="Que Personagem é esse?" onChange={(e) =>{
    setValor(e.target.value)
  }}/>
        <Button title="Responder" onPress={() =>{
    setResultado(valor)
  }} ></Button>
      </ImageBackground>
    </View>
  );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FF5733'
  },
  img1:{
    flex:1,
    alignItems: 'center',
    justifyContent:"center",
    width: '100&', height: '100%',
  },
  img2:{
    flex:1,
    justifyContent:"center",
    width: 150,
    height: 150,
    resizeMode: 'stretch',
    borderRadius: 500,  
    borderRadius: 500,
    margin: 20  
  },
  input: {
    height: 40,
    backgroundColor: '#FFF',
    color: 'blue',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  titulo: {
    backgroundColor: '#C18B72'
  }
});
