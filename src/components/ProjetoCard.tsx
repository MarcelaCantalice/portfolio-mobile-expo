import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Image, ImageSource } from "expo-image";
import {
    Linking,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import {
    bordas,
    cores,
    espacamentos,
    fontes,
} from "../constants/tema";
import CardAnimado from "./CardAnimado";

type ProjetoCardProps = {
  titulo: string;
  descricao: string;
  imagem?: ImageSource | number;
  tecnologias: string[];
  github?: string;
  site?: string;
  textoSite?: string;
  textoGithub?: string;
};

export default function ProjetoCard({
  titulo,
  descricao,
  imagem,
  tecnologias,
  github,
  site,
  textoSite = "Ver projeto",
  textoGithub = "Ver no GitHub",
}: ProjetoCardProps) {
  return (
    <CardAnimado estilo={estilos.card}>
      {imagem && (
        <Image
          source={imagem}
          style={estilos.imagem}
          contentFit="cover"
          accessibilityLabel={`Imagem do projeto ${titulo}`}
        />
      )}

      <View style={estilos.conteudo}>
        {!imagem && (
          <FontAwesome5
            name="code"
            size={30}
            color={cores.azul}
          />
        )}

        <Text style={estilos.titulo}>
          {titulo}
        </Text>

        <Text style={estilos.descricao}>
          {descricao}
        </Text>

        <View style={estilos.tecnologias}>
          {tecnologias.map((tecnologia) => (
            <View
              key={tecnologia}
              style={estilos.etiqueta}
            >
              <Text style={estilos.textoEtiqueta}>
                {tecnologia}
              </Text>
            </View>
          ))}
        </View>

        {(site || github) && (
          <View style={estilos.links}>
            {site && (
              <Pressable
                style={estilos.link}
                accessibilityRole="link"
                accessibilityLabel={`${textoSite}: ${titulo}`}
                onPress={() => Linking.openURL(site)}
              >
                <Ionicons
                  name="open-outline"
                  size={20}
                  color={cores.azul}
                />

                <Text style={estilos.textoLink}>
                  {textoSite}
                </Text>
              </Pressable>
            )}

            {github && (
              <Pressable
                style={estilos.link}
                accessibilityRole="link"
                accessibilityLabel={`GitHub: ${titulo}`}
                onPress={() => Linking.openURL(github)}
              >
                <Ionicons
                  name="logo-github"
                  size={20}
                  color={cores.azul}
                />

                <Text style={estilos.textoLink}>
                  {textoGithub}
                </Text>
              </Pressable>
            )}
          </View>
        )}
      </View>
    </CardAnimado>
  );
}

const estilos = StyleSheet.create({
  card: {
    overflow: "hidden",
  },
  imagem: {
    width: "100%",
    height: 180,
  },
  conteudo: {
    padding: espacamentos.grande,
    gap: espacamentos.medio,
  },
  titulo: {
    color: cores.branco,
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 29,
  },
  descricao: {
    color: cores.textoSecundario,
    fontSize: fontes.normal,
    lineHeight: 26,
  },
  tecnologias: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: espacamentos.pequeno,
    marginTop: 4,
  },
  etiqueta: {
    backgroundColor: cores.fundo,
    borderWidth: 1,
    borderColor: "#3b4560",
    borderRadius: bordas.pequena,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  textoEtiqueta: {
    color: cores.roxoClaro,
    fontSize: 14,
  },
  links: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 6,
  },
  textoLink: {
    color: cores.azul,
    fontSize: 16,
    fontWeight: "600",
  },
});