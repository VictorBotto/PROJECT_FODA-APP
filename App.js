import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função para buscar dados da API
    const fetchData = async () => {
      try {
        const response = await fetch('http://foda.zapto.org/api/');
        const json = await response.json();
        // Encontrar o item com o ID mais alto
        const highestIdData = json.reduce((max, item) => (item.id > max.id ? item : max), json[0]);
        setData(highestIdData);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("./src/assets/logosf.png")}
        style={styles.logo}
      />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>F.O.D.A</Text>
      </TouchableOpacity>

      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        data && (
          <View style={styles.dataContainer}>
            <Text style={styles.dataText}>Últimos Dados:</Text>
            <Text style={styles.dataText}>Value1: {data.value1}</Text>
            <Text style={styles.dataText}>Value2: {data.value2}</Text>
            <Text style={styles.dataText}>Value3: {data.value3}</Text>
            <Text style={styles.dataText}>Reading Time: {data.reading_time}</Text>
          </View>
        )
      )}
    </View>
  );
}

// Background color and center layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c2f0c7",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginBottom: 60,
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  button: {
    backgroundColor: "#628A4C",
    width: "80%",
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#FFF",
    textAlign: "center"
  },
  dataContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  dataText: {
    fontSize: 18,
    color: "#333",
    fontWeight: 'bold',
  }
});
