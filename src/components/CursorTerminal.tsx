import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { cores } from "../constants/tema";

export default function CursorTerminal() {
  const [visivel, setVisivel] = useState(true);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setVisivel((anterior) => !anterior);
    }, 400);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <View
      style={[
        estilos.cursor,
        { opacity: visivel ? 1 : 0 },
      ]}
    />
  );
}

const estilos = StyleSheet.create({
  cursor: {
    width: 10,
    height: 25,
    marginLeft: 6,
    backgroundColor: cores.roxo,
  },
});