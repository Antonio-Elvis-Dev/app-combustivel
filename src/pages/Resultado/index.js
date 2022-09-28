import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";

export default function Detalhes() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.areaTitulo}>
        <Image source={require("../../assets/gas.png")} />
        <Text>Compensa usar Álcool</Text>
      </View>
      <View>
        <Text>Com os Preços:</Text>
        <Text>Álcool: 4.35</Text>
        <Text>Gasolina: 6.10</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text>Calcular Novamente</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
