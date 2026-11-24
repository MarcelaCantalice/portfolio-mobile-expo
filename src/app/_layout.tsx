import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Cabecalho from "../components/Cabecalho";
import Menu from "../components/Menu";
import { cores } from "../constants/tema";

export default function RootLayout() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <View style={estilos.container}>
      <StatusBar style="light" />

      <SafeAreaView edges={["top"]} style={estilos.cabecalho}>
        <Cabecalho
          abrirMenu={() => setMenuAberto(true)}
        />
      </SafeAreaView>

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: cores.fundo,
          },
          animation: "fade",
        }}
      />

      <Menu
        visivel={menuAberto}
        fecharMenu={() => setMenuAberto(false)}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  cabecalho: {
    backgroundColor: cores.fundo,
  },
});