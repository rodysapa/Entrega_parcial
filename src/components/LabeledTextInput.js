import {useState} from 'react';
import {TextInput, Text, View} from 'react-native';

const LabeledTextInput = props => {
  const [label, setLabel] = useState();

  return (
    <View>
      <Text>{props.label}</Text>
      <TextInput value={props.text} onChangeText={props.setInputText} />
    </View>
  );
};
