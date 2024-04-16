import {View} from 'react-native';
import {LabeledTextInput} from '../components/LabeledTextInput';
import {useState} from 'react';
import Button_Green from '../components/Button_Green';

const NovaPesquisa = () => {
  const [nome, setNome] = useState();
  const [date, setDate] = useState();
  return (
    <View>
      <LabeledTextInput label="Nome" value={nome} onChangeText={setNome()} />
      <LabeledTextInput label="Data" value={date} onChangeText={setDate()} />

      <Button_Green txtEntrar="Cadastrar" />
    </View>
  );
};

export default NovaPesquisa;
