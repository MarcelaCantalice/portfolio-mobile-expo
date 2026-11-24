import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import Tela from "../components/Tela";
import TituloSecao from "../components/TituloSecao";
import {
    bordas,
    cores,
    espacamentos,
    fontes,
} from "../constants/tema";

const destaques = [
  {
    titulo: "5º",
    descricao: "Período",
    icone: "school-outline",
  },
  {
    titulo: "Ciência da Computação",
    descricao: "Graduação",
    icone: "laptop-outline",
  },
  {
    titulo: "UNICAP",
    descricao: "Universidade",
    icone: "business-outline",
  },
] as const;

const tecnologias = [
  {
    nome: "React",
    descricao: "Construção da interface por meio de componentes reutilizáveis.",
  },
  {
    nome: "React Native",
    descricao: "Desenvolvimento da interface e das funcionalidades nativas do aplicativo mobile.",
  },
  {
    nome: "Expo",
    descricao: "Ambiente de desenvolvimento, configuração e execução do aplicativo.",
  },
  {
    nome: "TypeScript",
    descricao: "Linguagem utilizada na implementação do aplicativo, com tipagem estática.",
  },
  {
    nome: "Expo Router",
    descricao: "Navegação entre as telas por meio de rotas baseadas em arquivos, utilizando Stack e useRouter.",
  },
  {
    nome: "Expo Linear Gradient",
    descricao: "Criação dos gradientes presentes nos textos, botões e elementos da identidade visual.",
  },
  {
    nome: "Expo Vector Icons",
    descricao: "Exibição dos ícones da interface utilizando Ionicons e FontAwesome5.",
  },
  {
    nome: "Expo Image",
    descricao: "Carregamento e exibição das imagens de perfil e dos projetos.",
  },
  {
    nome: "Masked View",
    descricao: "Aplicação de gradientes diretamente aos textos.",
  },
  {
    nome: "React Native Safe Area Context",
    descricao: "Adaptação da interface às áreas seguras da tela do dispositivo.",
  },
  {
    nome: "Expo Status Bar",
    descricao: "Personalização da barra de status do celular.",
  },
  {
    nome: "Animated e Easing",
    descricao: "Implementação das animações de entrada da foto e das interações com os cards.",
  },
  {
    nome: "StyleSheet",
    descricao: "Organização e definição dos estilos visuais dos componentes e das telas.",
  },
  {
    nome: "View e Text",
    descricao: "Construção dos elementos estruturais e textuais da interface.",
  },
  {
    nome: "Pressable",
    descricao: "Implementação de botões, links e interações por toque.",
  },
  {
    nome: "ScrollView",
    descricao: "Rolagem vertical das telas e do menu de navegação.",
  },
  {
    nome: "Modal",
    descricao: "Exibição do menu de navegação sobre o conteúdo das telas.",
  },
  {
    nome: "Linking",
    descricao: "Abertura de links externos, repositórios, sites e aplicativos de contato.",
  },
  {
    nome: "Alert",
    descricao: "Exibição de mensagens em caso de falha na abertura dos links de contato.",
  },
  {
    nome: "React Hooks",
    descricao: "Gerenciamento de estados e efeitos utilizando useState e useEffect.",
  },
  {
    nome: "Hooks personalizados",
    descricao: "Separação da lógica do jogo da forca e da animação de decodificação do nome, utilizando useJogoForca e useDecodificacao.",
  },
  {
    nome: "Expo Go",
    descricao: "Execução e testes do aplicativo em dispositivo móvel durante o desenvolvimento.",
  },
  {
    nome: "ESLint",
    descricao: "Análise estática do código e identificação de erros e problemas de qualidade.",
  },
  {
    nome: "Node.js e npm",
    descricao: "Execução das ferramentas de desenvolvimento e gerenciamento das dependências.",
  },
  {
    nome: "Git e GitHub",
    descricao: "Controle de versão e hospedagem do código-fonte do projeto.",
  },
  {
    nome: "Visual Studio Code",
    descricao: "Editor utilizado durante a implementação e manutenção do aplicativo.",
  },
];

