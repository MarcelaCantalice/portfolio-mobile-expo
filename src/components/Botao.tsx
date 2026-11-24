import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
    bordas,
    cores,
    espacamentos,
    fontes,
    gradientes,
} from "../constants/tema";

type BotaoProps = {
  titulo: string;
  aoPressionar: () => void;
  icone?: keyof typeof Ionicons.glyphMap;
  variante?: "principal" | "secundario";
};

export default function Botao({
  titulo,
  aoPressionar,
  icone,
  variante = "principal",
}: BotaoProps) {
  const conteudo = (
    <>
      {icone && (
        <Ionicons
          name={icone}
          size={20}
          color={cores.branco}
        />
      )}

      <Text style={estilos.texto}>{titulo}</Text>
    </>
  );

  return (
    <Pressable
      onPress={aoPressionar}
      accessibilityRole="button"
      accessibilityLabel={titulo}
      style={({ pressed }) => [
        estilos.botao,
        pressed && estilos.pressionado,
      ]}
    >
      {variante === "principal" ? (
        <LinearGradient
          colors={gradientes.botao}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={estilos.principal}
        >
          {conteudo}
        </LinearGradient>
      ) : (
        <View style={estilos.secundario}>
          {conteudo}
        </View>
      )}
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  botao: {
    borderRadius: bordas.media,
    overflow: "hidden",
  },
  principal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: espacamentos.pequeno,
    padding: espacamentos.medio,
    minHeight: 48,
  },
  secundario: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: espacamentos.pequeno,
    padding: espacamentos.medio,
    minHeight: 48,
    borderWidth: 1,
    borderColor: cores.roxo,
    borderRadius: bordas.media,
    backgroundColor: cores.card,
  },
  texto: {
    color: cores.branco,
    fontSize: fontes.normal,
    fontWeight: "600",
    textAlign: "center",
  },
  pressionado: {
    opacity: 0.75,
  },
});