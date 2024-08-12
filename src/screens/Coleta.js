import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {addRating} from '../firebase/surveyService'; // Importe a função de adicionar nota
import {useNavigation} from '@react-navigation/native';
import {getAuth} from 'firebase/auth';
import {useSurvey} from '../Contexts/SurveyContext';

const FeedbackButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Icon name={props.icon} color={props.color} size={50} />
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const Coleta = props => {
  const [feedbackLevel, setFeedbackLevel] = useState(0);
  const navigation = useNavigation();
  const {selectedSurvey} = useSurvey();

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        setUserId(user.uid);
      }
    };

    fetchUser();
  }, []);

  const surveyId = selectedSurvey?.id; // Supondo que selectedSurvey é um objeto que contém um campo 'id'
  console.log('dados pesquisa', selectedSurvey);

  const collectFeedback = async level => {
    if (!userId || !surveyId) {
      console.error('Usuário ou ID da pesquisa não definidos');
      return;
    }

    setFeedbackLevel(level);

    // Mapeia o nível de feedback para o tipo de nota
    const ratingTypes = ['terrible', 'bad', 'neutral', 'good', 'excellent'];
    const ratingType = ratingTypes[level];

    try {
      // Chame a função para adicionar a nota ao banco de dados
      await addRating(userId, surveyId, ratingType);
      navigation.navigate('AgradecimentoParticipacao');
    } catch (error) {
      console.error('Erro ao adicionar nota:', error);
    }
  };

  const gotoBackstage = () => {
    // Navega para a tela de configuração da pesquisa
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.invisibleButton}
        onPress={gotoBackstage}></TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {`O que você achou do ${selectedSurvey.name}`}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <FeedbackButton
          text="Péssimo"
          icon="face-frown"
          color="#d71616"
          onPress={() => collectFeedback(0)}
        />
        <FeedbackButton
          text="Ruim"
          icon="face-frown-open"
          color="#ff360a"
          onPress={() => collectFeedback(1)}
        />
        <FeedbackButton
          text="Neutro"
          icon="face-meh"
          color="#ffc631"
          onPress={() => collectFeedback(2)}
        />
        <FeedbackButton
          text="Bom"
          icon="face-grin-wide"
          color="#37bd6d"
          onPress={() => collectFeedback(3)}
        />
        <FeedbackButton
          text="Excelente"
          icon="face-grin-stars"
          color="#25bc22"
          onPress={() => collectFeedback(4)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#372775',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 8,
  },
  textContainer: {
    flex: 2,
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'AveriaLibre-Regular',
  },
  invisibleButton: {
    padding: 20,
    alignSelf: 'flex-end',
    backgroundColor: 'red',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default Coleta;
