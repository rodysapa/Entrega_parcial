import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Button_Green from './src/components/Button_Green';
import Button_Blue from './src/components/Button_Blue';
import Button_Gray from './src/components/Button_Gray';

const App = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState('');
  const [passwordValid, setPasswordValid] = useState('');

  useEffect(() => {
    let regex =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    regex.test(email) && email.trim()? setEmailValid(false): setEmailValid(true);
    password.trim() && password? setPasswordValid(false): setPasswordValid(true);
  });

  const handleNavigate = page => {
    switch (page) {
      case 'Home':
        props.navigation.navigate('Home');
        break;
      case 'NovaConta':
        props.navigation.navigate('Nova Conta');

        break;
        case 'RecuperarSenha':
        props.navigation.navigate('Recuperar Senha');

        break;
    }

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
              id="txtEmail"
              style={estilos.txtEmail}
              value={email}
              onChangeText={checkEmail => validateEmail(checkEmail)}
            />
            <Text style={estilos.txtInput}>Senha</Text>
            <TextInput
              secureTextEntry={true}
              id="txtSenha"
              style={estilos.txtSenha}
              value={password}
              onChangeText={checkSenha => validateSenha(checkSenha)}
            />
            <Text style={estilos.txtErro}>{message}</Text>
          </View>

          <View style={estilos.viewButton}>
            <Button_Green txtEntrar="Entrar" onPress={handleLogin} />
          </View>

          <View style={estilos.viewBottom}>
            <Button_Blue
              txtConta="Criar minha conta"
              onPress={() => props.navigation.navigate('Nova Conta')}
            />
            <Button_Gray
              txtEsqueciSenha="Esqueci minha senha"
              onPress={() => props.navigation.navigate('Recuperar Senha')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )};
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  main_view: {
    backgroundColor: 'rgba(55, 39, 117, 1)',
    paddingHorizontal: '25%',
    paddingVertical: '2.5%',
    flex: 1,
  },
  view_title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 20,
    paddingBottom: '3.5%',
  },
  viewInput: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 35,
    paddingBottom: '5%',
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
    marginBottom: 15,
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
    gap: 7.5,
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

export default App;
