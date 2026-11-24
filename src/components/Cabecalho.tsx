import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { cores, espacamentos } from "../constants/tema";

type CabecalhoProps = {
  abrirMenu: () => void;
};

export default function Cabecalho({ abrirMenu }: CabecalhoProps) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>MC.</Text>

      <Pressable
        onPress={abrirMenu}
        accessibilityRole="button"
        accessibilityLabel="Abrir menu de navegação"
        style={estilos.botao}
      >
        <Ionicons
          name="menu-outline"
          size={30}
          color={cores.branco}
        />
      </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: cores.fundo,
    paddingHorizontal: espacamentos.medio,
    paddingVertical: espacamentos.pequeno,
    borderBottomWidth: 1,
    borderBottomColor: cores.borda,
  },
  titulo: {
    color: cores.roxo,
    fontSize: 26,
    fontWeight: "bold",
  },
  botao: {
    padding: espacamentos.pequeno,
  },
});