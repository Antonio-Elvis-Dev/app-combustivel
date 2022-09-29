import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
  Image,
  Modal,
} from "react-native";

import Resultado from "./src/pages/Resultado";

export default function App() {
  const [modalStatus, setModalStatus] = useState(false);
  const [valorAlcool, setValorAlcool] = useState(0);
  const [valorGas, setValorGas] = useState(0);
  const [compensa, setCompensa] = useState("");

  function calcular() {
    var calculo = (parseFloat(valorAlcool).toFixed(2) / parseFloat(valorGas).toFixed(2));

    var teste = calculo <= 0.7 ? "Alcool" : "Gasolina";

    setModalStatus(true);
    setCompensa(teste);
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.areaTitulo}>
        <Image style={styles.logo} source={require("./src/assets/logo.png")} />
        <Text style={styles.titulo}>Qual a melhor opção?</Text>
      </View>
      <View style={styles.areaForm}>
        <Text style={styles.textoInfo}>Álcool (preço por litro):</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.textoInput}
          placeholder="Ex: 4.35"
          onChangeText={(valor) => setValorAlcool(valor)}
          alcool = {valorAlcool}
        />
        <Text style={styles.textoInfo}>Gasolina (preço por Litro):</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.textoInput}
          placeholder="Ex: 6.10"
          onChangeText={(valor) => setValorGas(valor)}
          gas = {valorGas}

        />
        <TouchableOpacity onPress={calcular} style={styles.button}>
          <Text
            style={[styles.textoInfo, { fontSize: 20, fontWeight: "bold" }]}
          >
            Calcular
          </Text>
        </TouchableOpacity>
      </View>
      <Modal visible={modalStatus} animationType={"slide"}>
        <Resultado 
        voltar={() => setModalStatus(false)}
        
        
        />
      </Modal>
    </SafeAreaView>
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
    marginBottom: 60,
  },
  areaForm: {
    alignItems: "stretch",
    justifyContent: "center",
    marginLeft: "5%",
  },
  titulo: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  textoInfo: {
    color: "#fff",
    fontSize: 18,
  },
  textoInput: {
    borderRadius: 8,
    width: "95%",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#FFF",
    color: "#000",
  },
  button: {
    borderRadius: 8,
    width: "95%",
    padding: 10,
    backgroundColor: "#e67e08",
    alignItems: "center",
    marginTop: 10,
  },
});
