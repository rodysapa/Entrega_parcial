import {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity, Modal} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome6';

import LabeledTextInput from '../components/LabeledTextInput.js';
import LabeledTextInput_Icon from '../components/LabeledTextInput_Icon.js';
import Button_Green from '../components/Button_Green.js';
import PopUp from '../components/PopUp.js';

const ModificarPesquisa = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  //=============================================

  const SalvarModificacao = () => {
    console.log('BOTAO SALVAR MODIFICACAO');
  };

  return (
    <View style={styles.container}>
      <View style={styles.cInput}>
        <LabeledTextInput
          style={styles.label}
          label="Nome"
          placeHolder="Carnaval 2024"
        />
        <LabeledTextInput_Icon
          style={styles.label}
          label="Data"
          placeHolder="16/02/2024"
          inputType="DATA"
        />

        <Text style={styles.label}>Imagem</Text>
        <Image
          style={{width: 250, height: 75, marginBottom: 30}}
          label="Imagem"
          source={require('../../assets/images/Imagem_projeto.png')}
        />

        <Button_Green txtEntrar="Salvar" onPress={SalvarModificacao} />
      </View>
      <TouchableOpacity
        onPress={openModal}
        style={styles.touchableOpacityStyle}>
        <Icon name="trash" size={35} color="#FFFFFF" />
        <Text style={styles.botao}>Apagar</Text>
      </TouchableOpacity>
      <PopUp modalVisible={modalVisible} closeModal={closeModal} />
    </View>
  );
};

//Estilo do codigo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
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
});

export default ModificarPesquisa;
