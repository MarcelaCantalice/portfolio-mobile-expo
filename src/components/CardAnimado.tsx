import { ReactNode, useState } from "react";
import {
  Animated,
  Easing,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { bordas, cores } from "../constants/tema";

type CardAnimadoProps = {
  children: ReactNode;
  estilo?: StyleProp<ViewStyle>;
  deslocamento?: number;
  aoPressionar?: () => void;
  rotuloAcessibilidade?: string;
};

export default function CardAnimado({
  children,
  estilo,
  deslocamento = 4,
  aoPressionar,
  rotuloAcessibilidade,
}: CardAnimadoProps) {
  const [animacao] = useState(() => new Animated.Value(0));
  const [ativo, setAtivo] = useState(false);

  function ativar() {
    setAtivo(true);

    Animated.timing(animacao, {
      toValue: -deslocamento,
      duration: 150,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }

  function desativar() {
    setAtivo(false);

    Animated.timing(animacao, {
      toValue: 0,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }

  return (
    <Pressable
      onPress={aoPressionar ?? (() => {})}
      onPressIn={ativar}
      onPressOut={desativar}
      onHoverIn={ativar}
      onHoverOut={desativar}
      accessibilityRole={aoPressionar ? "link" : undefined}
      accessibilityLabel={rotuloAcessibilidade}
      accessible={!!aoPressionar}
    >
      <Animated.View
        style={[
          estilos.card,
          estilo,
          {
            borderColor: ativo ? "#8b5cf6" : cores.borda,
            transform: [{ translateY: animacao }],
          },
        ]}
      >
        {children}
      </Animated.View>
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  card: {
    backgroundColor: cores.card,
    borderWidth: 1,
    borderRadius: bordas.grande,
  },
});