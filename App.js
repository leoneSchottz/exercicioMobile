
import { useState } from 'react';
import { Button, SafeAreaView,TouchableWithoutFeedback, ScrollView, StyleSheet,Text, TextInput, View } from 'react-native';

const ApareceJson = () => {

  const jsondata = {
    "ok": true,
    "result": {
        "code": "zAeiJY",
        "short_link": "shrtco.de\/zAeiJY",
        "full_short_link": "https:\/\/shrtco.de\/zAeiJY",
        "short_link2": "9qr.de\/zAeiJY",
        "full_short_link2": "https:\/\/9qr.de\/zAeiJY",
        "short_link3": "shiny.link\/zAeiJY",
        "full_short_link3": "https:\/\/shiny.link\/zAeiJY",
        "share_link": "shrtco.de\/share\/zAeiJY",
        "full_share_link": "https:\/\/shrtco.de\/share\/zAeiJY",
        "original_link": "http:\/\/www.rj.senac.br"
    }
}

  const [valormostrado, setValorMostrado] = useState('');

  const [short_link, setShortLink] = useState('');

  const mostrarValor = () => {
    try {
      const jsonData = JSON.parse(valormostrado);
      if (jsonData.result.short_link) setShortLink(jsonData.result.short_link);
    } catch (error) {
      alert('ALERTA');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.container}>
      <TextInput multiline style={styles.inputTypeDesign} onChangeText={setValorMostrado} value={valormostrado}></TextInput>
      
      <Button title='Valor Mostrado' onPress={mostrarValor} styles={styles.button} />
      <Text style={styles.resultado} >{short_link}</Text>
    </ScrollView>
    </SafeAreaView>
  )

}
const App = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      <ApareceJson />
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },
  inputTypeDesign: {
    fontSize: 24,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#eaeaea",
    marginBottom: 10,
  },
  button: {
    height: 20,
  },
  resultado: {
    marginTop: 12,
    fontSize: 24,
    textAlign: "center",
  },
  jsonData: {
    marginTop: 20,
    fontSize: 16,
    fontFamily: "monospace",
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
});

export default App;
