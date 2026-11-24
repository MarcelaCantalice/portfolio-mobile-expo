import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { ComponentType, ReactNode } from "react";
import {
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    ViewProps,
} from "react-native";
import { fontes, gradientes } from "../constants/tema";

type TextoGradienteProps = {
  texto: string;
  estilo?: StyleProp<TextStyle>;
};

type MascaraProps = ViewProps & {
  maskElement: ReactNode;
  children?: ReactNode;
};

const Mascara = MaskedView as unknown as ComponentType<MascaraProps>;

export default function TextoGradiente({
  texto,
  estilo,
}: TextoGradienteProps) {
  return (
    <Mascara
      maskElement={
        <Text style={[estilos.texto, estilo]}>
          {texto}
        </Text>
      }
    >
      <LinearGradient
        colors={gradientes.principal}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text
          style={[
            estilos.texto,
            estilo,
            estilos.invisivel,
          ]}
        >
          {texto}
        </Text>
      </LinearGradient>
    </Mascara>
  );
}

const estilos = StyleSheet.create({
  texto: {
    fontSize: fontes.destaque,
    fontWeight: "bold",
    color: "#ffffff",
  },
  invisivel: {
    opacity: 0,
  },
});