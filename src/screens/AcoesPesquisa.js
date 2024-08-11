import {
  StyleSheet,
  View,
  Text,
  Touchable,
  TouchableOpacity,
} from 'react-native';

import HeaderNavigation from '../components/HeaderNavigation';
import Icon from 'react-native-vector-icons/FontAwesome6';
import ActionButton from '../components/ActionButton';
import {useSurvey} from '../Contexts/SurveyContext';
import {useRoute, useNavigation} from '@react-navigation/native';
import {useLayoutEffect} from 'react';

const AcoesPesquisa = props => {
  const {selectedSurvey} = useSurvey();

  const route = useRoute();
  const navigation = useNavigation();
  const {title} = route.params || {}; // Acessar o parâmetro passado

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title || 'Modificar Pesquisa', // Define um título padrão caso o parâmetro não seja fornecido
    });
  }, [navigation, title]);

  return (
    <>
      <View style={styles.container}>
        <ActionButton
          icon="file-pen"
          text="Modificar pesquisa"
          onPress={() => props.navigation.navigate('Modificar Pesquisa')}
        />
        <ActionButton
          icon="chalkboard"
          text="Coletar dados"
          onPress={() => props.navigation.navigate('Coleta')}
        />
        <ActionButton
          icon="table-list"
          text="Relatório"
          onPress={() => props.navigation.navigate('Relatorio')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#372775',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    height: 'auto',
    padding: 10,
  },
});

export default AcoesPesquisa;
