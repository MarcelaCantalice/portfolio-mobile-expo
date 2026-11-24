import { Ionicons } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { cores, espacamentos, fontes } from "../constants/tema";

type MenuProps = {
  visivel: boolean;
  fecharMenu: () => void;
};

const opcoes = [
  { titulo: "Home", rota: "/", icone: "home-outline" },
  { titulo: "Sobre", rota: "/sobre", icone: "person-outline" },
  { titulo: "Experiência Acadêmica", rota: "/academica", icone: "school-outline" },
  { titulo: "Experiência Profissional", rota: "/profissional", icone: "briefcase-outline" },
  { titulo: "Habilidades", rota: "/habilidades", icone: "code-slash-outline" },
  { titulo: "Extracurriculares", rota: "/extracurriculares", icone: "people-outline" },
  { titulo: "Formação Complementar", rota: "/formacao", icone: "ribbon-outline" },
  { titulo: "Projetos", rota: "/projetos", icone: "folder-open-outline" },
  { titulo: "Jogo da Forca", rota: "/jogo", icone: "game-controller-outline" },
  { titulo: "Contato", rota: "/contato", icone: "mail-outline" },
] as const;

export default function Menu({ visivel, fecharMenu }: MenuProps) {
  const router = useRouter();

  function navegar(rota: Href) {
    fecharMenu();
    router.navigate(rota);
  }

  return (
    <Modal
      visible={visivel}
      transparent
      animationType="fade"
      onRequestClose={fecharMenu}
    >
      <View style={estilos.fundo}>
        <Pressable
          style={estilos.areaExterna}
          onPress={fecharMenu}
          accessibilityLabel="Fechar menu"
          accessibilityRole="button"
        />

        <View style={estilos.menu}>
          <View style={estilos.cabecalho}>
            <Text style={estilos.titulo}>Menu</Text>

            <Pressable
              onPress={fecharMenu}
              accessibilityRole="button"
              accessibilityLabel="Fechar menu"
              hitSlop={10}
            >
              <Ionicons
                name="close-outline"
                size={30}
                color={cores.branco}
              />
            </Pressable>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {opcoes.map((opcao) => (
              <Pressable
                key={opcao.rota}
                style={estilos.opcao}
                onPress={() => navegar(opcao.rota as Href)}
                accessibilityRole="button"
                accessibilityLabel={opcao.titulo}
              >
                <Ionicons
                  name={opcao.icone}
                  size={22}
                  color={cores.roxo}
                />

                <Text style={estilos.texto}>
                  {opcao.titulo}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.65)",
  },
  areaExterna: {
    flex: 1,
  },
  menu: {
    width: "80%",
    maxWidth: 340,
    backgroundColor: cores.card,
    padding: espacamentos.medio,
    paddingTop: 60,
  },
  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: espacamentos.grande,
  },
  titulo: {
    color: cores.roxo,
    fontSize: fontes.titulo,
    fontWeight: "bold",
  },
  opcao: {
    flexDirection: "row",
    alignItems: "center",
    gap: espacamentos.medio,
    paddingVertical: espacamentos.medio,
    borderBottomWidth: 1,
    borderBottomColor: cores.borda,
  },
  texto: {
    flex: 1,
    color: cores.texto,
    fontSize: fontes.normal,
  },
});