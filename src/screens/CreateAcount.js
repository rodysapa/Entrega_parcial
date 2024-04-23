import {View, StyleSheet, SafeAreaView, ScrollView} from "react-native"
import Header from "../components/Header";
import LabeledTextInput from "../components/LabeledTextInput";
import Button_Green from "../components/Button_Green";

const CreateAcount = (props) => {
  return(
    <SafeAreaView style={estilos.container}>
      <ScrollView>
    <Header txtHeader="Nova Conta" onPress={() => console.log('alo1')}/>
    <View style={estilos.viewMother}>
    <View style={estilos.viewInput}>
      <LabeledTextInput txtlabel='E-mail' onChangeText={props}/>
      <LabeledTextInput txtlabel='Senha' value={props} onChangeText={props}/>
      <LabeledTextInput txtlabel='Repetir senha' value={props} onChangeText={props}/>
      </View>
      <View style={estilos.button}>
        <Button_Green  txtEntrar="RECUPERAR" onPress={() => console.log('alo2')}/>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
    
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewMother: {
    paddingHorizontal: '16%',
    backgroundColor: 'rgba(55, 39, 117, 1)',
    paddingVertical: '4%',
    flex: 1,
  },
  viewInput: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flex: 0.75,
  },
  button: {
    flex: 0.25,
    paddingTop: '10%'
  },
})

export default CreateAcount;