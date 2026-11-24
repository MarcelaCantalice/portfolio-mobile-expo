import { StyleSheet, Text, View } from "react-native";
import ProjetoCard from "../components/ProjetoCard";
import Tela from "../components/Tela";
import TextoGradiente from "../components/TextoGradiente";
import {
    cores,
    espacamentos,
    fontes,
} from "../constants/tema";
import { projetos } from "../data/projetos";

export default function Projetos() {
  return (
    <Tela>
      <View style={estilos.container}>
        <Text style={estilos.introducao}>
          Trabalhos que desenvolvi
        </Text>

        <TextoGradiente
          texto="Projetos"
          estilo={estilos.titulo}
        />

        <View style={estilos.cards}>
          {projetos.map((projeto) => (
            <ProjetoCard
              key={projeto.titulo}
              {...projeto}
            />
          ))}
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
  cards: {
    marginTop: espacamentos.grande,
    gap: espacamentos.grande,
  },
});