import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import {
    bordas,
    cores,
    espacamentos,
    fontes,
    gradientes,
} from "../constants/tema";

type TituloSecaoProps = {
  titulo: string;
  subtitulo?: string;
};

export default function TituloSecao({
  titulo,
  subtitulo,
}: TituloSecaoProps) {
  return (
    <View style={estilos.container}>
      <Text
        style={estilos.titulo}
        accessibilityRole="header"
      >
        {titulo}
      </Text>

      <LinearGradient
        colors={gradientes.principal}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={estilos.linha}
      />

      {subtitulo && (
        <Text style={estilos.subtitulo}>
          {subtitulo}
        </Text>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    marginBottom: espacamentos.grande,
  },
  titulo: {
    color: cores.branco,
    fontSize: fontes.titulo,
    fontWeight: "bold",
  },
  linha: {
    width: 60,
    height: 4,
    borderRadius: bordas.circular,
    marginTop: espacamentos.pequeno,
  },
  subtitulo: {
    color: cores.textoSecundario,
    fontSize: fontes.normal,
    marginTop: espacamentos.medio,
    lineHeight: 24,
  },
});