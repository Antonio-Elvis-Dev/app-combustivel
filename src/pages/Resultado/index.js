import React from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";

export default function Resultado(props) {
  return (
    <View style={styles.container}>
      <View style={styles.areaTitulo}>
        <Image source={require("../../assets/gas.png")} />
        <Text style={styles.titulo}>{props.data.melhor}</Text>
      </View>
      <View style={styles.areaResultado}>
        <Text style={styles.info}>Com os Preços:</Text>
        <Text style={styles.resultado}>Álcool: {props.data.alcool} </Text>
        <Text style={styles.resultado}>Gasolina: {props.data.gasolina}</Text>
      </View>
      <View style={styles.areaButton}>
        <TouchableOpacity onPress={props.voltar} style={styles.button}
        
        >
          <Text style={styles.textoButton}>Calcular Novamente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#121212",
  },
  areaTitulo: {
    alignItems: "center",
  },
  titulo: {
    color: "#669200",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 30,
  },
  areaResultado: {
    alignItems: "center",
  },
  info: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    marginBottom: 10,
  },
  resultado: {
    color: "#fff",
    fontSize: 18,
  },
  areaButton: {
    alignItems: "center",
    marginTop: 30,
  },
  button: {
    borderWidth: 2,
    borderColor: "#f50000",
    padding: 15,
    borderRadius: 8,
    width: "70%",
    alignItems: "center",
  },
  textoButton: {
    color: "#f50000",
    fontWeight: "bold",
    fontSize: 18,
  },
});
