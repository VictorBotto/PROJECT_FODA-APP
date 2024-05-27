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
          <View style={styles.dataBox}>
            <Text style={styles.dataText}>Últimos Dados:</Text>
            <Text style={styles.dataLabel}>Local: {data.location}</Text>
            <Text style={styles.dataText}></Text>
            <Text style={styles.dataLabel}>Umidade do Ar: <Text style={styles.dataValue}>{data.value1} %</Text></Text>
            <Text style={styles.dataLabel}>Temperatura do Ar: <Text style={styles.dataValue}>{data.value2} °C</Text></Text>
            <Text style={styles.dataLabel}>Umidade do Solo: <Text style={styles.dataValue}>{data.value3} %</Text></Text>
            <Text style={styles.dataText}></Text>
            <Text style={styles.dataText}>Última Atualização: {data.reading_time}</Text>
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
    marginBottom: 10,
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  button: {
    backgroundColor: "#628A4C",
    width: "80%",
    height: 40,
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
  dataBox: {
    backgroundColor: "#628A4C",
    width: "80%",
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 50,
  },
  dataText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  dataLabel: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dataValue: {
    fontSize: 24,
    color: "black",
    fontWeight: 'bold',
  }
});
