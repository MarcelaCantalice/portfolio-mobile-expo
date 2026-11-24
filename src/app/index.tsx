import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Botao from "../components/Botao";
import CursorTerminal from "../components/CursorTerminal";
import FotoPerfil from "../components/FotoPerfil";
import Tela from "../components/Tela";
import TextoGradiente from "../components/TextoGradiente";
import {
  bordas,
  cores,
  espacamentos,
  fontes,
} from "../constants/tema";
import useDecodificacao from "../hooks/useDecodificacao";

export default function Home() {
  const router = useRouter();
  const nome = useDecodificacao("Marcela Cantalice");

  return (
    <Tela>
      <View style={estilos.container}>
        <LinearGradient
          colors={["#18152e", cores.fundo, "#101b30"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={StyleSheet.absoluteFill}
        />

        <FotoPerfil />

        <View style={estilos.apresentacao}>
          <Text style={estilos.saudacao}>
            Olá, eu sou
          </Text>

          <View style={estilos.nomeContainer}>
            <TextoGradiente
              texto={nome}
              estilo={estilos.nome}
            />
            <CursorTerminal />
          </View>

          <Text style={estilos.titulo}>
            Estudante de Ciência da Computação
          </Text>

          <Text style={estilos.descricao}>
            Entre ideias, códigos e projetos, construindo
            meu caminho na tecnologia.
          </Text>

          <View style={estilos.botoes}>
            <Botao
              titulo="Conheça meus projetos"
              aoPressionar={() => router.navigate("/projetos")}
            />

            <Botao
              titulo="Entre em contato"
              variante="secundario"
              aoPressionar={() => router.navigate("/contato")}
            />
          </View>
        </View>
      </View>
    </Tela>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: espacamentos.grande,
    paddingHorizontal: espacamentos.pequeno,
    borderRadius: bordas.grande,
    overflow: "hidden",
    gap: espacamentos.grande,
  },
  apresentacao: {
    gap: espacamentos.medio,
  },
  saudacao: {
    color: cores.texto,
    fontSize: fontes.normal,
  },
  nomeContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    minHeight: 48,
  },
  nome: {
    fontSize: 32,
    fontWeight: "bold",
  },
  titulo: {
    color: cores.branco,
    fontSize: 23,
    fontWeight: "bold",
    lineHeight: 30,
  },
  descricao: {
    color: cores.textoSecundario,
    fontSize: fontes.normal,
    lineHeight: 26,
  },
  botoes: {
    gap: 12,
    marginTop: espacamentos.pequeno,
  },
});