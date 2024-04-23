import {View, StyleSheet, SafeAreaView, ScrollView} from "react-native"
import Header from "../components/Header";
import LabeledTextInput from "../components/LabeledTextInput";
import Button_Green from "../components/Button_Green";


const CreateAcount = (props) => {
  return(
    <SafeAreaView style={estilos.container}>
      <ScrollView>
    <Header txtHeader="Recuperação de senha" onPress={() => console.log('alo1')}/>
    <View style={estilos.viewMother}>
    <View style={estilos.viewMiddle}>
      <LabeledTextInput txtlabel='E-mail' onChangeText={props}/>
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
    paddingVertical: '10%',
    flex: 1,
  },
  viewMiddle: {
    gap: 80,
  },
})

export default CreateAcount;