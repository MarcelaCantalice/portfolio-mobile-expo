import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { Animated, Easing, StyleSheet } from "react-native";

export default function FotoPerfil() {
  const [animacao] = useState(() => new Animated.Value(0));

  useEffect(() => {
    const entrada = Animated.timing(animacao, {
      toValue: 1,
      duration: 1400,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    });

    entrada.start();

    return () => entrada.stop();
  }, [animacao]);

  const deslocamento = animacao.interpolate({
    inputRange: [0, 0.55, 0.75, 0.9, 1],
    outputRange: [-100, 10, -4, 2, 0],
  });

  const rotacao = animacao.interpolate({
    inputRange: [0, 0.55, 0.75, 0.9, 1],
    outputRange: ["-6deg", "3deg", "-2deg", "1deg", "0deg"],
  });

  const opacidade = animacao.interpolate({
    inputRange: [0, 0.55, 1],
    outputRange: [0, 1, 1],
  });

  return (
    <Animated.View
      style={[
        estilos.container,
        {
          opacity: opacidade,
          transform: [
            { translateY: deslocamento },
            { rotate: rotacao },
          ],
        },
      ]}
    >
      <Image
        source={require("../../assets/images/portfolio/perfil.jpg")}
        style={estilos.imagem}
        contentFit="cover"
        accessibilityLabel="Foto de perfil"
      />
    </Animated.View>
  );
}

const estilos = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "78%",
    maxWidth: 300,
    aspectRatio: 350 / 430,
    borderWidth: 2,
    borderColor: "#8b5cf6",
    borderRadius: 28,
    padding: 4,
  },
  imagem: {
    width: "100%",
    height: "100%",
    borderRadius: 22,
  },
});