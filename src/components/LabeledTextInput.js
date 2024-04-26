import {useState} from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';

const LabeledTextInput = props => {
  const [label, setLabel] = useState('');
  return (
    <View style={estilos.viewInput}>
      <Text style={estilos.txt}>{props.txtlabel}</Text>
      <TextInput
        style={estilos.txtInput}
        value={props.label}
        onChangeText={props.setLabel}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  txt: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
  },
  txtInput: {
    backgroundColor: 'white',
    color: 'black',
    height: 24,
  },
  viewInput: {
    paddingTop: '2%',
  },
});

export default LabeledTextInput;
