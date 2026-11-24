import { StyleSheet, Text, View } from "react-native";
import Tela from "../components/Tela";
import TextoGradiente from "../components/TextoGradiente";
import {
    bordas,
    cores,
    espacamentos,
    fontes,
} from "../constants/tema";

const areasInteresse = [
  "Desenvolvimento de Software",
  "Gestão de Projetos",
  "Robótica",
  "Inteligência Artificial",
  "Cibersegurança",
];

export default function Profissional() {
  return (
    <Tela>
      <View style={estilos.container}>
        <Text style={estilos.introducao}>
          Minha trajetória profissional
        </Text>

        <TextoGradiente
          texto="Experiência Profissional"
          estilo={estilos.titulo}
        />

        <View style={estilos.conteudo}>
          <View style={estilos.disponibilidade}>
            <View style={estilos.indicador} />

            <Text style={estilos.textoDisponibilidade}>
              Disponível para estágio
            </Text>
          </View>

          <Text style={estilos.subtitulo}>
            Em busca da primeira oportunidade de estágio
          </Text>

          <Text style={estilos.descricao}>
            Busco minha primeira oportunidade de estágio na área de
            tecnologia, onde possa aplicar os conhecimentos adquiridos
            durante a graduação e desenvolver novas habilidades. Tenho
            interesse em desenvolvimento de software, ainda explorando
            áreas como front-end e back-end, e também em gestão de projetos
            de tecnologia e metodologias ágeis. Além disso, tenho interesse
            em robótica, inteligência artificial e cibersegurança.
          </Text>

          <View style={estilos.areas}>
            {areasInteresse.map((area) => (
              <View key={area} style={estilos.etiqueta}>
                <Text style={estilos.textoEtiqueta}>
                  {area}
                </Text>
              </View>
            ))}
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
  conteudo: {
    marginTop: espacamentos.grande,
    gap: espacamentos.grande,
  },
  disponibilidade: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: cores.card,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: bordas.circular,
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 8,
  },
  indicador: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: cores.sucesso,
  },
  textoDisponibilidade: {
    color: cores.textoSecundario,
    fontSize: 14,
  },
  subtitulo: {
    color: cores.branco,
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 32,
  },
  descricao: {
    color: cores.textoSecundario,
    fontSize: fontes.normal,
    lineHeight: 28,
  },
  areas: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  etiqueta: {
    backgroundColor: cores.card,
    borderWidth: 1,
    borderColor: "#3b4560",
    borderRadius: bordas.circular,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  textoEtiqueta: {
    color: cores.roxoClaro,
    fontSize: 14,
  },
});