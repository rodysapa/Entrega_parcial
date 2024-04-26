import {View, StyleSheet, SafeAreaView, ScrollView, Text} from "react-native"
import Header from "../components/Header";
import LabeledTextInput from "../components/LabeledTextInput";
import Button_Green from "../components/Button_Green";
import { useState } from "react";

const CreateAcount = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('')
  const [message, setMessage] = useState('');
  const regexEmail = /^[A-Za-z0-9.+_-]+@[A-Za-z0-9.-]+\.[a-z]{2,}$/

  const validation = ({email, password, repeatPassword}) => {
    console.log(`Email: ${email}, Password: ${password}, Repeat Password: ${repeatPassword}`); // Add this line
    if (!regexEmail.test(email)) {
      console.log('Invalid email'); // Add this line
      setMessage('E-mail inválido');
    } else if (password === '') {
      console.log('Invalid password'); // Add this line
      setMessage('Senha é inválida ou não foi preenchida');
    } else if (repeatPassword === '') {
      console.log('Invalid repeat password'); // Add this line
      setMessage('Confirmação de senha é inválida ou não foi preenchida');
    } else if (password !== repeatPassword) {
      console.log('Password and repeat password do not match'); // Add this line
      setMessage('O campo repetir senha difere da senha');
    } else {
      let regEmail = email;
      let regPassword = password;
      let regRepeatPassword = repeatPassword;
      setMessage(' ');
    }
  }
  
  
  return(
    <SafeAreaView style={estilos.container}>
      <ScrollView>
    <Header txtHeader="Nova Conta" onPress={() => props.navigation.pop()}/>
    <View style={estilos.viewMother}>
    <View style={estilos.viewInput}>
      <LabeledTextInput style={estilos.txtEmail}txtlabel='E-mail' value={email} onChangeText={setEmail}/>
      <LabeledTextInput txtlabel='Senha' value={password} onChangeText={setPassword}/>
      <LabeledTextInput txtlabel='Repetir senha' value={repeatPassword} onChangeText={setRepeatPassword}/>
      <Text style={estilos.txtErro}>{message}</Text>
      </View>
      
      <View style={estilos.button}>
        <Button_Green  txtEntrar="RECUPERAR" onPress={() => validation(email, password, repeatPassword)}/>
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
  txtEmail: {
    backgroundColor: 'white',
    height: 35,
    marginBottom: 15,
    color: 'rgba(63, 146, 197, 1)',
    fontFamily: 'AveriaLibre-Regular',
  },
  txtErro: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 15,
    color: 'rgba(253, 121, 121, 1)',
  },
});

export default CreateAcount;