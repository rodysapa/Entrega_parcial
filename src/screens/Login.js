import Icon from 'react-native-vector-icons/FontAwesome6';
import Button_Green from '../components/Button_Green';
import Button_Blue from '../components/Button_Blue';
import Button_Gray from '../components/Button_Gray';

import {StyleSheet, View, Text, TextInput} from 'react-native';
import {useState} from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
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
            onChangeText={setEmail}
            inputMode="email"
        />
        <Text style={estilos.txtInput}>Senha</Text>
        <TextInput
            secureTextEntry={true}
            id="txtSenha"
            style={estilos.txtSenha}
            value={senha}
            onChangeText={setSenha}
        />
        <Button_Green txtEntrar="Entrar" onPress={() => console.log('alo')} />
    </View>

    <View style={estilos.viewBottom}>
        <Button_Blue
            txtConta="Criar minha conta"
            onPress={() => console.log('alo2')}
        />
        <Button_Gray
            txtEsqueciSenha="Esqueci minha senha"
            onPress={() => console.log('alo3')}
        />
    </View>
    </View>
    );
};

const estilos = StyleSheet.create({
    main_view: {
      backgroundColor: 'rgba(55, 39, 117, 1)',
      paddingHorizontal: 250,
      paddingVertical: 15,
      flex: 1,
    },
    view_title: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    viewInput: {
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: 40,
      paddingTop: 20,
    },
    txtTitle: {
      color: 'white',
      fontFamily: 'AveriaLibre-Regular',
      fontSize: 55,
    },
    txtEmail: {
      backgroundColor: 'white',
      marginBottom: 20,
      height: 35,
    },
    txtSenha: {
      backgroundColor: 'white',
      marginBottom: 40,
      height: 35,
    },
    viewBottom: {
      gap: 7.5,
    },
    txtInput: {
      fontFamily: 'AveriaLibre-Regular',
      color: 'white',
      fontSize: 25,
    },
  });
  
export default Login;