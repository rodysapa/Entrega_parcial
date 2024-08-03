import {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import LabeledTextInput from '../components/LabeledTextInput.js';
import LabeledTextInput_Icon from '../components/LabeledTextInput_Icon.js';
import Button_Green from '../components/Button_Green.js';
import ImageInput from '../components/ImageInput.js';

import { createSurvey } from '../firebase/surveyService.js'

const NovaPesquisa = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const [displayName, setDisplayName] = useState(false);
  const [displayDate, setDisplayDate] = useState(false);
  
  const [image, setImage] = useState();

  const createSurveyButtonPressed = async () => {
    console.log('Jorge')
    if (!image) {
      console.log('Definiar imagem para criar pesquisa')
      return
    }

    /*
    let imageFile
    try {
      imageFile = await fetch(image.uri)
    } catch (error) {
      console.log("Não foi possível abrir imagem devido a um erro: ", error)
      return
    } */
    createSurvey(name, date, image)
  };

  useEffect(() => {
    if (name.trim()) setDisplayName(false);
    else setDisplayName(true);
    if (date.trim()) setDisplayDate(false);
    else setDisplayDate(true);
  }, [name, date]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.cInput}>
          <LabeledTextInput
            style={styles.label}
            txtlabel="Nome"
            label={name}
            setLabel={setName}
          />
          {displayName && (
            <Text style={styles.warningText}>Preencha o nome da pesquisa</Text>
          )}
          <LabeledTextInput_Icon
            style={styles.label}
            label="Data"
            inputValue={date}
            onChangeText={setDate}
          />
          {displayDate && (
            <Text style={styles.warningText}>Preencha a data</Text>
          )}
          <ImageInput setImageCallback={setImage} />

          <Button_Green txtEntrar="Nova Pesquisa" onPress={createSurveyButtonPressed} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//Estilo do codigo
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#372775',
    padding: 20,
    paddingHorizontal: '20%',
  },
  label: {
    textAlign: 'left',
    fontSize: 20,
    color: '#FFFFFF',
    marginTop: 10,
  },
  cInput: {
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 80,
    bottom: 20,
  },
  botao: {
    fontSize: 13,
    color: '#FFFFFF',
  },
  warningText: {
    color: 'red',
  },
});

export default NovaPesquisa;
