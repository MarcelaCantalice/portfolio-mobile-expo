import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import CardAnimado from "../components/CardAnimado";
import Tela from "../components/Tela";
import TextoGradiente from "../components/TextoGradiente";
import {
  bordas,
  cores,
  espacamentos,
  fontes,
} from "../constants/tema";

const categorias = [
  {
    titulo: "Linguagens",
    icone: "code",
    habilidades: ["C", "Java", "JavaScript", "Python"],
  },
  {
    titulo: "Desenvolvimento Web",
    icone: "globe",
    habilidades: ["HTML", "CSS", "React", "Next.js"],
  },
  {
    titulo: "Banco de Dados",
    icone: "database",
    habilidades: ["SQL", "MySQL"],
  },
  {
    titulo: "Ferramentas",
    icone: "tools",
    habilidades: ["Git", "GitHub", "Figma"],
  },
] as const;

export default function Habilidades() {
  return (
    <Tela>
      <View style={estilos.container}>
        <Text style={estilos.introducao}>
          Conhecimentos e tecnologias
        </Text>

        <TextoGradiente
          texto="Habilidades"
          estilo={estilos.titulo}
        />

        <View style={estilos.cards}>
          {categorias.map((categoria) => (
            <CardAnimado key={categoria.titulo}>
              <View style={estilos.conteudoCard}>
                <FontAwesome5
                  name={categoria.icone}
                  size={30}
                  color={cores.azul}
                />

                <Text style={estilos.tituloCard}>
                  {categoria.titulo}
                </Text>

                <View style={estilos.habilidades}>
                  {categoria.habilidades.map((habilidade) => (
                    <View
                      key={habilidade}
                      style={estilos.etiqueta}
                    >
                      <Text style={estilos.textoEtiqueta}>
                        {habilidade}
                      </Text>
                    </View>
                  ))}
                </View>
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
    gap: espacamentos.medio,
  },
  tituloCard: {
    color: cores.branco,
    fontSize: 22,
    fontWeight: "bold",
  },
  habilidades: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  etiqueta: {
    backgroundColor: cores.fundo,
    borderWidth: 1,
    borderColor: "#3b4560",
    borderRadius: bordas.pequena,
    paddingHorizontal: 13,
    paddingVertical: 9,
  },
  textoEtiqueta: {
    color: cores.roxoClaro,
    fontSize: 14,
  },
});