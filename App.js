import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Switch,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

export default function App() {
  let [nome, setNome] = useState("");
  let [idade, setIdade] = useState("");
  let [status, setStatus] = useState(false);
  let [alert, setAlert] = useState("");

  function getAge(age) {
    setIdade(age);
  }
  const [selectSexo, setSelectSexo] = useState(0);
  const [sexo, setSexo] = useState([
    { key: 1, sexo: "Masculino" },
    { key: 2, sexo: "Feminino" },
    { key: 3, sexo: "Outro" },
  ]);
  let selectedSex = sexo.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.sexo} />;
  });
  function sexValue(valor) {
    setSexo(valor);
  }
  function takeName(texto) {
    setNome(texto);
  }
  function onPress() {
    Alert.alert(nome, idade,);
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./src/Funcionario/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.titulo}>Bem vindo ao banco mundi</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="qual seu nome?"
          placeholderTextColor={"rgba(255,255,255,0.5)"}
          onChangeText={(valor) => takeName(valor)}
        >
          {nome}
        </TextInput>

        <TextInput
          style={styles.TextInput}
          onChangeText={(valor) => getAge(valor)}
        >
          {idade}
        </TextInput>

        <View style={styles.row}>
          <Text style={styles.sexo}>Seu sexo</Text>
          <Picker
            selectedValue={selectSexo}
            onChangeText={(itemValue, itemIndex) => sexValue(itemValue)}
            style={styles.Picker}
          >
            {selectedSex}
          </Picker>
        </View>
        <View style={styles.row}>
          <Text style={styles.limite}>Seu limite</Text>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          ></Slider>
        </View>
        <View style={[styles.row]}>
          <Switch
            value={status}
            onValueChange={(valorSelecionado) => setStatus(valorSelecionado)}
          ></Switch>
          <Text style={styles.limite}>
            {status ? "Credicard ativo?" : "Credicard desativo"}
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={{ fontSize: 20, color: "#fff" }}> Enviar </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
//vamos ver agora a funcionalidade swicher
//agora eu vou querer passar os valores dos itens selecionados para essa lista chamo issode piccke
//picker é um formulario itens que você pode selecionar
//o flat list faz um loop dentro de uma lista e voce precisa criar um modo de renderizar isso na tela do celular dentro da propiedade data voce deve colocar o a lista que vai ser lida e no render tem a logica de exibição
//USO O SCROOL VIEW PARA MOVIMENTAR AQUELE ELEMENTOS QUE EU QUERO QUE SEJA SCROLLAVEL

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ImageBackground: "./src/Funcionario/background.png",
    backgroundColor: "rgba( 0, 0, 0, 0 )",
  },

  image: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  titulo: {
    fontSize: 40,
    fontWeight: "500",
    fontFamily: "Roboto",
    marginTop: 30,
    alignItems: "center",
    color: "#fff",
  },
  TextInput: {
    marginTop: 20,
    width: 250,
    height: 50,
    color: "rgba(255,255,255,0.5)",
    fontSize: 20,
    fontWeight: "300",
    fontFamily: "Roboto",
    backgroundColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 7,
  },
  Picker: {
    color: "#000",
    padding: 20,
    fontSize: 15,
    height: 100,
    themeVariant: "black",
  },
  sexo: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 20,
    fontWeight: "300",
    fontFamily: "Roboto",
    padding: 20,
    marginTop: 13,
  },
  row: {
    flexDirection: "row",
  },
  limite: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 20,
    fontWeight: "300",
    fontFamily: "Roboto",
    padding: 4,
    marginTop: 0,
  },
  button: {
    color: "#FFF",
    alignItems: "center",
    backgroundColor: "rgba(rgba(42, 228, 165, 0.8))",
    padding: 10,
    width: 200,
    marginTop: 30,
    borderRadius: 7,
  },
});
