import { useEffect, useState } from "react";

export default function useDecodificacao(nome: string) {
  const caracteres = "!@#$%&*<>?/";
  const [nomeExibido, setNomeExibido] = useState(nome);

  useEffect(() => {
    let posicao = 0;

    const intervalo = setInterval(() => {
      if (posicao < nome.length) {
        const parteCorreta = nome.slice(0, posicao);

        const proximoCaractere =
          nome[posicao] === " "
            ? " "
            : caracteres[
                Math.floor(Math.random() * caracteres.length)
              ];

        setNomeExibido(parteCorreta + proximoCaractere);
        posicao++;
      } else {
        setNomeExibido(nome);
        clearInterval(intervalo);
      }
    }, 120);

    return () => clearInterval(intervalo);
  }, [nome]);

  return nomeExibido;
}