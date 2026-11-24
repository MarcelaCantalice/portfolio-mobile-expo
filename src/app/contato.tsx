import { Ionicons } from "@expo/vector-icons";
import { Alert, Linking, StyleSheet, Text, View } from "react-native";
import CardAnimado from "../components/CardAnimado";
import Tela from "../components/Tela";
import TextoGradiente from "../components/TextoGradiente";
import {
    cores,
    espacamentos,
    fontes,
} from "../constants/tema";

const contatos = [
  {
    titulo: "E-mail",
    descricao: "marcelacantalicesantos@gmail.com",
    icone: "mail-outline",
    link: "mailto:marcelacantalicesantos@gmail.com",
  },
  {
    titulo: "GitHub",
    descricao: "github.com/MarcelaCantalice",
    icone: "logo-github",
    link: "https://github.com/MarcelaCantalice",
  },
  {
    titulo: "LinkedIn",
    descricao: "Marcela Cantalice",
    icone: "logo-linkedin",
    link: "https://www.linkedin.com/in/marcela-cristine-cantalice-santos-994309410/",
  },
] as const;

export default function Contato() {
  async function abrirContato(link: string) {
    try {
      await Linking.openURL(link);
    } catch {
      Alert.alert(
        "Não foi possível abrir o link",
        "Verifique se existe um aplicativo compatível instalado no dispositivo."
      );
    }
  }

  return (
    <Tela>
      <View style={estilos.container}>
        <Text style={estilos.introducao}>
          Entre em contato
        </Text>

        <TextoGradiente
          texto="Contato"
          estilo={estilos.titulo}
        />

        <View style={estilos.cards}>
          {contatos.map((contato) => (
            <CardAnimado
              key={contato.titulo}
              deslocamento={3}
              aoPressionar={() => abrirContato(contato.link)}
              rotuloAcessibilidade={`Abrir ${contato.titulo}`}
            >
              <View style={estilos.conteudoCard}>
                <Ionicons
                  name={contato.icone}
                  size={32}
                  color={cores.roxo}
                />

                <View style={estilos.informacoes}>
                  <Text style={estilos.tituloCard}>
                    {contato.titulo}
                  </Text>

                  <Text style={estilos.descricao}>
                    {contato.descricao}
                  </Text>
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
    flexDirection: "row",
    alignItems: "center",
    padding: espacamentos.grande,
    gap: espacamentos.medio,
    minHeight: 100,
  },
  informacoes: {
    flex: 1,
    gap: 6,
  },
  tituloCard: {
    color: cores.branco,
    fontSize: 20,
    fontWeight: "bold",
  },
  descricao: {
    color: cores.textoSuave,
    fontSize: 15,
    lineHeight: 22,
  },
});