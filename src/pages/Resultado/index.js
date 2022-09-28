import React, { useState } from "react";
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
    <SafeAreaView style={styles.container}>
      <View style={styles.areaTitulo}>
        <Image source={require("../../assets/gas.png")} />
        <Text style={styles.titulo}>Compensa usar Álcool</Text>
      </View>
      <View style={styles.areaResultado}>
        <Text style={styles.info}>Com os Preços:</Text>
        <Text style={styles.resultado}>Álcool: 4.35</Text>
        <Text style={styles.resultado}>Gasolina: 6.10</Text>
      </View>
      <View style={styles.areaButton}>
        <TouchableOpacity style={styles.button}>
          <Text onPress={props.voltar} style={styles.textoButton}>Calcular Novamente</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  areaTitulo: {
    alignItems: "center",
  },
  titulo:{
    color:"#669200",
    fontSize:25,
    fontWeight:'bold'
  },
  areaResultado: {
    alignItems: "center",
  },
  info: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
  resultado:{
    color: "#fff",

  },
  areaButton: {
    alignItems: "center",
  },
  button: {
    borderWidth: 2,
    borderColor: "#f50000",
    padding:10,
    borderRadius:8

  },
  textoButton:{
    color: "#f50000",

  }
});
