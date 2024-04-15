import {Pressable, StyleSheet, Text} from 'react-native';

const Button_Blue = props => {
  return (
    <Pressable style={estilos.button} onPress={props.onPress}>
      <Text style={estilos.txt}>{props.txtConta}</Text>
    </Pressable>
  );
};

const estilos = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(65, 158, 215, 1)',
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

export default Button_Blue;