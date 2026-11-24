import { ReactNode } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { cores, espacamentos } from "../constants/tema";

type TelaProps = {
  children: ReactNode;
};

export default function Tela({ children }: TelaProps) {
  return (
    <SafeAreaView style={estilos.container}>
      <ScrollView
        contentContainerStyle={estilos.conteudo}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  conteudo: {
    flexGrow: 1,
    padding: espacamentos.medio,
  },
});