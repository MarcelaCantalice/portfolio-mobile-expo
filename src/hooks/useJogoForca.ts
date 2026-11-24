import { useState } from "react";
import {
    alfabeto,
    maximoTentativas,
    palavras,
} from "../data/palavras";

function sortearPalavra(palavraAnterior?: string) {
  const opcoes = palavras.filter(
    (palavra) => palavra !== palavraAnterior
  );

  const indice = Math.floor(
    Math.random() * opcoes.length
  );

  return opcoes[indice];
}

export default function useJogoForca() {
  const [palavra, setPalavra] = useState(
    () => sortearPalavra()
  );

  const [letrasUsadas, setLetrasUsadas] = useState<string[]>([]);

  const letrasCorretas = letrasUsadas.filter(
    (letra) => palavra.includes(letra)
  );

  const letrasErradas = letrasUsadas.filter(
    (letra) => !palavra.includes(letra)
  );

  const erros = letrasErradas.length;

  const tentativasRestantes = maximoTentativas - erros;

  const venceu = palavra
    .split("")
    .every((letra) => letrasCorretas.includes(letra));

  const perdeu = tentativasRestantes === 0;

  const jogoFinalizado = venceu || perdeu;

  const palavraOculta = palavra.split("").map(
    (letra) =>
      letrasCorretas.includes(letra) ? letra : "_"
  );

  function escolherLetra(letra: string) {
    if (
      jogoFinalizado ||
      letrasUsadas.includes(letra) ||
      !alfabeto.includes(letra)
    ) {
      return;
    }

    setLetrasUsadas((anteriores) =>
      anteriores.includes(letra)
        ? anteriores
        : [...anteriores, letra]
    );
  }

  function reiniciar() {
    setPalavra((anterior) => sortearPalavra(anterior));
    setLetrasUsadas([]);
  }

  return {
    palavra,
    palavraOculta,
    letrasUsadas,
    letrasCorretas,
    letrasErradas,
    erros,
    tentativasRestantes,
    venceu,
    perdeu,
    jogoFinalizado,
    escolherLetra,
    reiniciar,
  };
}