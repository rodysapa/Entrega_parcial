import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button_Green = props => {
  return (
    <TouchableOpacity style={estilos.button} onPress={props.onPress}>
      <Text style={estilos.txt}>{props.txtEntrar}</Text>
      <Text style={estilos.txt}>{props.txtConta}</Text>
      <Text style={estilos.txt}>{props.txtEsqueciSenha}</Text>
      <Text style={estilos.txt}>{props.txtCadastrar}</Text>
      
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(55, 189, 109, 1)',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 25,
   
  },
});

export default Button_Green;
