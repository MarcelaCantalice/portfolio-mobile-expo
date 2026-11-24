import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import Tela from "../components/Tela";
import TextoGradiente from "../components/TextoGradiente";
import {
    bordas,
    cores,
    espacamentos,
    fontes,
    gradientes,
} from "../constants/tema";

export default function Academica() {
  return (
    <Tela>
      <View style={estilos.container}>
        <Text style={estilos.introducao}>
          Minha trajetória
        </Text>

        <TextoGradiente
          texto="Experiência Acadêmica"
          estilo={estilos.titulo}
        />

        <View style={estilos.card}>
          <View style={estilos.linhaTemporal}>
            <LinearGradient
              colors={gradientes.principal}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={estilos.linha}
            />

            <View style={estilos.ponto} />
          </View>

          <View style={estilos.informacoes}>
            <Text style={estilos.periodo}>
              2024 — Atualmente
            </Text>

            <Text style={estilos.curso}>
              Ciência da Computação
            </Text>

            <Text style={estilos.instituicao}>
              Universidade Católica de Pernambuco — UNICAP
            </Text>

            <Text style={estilos.semestre}>
              5º período
            </Text>
          </View>
        </View>
      </View>
    </Tela>
  );
}

const estilos = StyleSheet.create({
  container: {
    paddingTop: espacamentos.grande,
    gap: espacamentos.pequeno,
  },
  introducao: {
    color: cores.roxo,
    fontSize: fontes.normal,
    fontWeight: "500",
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
  },
  card: {
    flexDirection: "row",
    backgroundColor: cores.card,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: bordas.grande,
    padding: espacamentos.grande,
    marginTop: espacamentos.grande,
    gap: espacamentos.medio,
  },
  linhaTemporal: {
    width: 14,
    alignItems: "center",
    position: "relative",
  },
  linha: {
    width: 3,
    flex: 1,
    borderRadius: 2,
  },
  ponto: {
    position: "absolute",
    top: 10,
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: cores.azul,
    borderWidth: 2,
    borderColor: cores.card,
  },
  informacoes: {
    flex: 1,
    gap: 12,
    paddingVertical: espacamentos.pequeno,
  },
  periodo: {
    color: cores.roxoClaro,
    fontSize: 14,
  },
  curso: {
    color: cores.branco,
    fontSize: 23,
    fontWeight: "bold",
  },
  instituicao: {
    color: cores.textoSecundario,
    fontSize: fontes.normal,
    lineHeight: 25,
  },
  semestre: {
    color: cores.azul,
    fontSize: fontes.normal,
    fontWeight: "bold",
  },
});