import { Pressable, StyleSheet, Text, View } from "react-native";
import { bordas, cores } from "../constants/tema";
import { alfabeto } from "../data/palavras";

type TecladoForcaProps = {
  letrasCorretas: string[];
  letrasErradas: string[];
  jogoFinalizado: boolean;
  escolherLetra: (letra: string) => void;
};

export default function TecladoForca({
  letrasCorretas,
  letrasErradas,
  jogoFinalizado,
  escolherLetra,
}: TecladoForcaProps) {
  return (
    <View style={estilos.container}>
      {alfabeto.map((letra) => {
        const correta = letrasCorretas.includes(letra);
        const errada = letrasErradas.includes(letra);
        const utilizada = correta || errada;
        const bloqueada = utilizada || jogoFinalizado;

        return (
          <Pressable
            key={letra}
            disabled={bloqueada}
            onPress={() => escolherLetra(letra)}
            accessibilityRole="button"
            accessibilityLabel={`Letra ${letra}`}
            accessibilityState={{ disabled: bloqueada }}
            style={({ pressed }) => [
              estilos.tecla,
              correta && estilos.teclaCorreta,
              errada && estilos.teclaErrada,
              jogoFinalizado && !utilizada && estilos.teclaBloqueada,
              pressed && estilos.teclaPressionada,
            ]}
          >
            <Text style={estilos.letra}>
              {letra}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
  },
  tecla: {
    width: 40,
    height: 44,
    backgroundColor: "#181c32",
    borderWidth: 1,
    borderColor: cores.roxoEscuro,
    borderRadius: bordas.pequena,
    justifyContent: "center",
    alignItems: "center",
  },
  letra: {
    color: cores.branco,
    fontSize: 18,
    fontWeight: "500",
  },
  teclaCorreta: {
    backgroundColor: "#14532d",
    borderColor: cores.sucesso,
  },
  teclaErrada: {
    backgroundColor: "#7f1d1d",
    borderColor: cores.erro,
  },
  teclaBloqueada: {
    opacity: 0.4,
  },
  teclaPressionada: {
    backgroundColor: cores.roxoEscuro,
    transform: [{ scale: 0.94 }],
  },
});