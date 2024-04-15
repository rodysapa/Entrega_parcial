import {Pressable, StyleSheet, Text} from 'react-native';

const Button_Gray = props => {
  return (
    <Pressable style={estilos.button} onPress={props.onPress}>
      <Text style={estilos.txt}>{props.txtEsqueciSenha}</Text>
    </Pressable>
  );
};

const estilos = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(176, 204, 222, 1)',
    height: 35,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 22,
   
  },
});

export default Button_Gray;