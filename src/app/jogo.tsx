import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Botao from "../components/Botao";
import Forca from "../components/Forca";
import TecladoForca from "../components/TecladoForca";
import Tela from "../components/Tela";
import TextoGradiente from "../components/TextoGradiente";
import {
    bordas,
    cores,
    espacamentos,
    fontes,
} from "../constants/tema";
import useJogoForca from "../hooks/useJogoForca";

export default function Jogo() {
  const router = useRouter();

  const {
    palavra,
    palavraOculta,
    letrasCorretas,
    letrasErradas,
    erros,
    tentativasRestantes,
    venceu,
    perdeu,
    jogoFinalizado,
    escolherLetra,
    reiniciar,
  } = useJogoForca();

  return (
    <Tela>
      <View style={estilos.container}>
        <Pressable
          style={estilos.voltar}
          accessibilityRole="button"
          onPress={() => router.navigate("/")}
        >
          <Ionicons
            name="arrow-back"
            size={20}
            color={cores.roxo}
          />

          <Text style={estilos.textoVoltar}>
            Voltar ao portfólio
          </Text>
        </Pressable>

        <View style={estilos.cabecalho}>
          <TextoGradiente
            texto="Jogo da Forca"
            estilo={estilos.titulo}
          />

          <Text style={estilos.categoria}>
            Categoria: Animais
          </Text>
        </View>

        <View style={estilos.card}>
          <Text style={estilos.tentativas}>
            Tentativas restantes:{" "}
            <Text
              style={[
                estilos.numeroTentativas,
                tentativasRestantes === 0 && estilos.textoErro,
              ]}
            >
              {tentativasRestantes}
            </Text>
          </Text>

          <Forca erros={erros} />
        </View>

        <View style={estilos.card}>
          <View style={estilos.palavra}>
            {palavraOculta.map((letra, indice) => (
              <View
                key={indice}
                style={estilos.espacoLetra}
              >
                <Text style={estilos.letraPalavra}>
                  {letra === "_" ? " " : letra}
                </Text>
              </View>
            ))}
          </View>

          {venceu && (
            <View style={estilos.mensagemVitoria}>
              <Ionicons
                name="trophy-outline"
                size={30}
                color={cores.sucesso}
              />

              <Text style={estilos.textoVitoria}>
                Parabéns! Você venceu!
              </Text>
            </View>
          )}

          {perdeu && (
            <View style={estilos.mensagemDerrota}>
              <Text style={estilos.textoDerrota}>
                Você perdeu!
              </Text>

              <Text style={estilos.palavraRevelada}>
                A palavra era: {palavra}
              </Text>
            </View>
          )}

          <Text style={estilos.instrucao}>
            Escolha uma letra:
          </Text>

          <TecladoForca
            letrasCorretas={letrasCorretas}
            letrasErradas={letrasErradas}
            jogoFinalizado={jogoFinalizado}
            escolherLetra={escolherLetra}
          />

          <View style={estilos.resultados}>
            <View style={estilos.cardLetras}>
              <Text style={estilos.tituloLetras}>
                Letras corretas
              </Text>

              <Text style={estilos.letrasCorretas}>
                {letrasCorretas.join(", ") || "—"}
              </Text>
            </View>

            <View style={estilos.cardLetras}>
              <Text style={estilos.tituloLetras}>
                Letras erradas
              </Text>

              <Text style={estilos.letrasErradas}>
                {letrasErradas.join(", ") || "—"}
              </Text>
            </View>
          </View>

          <Botao
            titulo="Reiniciar"
            aoPressionar={reiniciar}
          />
        </View>
      </View>
    </Tela>
  );
}

const estilos = StyleSheet.create({
  container: {
    paddingTop: espacamentos.medio,
    paddingBottom: espacamentos.grande,
    gap: espacamentos.grande,
  },
  voltar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    alignSelf: "flex-start",
    paddingVertical: 8,
  },
  textoVoltar: {
    color: cores.roxo,
    fontSize: 15,
    fontWeight: "500",
  },
  cabecalho: {
    alignItems: "center",
    gap: 12,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  categoria: {
    color: cores.roxo,
    fontSize: fontes.normal,
  },
  card: {
    backgroundColor: cores.card,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: bordas.grande,
    padding: espacamentos.medio,
    gap: espacamentos.grande,
  },
  tentativas: {
    color: cores.roxo,
    fontSize: 17,
    textAlign: "center",
  },
  numeroTentativas: {
    color: cores.branco,
    fontWeight: "bold",
  },
  textoErro: {
    color: cores.erro,
  },
  palavra: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 5,
    paddingVertical: 12,
  },
  espacoLetra: {
    width: 17,
    height: 32,
    borderBottomWidth: 2,
    borderBottomColor: cores.branco,
    alignItems: "center",
    justifyContent: "center",
  },
  letraPalavra: {
    color: cores.branco,
    fontSize: 20,
    fontWeight: "bold",
  },
  instrucao: {
    color: cores.roxo,
    fontSize: fontes.normal,
    textAlign: "center",
  },
  resultados: {
    flexDirection: "row",
    gap: 10,
  },
  cardLetras: {
    flex: 1,
    minHeight: 90,
    backgroundColor: cores.fundo,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: bordas.media,
    padding: 12,
    gap: 12,
  },
  tituloLetras: {
    color: cores.roxo,
    fontSize: 14,
    fontWeight: "500",
  },
  letrasCorretas: {
    color: cores.sucesso,
    fontSize: fontes.normal,
    lineHeight: 24,
  },
  letrasErradas: {
    color: cores.erro,
    fontSize: fontes.normal,
    lineHeight: 24,
  },
  mensagemVitoria: {
    backgroundColor: "#14532d",
    borderWidth: 1,
    borderColor: cores.sucesso,
    borderRadius: bordas.media,
    padding: espacamentos.medio,
    alignItems: "center",
    gap: 10,
  },
  textoVitoria: {
    color: cores.sucesso,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  mensagemDerrota: {
    backgroundColor: "#450a0a",
    borderWidth: 1,
    borderColor: cores.erro,
    borderRadius: bordas.media,
    padding: espacamentos.medio,
    alignItems: "center",
    gap: 10,
  },
  textoDerrota: {
    color: cores.erro,
    fontSize: 18,
    fontWeight: "bold",
  },
  palavraRevelada: {
    color: cores.branco,
    fontSize: fontes.normal,
    textAlign: "center",
  },
});