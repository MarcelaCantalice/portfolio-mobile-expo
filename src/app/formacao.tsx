import { StyleSheet, Text, View } from "react-native";
import CardAnimado from "../components/CardAnimado";
import Tela from "../components/Tela";
import TextoGradiente from "../components/TextoGradiente";
import {
  cores,
  espacamentos,
  fontes,
} from "../constants/tema";

const formacoes = [
  {
    categoria: "Formação para Mentoras",
    titulo: "Technovation Girls Brasil",
    descricao:
      "Participação e conclusão de formação voltada à preparação de mentoras do Technovation Girls Brasil, abordando mentoria, tecnologia e desenvolvimento de projetos.",
  },
  {
    categoria: "Programa de Mentorias 2025",
    titulo: "Avanade",
    descricao:
      "Participação em programa de mentoria voltado ao desenvolvimento de mulheres na área de tecnologia, com acompanhamento profissional e orientação sobre possibilidades de carreira no setor.",
  },
  {
    categoria: "Jornada de Tecnologia — UNICAP 2026",
    titulo: "Boas práticas e produção de jogos numa Jam",
    descricao:
      "Participação em palestra voltada à produção de jogos e às práticas utilizadas durante uma Game Jam.",
  },
];

export default function Formacao() {
  return (
    <Tela>
      <View style={estilos.container}>
        <Text style={estilos.introducao}>
          Aprendizado contínuo
        </Text>

        <TextoGradiente
          texto="Formação Complementar"
          estilo={estilos.titulo}
        />

        <View style={estilos.cards}>
          {formacoes.map((formacao) => (
            <CardAnimado key={formacao.titulo}>
              <View style={estilos.conteudoCard}>
                <Text style={estilos.categoria}>
                  {formacao.categoria}
                </Text>

                <Text style={estilos.tituloCard}>
                  {formacao.titulo}
                </Text>

                <Text style={estilos.descricao}>
                  {formacao.descricao}
                </Text>
              </View>
            </CardAnimado>
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
    gap: espacamentos.medio,
  },
  conteudoCard: {
    padding: espacamentos.grande,
    gap: 12,
  },
  categoria: {
    color: cores.roxo,
    fontSize: 14,
    fontWeight: "500",
  },
  tituloCard: {
    color: cores.branco,
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 29,
  },
  descricao: {
    color: cores.textoSecundario,
    fontSize: fontes.normal,
    lineHeight: 27,
  },
});