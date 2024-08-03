import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Button_Blue from '../components/Button_Blue';
import Button_Gray from '../components/Button_Gray';
import Button_Green from '../components/Button_Green';
import {signInUser} from '../firebase/auth';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState('');
  const [passwordValid, setPasswordValid] = useState('');

  const [loginErrorMessage, setLoginErrorMessage]= useState('')

  useEffect(() => {
    let regex =
      /^[a-zA-Z0-9.!#$%&'+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/;
    regex.test(email) && email.trim()
      ? setEmailValid(false)
      : setEmailValid(true);
    password.trim() && password
      ? setPasswordValid(false)
      : setPasswordValid(true);
  });

  const handleNavigate = page => {
    switch (page) {
      case 'Home':
        props.navigation.navigate('Drawer');
        break;
      case 'Nova Conta':
        props.navigation.navigate('Nova Conta');

        break;
      case 'Recuperar Senha':
        props.navigation.navigate('Recuperar Senha');

        break;
    }
  };

  const handleLogin = async () => {
    const user = await signInUser(email, password)
    if (!user) {
      setLoginErrorMessage('Email ou senha incorretos')
      return
    } 
    setLoginErrorMessage('')
    handleNavigate('Home');
  };

  return (
    <SafeAreaView style={estilos.container}>
      <ScrollView>
        <View style={estilos.main_view}>
          <View style={estilos.view_title}>
            <Text style={estilos.txtTitle}>Satisfying.you</Text>
            <Icon name="face-smile" size={50} color={'#FFFFFF'} />
          </View>
          <View style={estilos.viewInput}>
            <Text style={estilos.txtInput}>E-mail</Text>
            <TextInput
              placeholder="XXXXXX@XXXX.com"
              placeholderTextColor={'rgba(63, 146, 197, 1)'}
              id="txtEmail"
              style={estilos.txtEmail}
              value={email}
              onChangeText={setEmail}
            />
            {emailValid && (
              <Text style={estilos.txtErro}>
                Email inválido ou não preenchido
              </Text>
            )}
            <Text style={estilos.txtInput}>Senha</Text>
            <TextInput
              placeholder="******"
              placeholderTextColor={'rgba(63, 146, 197, 1)'}
              secureTextEntry={true}
              id="txtSenha"
              style={estilos.txtSenha}
              value={password}
              onChangeText={setPassword}
            />
            {passwordValid && (
              <Text style={estilos.txtErro}>Senha inválida</Text>
            )}
          </View>

          { loginErrorMessage && (
            <Text style={estilos.txtErro}>{loginErrorMessage}</Text>
          )}

          <View style={estilos.viewButton}>
            <Button_Green txtEntrar="Entrar" onPress={() => handleLogin()} />
          </View>

          <View style={estilos.viewBottom}>
            <Button_Blue
              txtConta="Criar minha conta"
              onPress={() => handleNavigate('Nova Conta')}
            />
            <Button_Gray
              txtEsqueciSenha="Esqueci minha senha"
              onPress={() => handleNavigate('Recuperar Senha')}
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
    backgroundColor: 'rgba(55, 39, 117, 1)',
  },
  main_view: {
    paddingHorizontal: '20%',
    marginVertical: 5,
    // paddingVertical: '2.5%',
    flex: 1,
  },
  view_title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 20,
    // paddingBottom: '3.5%',
  },
  viewInput: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 35,
    paddingVertical: 5,
  },
  viewButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flex: 15,
    paddingBottom: '10%',
  },
  txtTitle: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 25,
  },
  txtEmail: {
    backgroundColor: 'white',
    height: 35,
    color: 'rgba(63, 146, 197, 1)',
    fontFamily: 'AveriaLibre-Regular',
  },
  txtSenha: {
    backgroundColor: 'white',
    height: 35,
    fontFamily: 'AveriaLibre-Regular',
    color: 'rgba(63, 146, 197, 1)',
  },
  viewBottom: {
    gap: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flex: 25,
  },
  txtInput: {
    fontFamily: 'AveriaLibre-Regular',
    color: 'white',
    fontSize: 25,
  },
  txtErro: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 15,
    color: 'rgba(253, 121, 121, 1)',
  },
});

export default Login;
