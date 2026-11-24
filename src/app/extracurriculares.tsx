import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import Tela from "../components/Tela";
import TextoGradiente from "../components/TextoGradiente";
import {
    cores,
    espacamentos,
    fontes,
    gradientes,
} from "../constants/tema";

const atividades = [
  {
    categoria: "Robótica Competitiva",
    titulo: "Equipe de Drones da UNICAP",
    descricao:
      "Participação em uma equipe de robótica competitiva voltada ao desenvolvimento de drones e à preparação para futuras competições. A equipe está em fase inicial de desenvolvimento e organização.",
  },
  {
    categoria: "Mentoria Acadêmica",
    titulo: "Projeto Padawan",
    descricao:
      "Atuação como veterana em um projeto de mentoria voltado ao acolhimento de alunos calouros, oferecendo suporte e orientação durante a adaptação à graduação.",
  },
  {
    categoria: "Projeto de Extensão",
    titulo: "SWITAB — Supporting Women in Technology Across Borders",
    descricao:
      "Participação em projeto de extensão voltado ao desenvolvimento de mulheres nas áreas STEM, atuando como mentora de estudantes e, ao mesmo tempo, recebendo mentoria de uma profissional do mercado de tecnologia por meio de encontros de acompanhamento.",
  },
];

export default function Extracurriculares() {
  return (
    <Tela>
      <View style={estilos.container}>
        <Text style={estilos.introducao}>
          Além da sala de aula
        </Text>

        <TextoGradiente
          texto="Extracurricular e Extensão"
          estilo={estilos.titulo}
        />

        <View style={estilos.atividades}>
          {atividades.map((atividade) => (
            <View
              key={atividade.titulo}
              style={estilos.atividade}
            >
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
                <Text style={estilos.categoria}>
                  {atividade.categoria}
                </Text>

                <Text style={estilos.tituloAtividade}>
                  {atividade.titulo}
                </Text>

                <Text style={estilos.descricao}>
                  {atividade.descricao}
                </Text>
              </View>
            </View>
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
  atividades: {
    marginTop: espacamentos.grande,
  },
  atividade: {
    flexDirection: "row",
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
  },
  ponto: {
    position: "absolute",
    top: 8,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: cores.azul,
    borderWidth: 2,
    borderColor: cores.fundo,
  },
  informacoes: {
    flex: 1,
    gap: 12,
    paddingBottom: 40,
  },
  categoria: {
    color: cores.roxo,
    fontSize: 14,
    fontWeight: "500",
  },
  tituloAtividade: {
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