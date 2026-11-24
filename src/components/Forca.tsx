import { StyleSheet, View } from "react-native";
import { cores } from "../constants/tema";

type ForcaProps = {
  erros: number;
};

export default function Forca({ erros }: ForcaProps) {
  return (
    <View
      style={estilos.container}
      accessible
      accessibilityLabel={`Forca com ${erros} de 6 partes do boneco`}
    >
      <View style={estilos.base} />
      <View style={estilos.poste} />
      <View style={estilos.topo} />
      <View style={estilos.corda} />

      {erros >= 1 && <View style={estilos.cabeca} />}
      {erros >= 2 && <View style={estilos.corpo} />}
      {erros >= 3 && <View style={estilos.bracoEsquerdo} />}
      {erros >= 4 && <View style={estilos.bracoDireito} />}
      {erros >= 5 && <View style={estilos.pernaEsquerda} />}
      {erros >= 6 && <View style={estilos.pernaDireita} />}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    width: 220,
    height: 240,
    alignSelf: "center",
    position: "relative",
  },
  base: {
    position: "absolute",
    bottom: 10,
    left: 15,
    width: 100,
    height: 6,
    backgroundColor: cores.roxo,
  },
  poste: {
    position: "absolute",
    top: 10,
    left: 55,
    width: 6,
    height: 220,
    backgroundColor: cores.roxo,
  },
  topo: {
    position: "absolute",
    top: 10,
    left: 55,
    width: 120,
    height: 6,
    backgroundColor: cores.roxo,
  },
  corda: {
    position: "absolute",
    top: 10,
    left: 169,
    width: 6,
    height: 35,
    backgroundColor: cores.roxo,
  },
  cabeca: {
    position: "absolute",
    top: 45,
    left: 152,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: cores.roxo,
  },
  corpo: {
    position: "absolute",
    top: 85,
    left: 170,
    width: 4,
    height: 65,
    backgroundColor: cores.roxo,
  },
  bracoEsquerdo: {
    position: "absolute",
    top: 90,
    left: 152,
    width: 4,
    height: 45,
    backgroundColor: cores.roxo,
    transform: [{ rotate: "45deg" }],
  },
  bracoDireito: {
    position: "absolute",
    top: 90,
    left: 188,
    width: 4,
    height: 45,
    backgroundColor: cores.roxo,
    transform: [{ rotate: "-45deg" }],
  },
  pernaEsquerda: {
    position: "absolute",
    top: 143,
    left: 157,
    width: 4,
    height: 50,
    backgroundColor: cores.roxo,
    transform: [{ rotate: "30deg" }],
  },
  pernaDireita: {
    position: "absolute",
    top: 143,
    left: 183,
    width: 4,
    height: 50,
    backgroundColor: cores.roxo,
    transform: [{ rotate: "-30deg" }],
  },
});