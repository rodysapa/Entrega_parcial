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
import LabeledTextInput_Icon from '../components/LabeledTextInput_Icon.js';
import Button_Green from '../components/Button_Green.js';
import PopUp from '../components/PopUp.js';
import {useSurvey} from '../Contexts/SurveyContext.js';
import {useAuth} from '../Contexts/AuthContext.js';

import {deleteSurvey, updateSurvey} from '../firebase/surveyService.js';

import {useRoute, useNavigation} from '@react-navigation/native';

const ModificarPesquisa = props => {
  const [name, setName] = useState('');
  const [data, setData] = useState('');
  const [image, setImagem] = useState();

  const [modalVisible, setModalVisible] = useState(false);

  const {selectedSurvey} = useSurvey();

  const route = useRoute();
  const navigation = useNavigation();
  const {title} = route.params || {}; // Acessar o parâmetro passado

  const user = useAuth().user;
  useEffect(() => {
    //Carrega dados iniciais
    setName(selectedSurvey?.name);
    setData(selectedSurvey?.date);
    setImagem(selectedSurvey?.imageUrl);
  }, []);

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

  const SalvarModificacao = () => {
    updateSurvey(user.uid, selectedSurvey.id, name, data, image);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title || 'Modificar Pesquisa', // Define um título padrão caso o parâmetro não seja fornecido
    });
  }, [navigation, title]);
  console.log(title);
  return (
    <View style={styles.container}>
      <View style={styles.cInput}>
        <LabeledTextInput
          style={styles.label}
          label={name}
          placeHolder={name}
          setLabel={setName}
        />
        <LabeledTextInput_Icon
          style={styles.label}
          label={'Data'}
          placeHolder={data}
          setLabel={setData}
          inputType="DATA"
        />

        <Text style={styles.label}>Imagem</Text>
        <Image
          style={{width: 250, height: 75, marginBottom: 30}}
          label="Imagem"
          source={{uri: image}}
        />

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
