import {View, StyleSheet, SafeAreaView, ScrollView, Text} from 'react-native';
import Header from '../components/Header';
import LabeledTextInput from '../components/LabeledTextInput';
import Button_Green from '../components/Button_Green';
import {useEffect, useState} from 'react';
import {createUser} from '../firebase/auth';

const CreateAcount = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [emailValid, setEmailValid] = useState();
  const [passwordvalid, setPasswordValid] = useState();
  const [confirmPasswordvalid, setConfirmPasswordValid] = useState();

  useEffect(() => {
    email && email.trim() ? setEmailValid(false) : setEmailValid(true);
    password && password.trim()
      ? setPasswordValid(false)
      : setPasswordValid(true);
  }, [email, password]);

  useEffect(() => {
    password == confirmPassword
      ? setConfirmPasswordValid(false)
      : setConfirmPasswordValid(true);
  }, [password, confirmPassword]);

  const handleCadastrar = () => {
    createUser(email, password);
    props.navigation.pop();
  };

  return (
    <SafeAreaView style={estilos.container}>
      <ScrollView>
        <View style={estilos.viewMother}>
          <View style={estilos.viewInput}>
            <LabeledTextInput
              txtlabel="E-mail"
              label={email}
              setLabel={setEmail}
            />
            {emailValid && (
              <Text style={estilos.txtWarning}>Email Inválido</Text>
            )}
            <LabeledTextInput
              txtlabel="Senha"
              label={password}
              setLabel={setPassword}
            />
            {passwordvalid && (
              <Text style={estilos.txtWarning}>Senha Inválida</Text>
            )}
            <LabeledTextInput
              txtlabel="Repetir senha"
              label={confirmPassword}
              setLabel={setConfirmPassword}
            />
            {confirmPasswordvalid && (
              <Text style={estilos.txtWarning}>Senha Inválida</Text>
            )}
          </View>
          <View style={estilos.button}>
            <Button_Green
              txtEntrar="CADASTRAR"
              onPress={() => handleCadastrar()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
    paddingTop: '10%',
  },
  txtWarning: {
    color: 'red',
  },
});

export default CreateAcount;