export default function Sobre() {
  return (
    <Tela>
      <Text style={estilos.introducao}>
        Conheça um pouco
      </Text>

      <TituloSecao titulo="Sobre mim" />

      <View style={estilos.conteudo}>
        <Text style={estilos.paragrafo}>
          Sou estudante do 5º período de Ciência da Computação na
          Universidade Católica de Pernambuco (UNICAP). Ao longo da
          graduação, venho participando de projetos que envolvem diferentes
          áreas da tecnologia, desde desenvolvimento de software até
          robótica.
        </Text>

        <Text style={estilos.paragrafo}>
          Tenho interesse em continuar aprendendo e explorando áreas como
          Robótica, Desenvolvimento de Software, Inteligência Artificial e
          Cibersegurança, buscando minha primeira oportunidade profissional
          na área de tecnologia.
        </Text>
      </View>

      <View style={estilos.destaques}>
        {destaques.map((destaque) => (
          <View
            key={destaque.descricao}
            style={estilos.cardDestaque}
          >
            <Ionicons
              name={destaque.icone}
              size={32}
              color={cores.roxo}
            />

            <Text style={estilos.tituloDestaque}>
              {destaque.titulo}
            </Text>

            <Text style={estilos.descricaoDestaque}>
              {destaque.descricao}
            </Text>
          </View>
        ))}
      </View>

      <View style={estilos.secaoTecnologias}>
        <TituloSecao
          titulo="Tecnologias do aplicativo"
          subtitulo="Tecnologias, bibliotecas, módulos, recursos e ferramentas utilizados no desenvolvimento deste portfólio mobile."
        />

        {tecnologias.map((tecnologia) => (
          <View
            key={tecnologia.nome}
            style={estilos.cardTecnologia}
          >
            <Ionicons
              name="code-slash-outline"
              size={24}
              color={cores.roxo}
            />

            <View style={estilos.informacoesTecnologia}>
              <Text style={estilos.nomeTecnologia}>
                {tecnologia.nome}
              </Text>

              <Text style={estilos.descricaoTecnologia}>
                {tecnologia.descricao}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </Tela>
  );
}

const estilos = StyleSheet.create({
  introducao: {
    color: cores.roxo,
    fontSize: fontes.normal,
    fontWeight: "500",
    marginTop: espacamentos.medio,
    marginBottom: espacamentos.pequeno,
  },
  conteudo: {
    gap: espacamentos.medio,
  },
  paragrafo: {
    color: cores.textoSecundario,
    fontSize: fontes.normal,
    lineHeight: 27,
  },
  destaques: {
    gap: espacamentos.medio,
    marginTop: espacamentos.grande,
  },
  cardDestaque: {
    backgroundColor: cores.card,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: bordas.grande,
    padding: espacamentos.grande,
    alignItems: "center",
    gap: espacamentos.pequeno,
  },
  tituloDestaque: {
    color: cores.branco,
    fontSize: fontes.subtitulo,
    fontWeight: "bold",
    textAlign: "center",
  },
  descricaoDestaque: {
    color: cores.textoSuave,
    fontSize: fontes.normal,
  },
  secaoTecnologias: {
    marginTop: espacamentos.extraGrande,
  },
  cardTecnologia: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: cores.card,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: bordas.media,
    padding: espacamentos.medio,
    marginBottom: espacamentos.pequeno,
    gap: espacamentos.medio,
  },
  informacoesTecnologia: {
    flex: 1,
    gap: 6,
  },
  nomeTecnologia: {
    color: cores.branco,
    fontSize: fontes.normal,
    fontWeight: "bold",
  },
  descricaoTecnologia: {
    color: cores.textoSecundario,
    fontSize: 14,
    lineHeight: 21,
  },
});