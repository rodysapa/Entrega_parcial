import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Header = props => {
  return (
    <View style={estilos.header}>
      <TouchableOpacity onPress={props.onPress}>
      <Icon name='arrow-left' size={25} color={'#573FBA'}/>
      </TouchableOpacity>
      <Text style={estilos.txt}>{props.txtHeader}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(43, 29, 98, 1)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '2%',
    gap: 25,
  },
  txt: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 30,
   
  },
});

export default Header;