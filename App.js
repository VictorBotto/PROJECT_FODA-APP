import { View, Text, StyleSheet, Image } from "react-native";
import React from 'react';

export default function App(){
  return(
    <View style={styles.container}>
      <Image
        source={require("./src/assets/logosf.png")}
        style={styles.logo}
      />
      <Text Style={styles.title}>F.O.D.A</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#c2f0c7",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginBottom: 60,
    width: 200, // Defina a largura da imagem conforme necessário
    height: 200, // Defina a altura da imagem conforme necessário
    resizeMode: 'contain' // Ajuste a imagem dentro do contêiner sem distorção
  }
})
