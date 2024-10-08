import {useEffect, useLayoutEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome6';

import LabeledTextInput from '../components/LabeledTextInput.js';
import LabelTextInput_Icon from '../components/LabeledTextInput_Icon.js';
import Button_Green from '../components/Button_Green.js';
import PopUp from '../components/PopUp.js';
import {useSurvey} from '../Contexts/SurveyContext.js';
import {useAuth} from '../Contexts/AuthContext.js';

import {deleteSurvey, updateSurvey} from '../firebase/surveyService.js';

import {useRoute, useNavigation} from '@react-navigation/native';
import ImageInput from '../components/ImageInput.js';

const ModificarPesquisa = props => {
  const [name, setName] = useState('');
  const [data, setData] = useState('');

  const [image, setImagem] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);

  const {selectedSurvey} = useSurvey();

  const route = useRoute();
  const navigation = useNavigation();
  const {title} = route.params || {}; // Acessar o parâmetro passado

  const user = useAuth().user;

  useEffect(() => {
    // Carrega dados iniciais
    if (selectedSurvey) {
      setName(selectedSurvey.name || '');
      setData(selectedSurvey.date || '');
      setImagem(selectedSurvey.imageUrl || null);
    }
  }, [selectedSurvey]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const deletarPesquisa = () => {
    deleteSurvey(user.uid, selectedSurvey.id);
    props.navigation.pop(2);
  };

  //=============================================

  const SalvarModificacao = async () => {
    try {
      // Se uma nova imagem foi selecionada
      if (image instanceof Object) {
        await updateSurvey(user.uid, selectedSurvey.id, name, data, image);
      } else {
        // Se nenhuma nova imagem foi selecionada, apenas atualize os dados
        await updateSurvey(user.uid, selectedSurvey.id, name, data, null);
      }
      // Navegar de volta após a atualização
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao salvar modificações:', error);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title || 'Modificar Pesquisa', // Define um título padrão caso o parâmetro não seja fornecido
    });
  }, [navigation, title]);

  return (
    <View style={styles.container}>
      <View style={styles.cInput}>
        <LabeledTextInput
          style={styles.label}
          txtlabel={'Nome'}
          label={name}
          placeHolder={name}
          setLabel={setName}
        />

        <LabelTextInput_Icon
          label="Data"
          inputValue={data}
          onChangeText={setData}
        />

        {image ? (
          <ImageInput setImageCallback={setImagem} initialValue={image} />
        ) : (
          <Text style={styles.label}>Nenhuma imagem disponível</Text>
        )}

        <Button_Green txtEntrar="Salvar" onPress={SalvarModificacao} />
      </View>
      <TouchableOpacity
        onPress={openModal}
        style={styles.touchableOpacityStyle}>
        <Icon name="trash" size={35} color="#FFFFFF" />
        <Text style={styles.botao}>Apagar</Text>
      </TouchableOpacity>
      <PopUp
        modalVisible={modalVisible}
        closeModal={closeModal}
        modalAction={deletarPesquisa}
      />
    </View>
  );
};

// Estilo do código
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
