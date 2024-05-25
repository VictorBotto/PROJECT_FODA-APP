import { View, Text, StyleSheet, Image } from "react-native";
import React from 'react';
import Slider from '@react-native-comunity/slider'

export default function App(){
  return(

    //START - IN
    <View style={styles.container}>

        <Image
            source={require("./src/assets/logosf.png")}
            style={styles.logo}
        />
        <Text Style={styles.title}>F.O.D.A</Text>

        <View style={styles.area}>
            <Slider
            style={{height: 50}}
            minimumValue={6}
            maximumValue={20}
            
            />
        </View>

    </View>

    //END - OUT
  )
}

//Background color and center layout
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#c2f0c7",
    justifyContent: 'center',
    alignItems: 'center'
  },
    logo: 
    {

        //center logo image
        marginBottom: 60,
        width: 200, // Defina a largura da imagem conforme necessário
        height: 200, // Defina a altura da imagem conforme necessário
        resizeMode: 'contain' // Ajuste a imagem dentro do contêiner sem distorção
    },
    area: 
    {
        marginTop: 14,
        margimBottom: 14,
        width: "80%",
        backgroundColor: 'red'    
    },
})
