import {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import SearchBar from '../components/SearchBar.js';
import CardPesquisa from '../components/CardPesquisa.js';
import Button_Green from '../components/Button_Green.js';

import {getSurveys} from '../firebase/surveyService.js';
import {resetPassword} from '../firebase/auth.js';

import {useAuth} from '../Contexts/AuthContext.js';
import {useSurvey} from '../Contexts/SurveyContext.js';

const Home = props => {
  const [txtSearch, setTxtSearch] = useState('');
  const [userServeys, setUserServeys] = useState();
  const user = useAuth().user;
  const {setSelectedSurvey} = useSurvey();
  const handleNavigate = page => {
    switch (page) {
      case 'Carnaval':
        props.navigation.navigate('Carnaval');
        break;
      case 'NovaPesquisa':
        props.navigation.navigate('Nova Pesquisa');

        break;
    }
  };

  const handleCardPress = surveyObj => {
    setSelectedSurvey(surveyObj);
    props.navigation.navigate('Carnaval', {name: 'batata'});
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        surveys = await getSurveys(user.uid);
        setUserServeys(surveys);
        console.log('a ', surveys);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  // console.log(user);
  return (
    <View style={styles.container}>
      <View style={styles.Content}>
        <SearchBar
          placeholder="Insira o termo de busca..."
          value={txtSearch}
          onChangeText={setTxtSearch}
        />

        <ScrollView horizontal style={styles.Cards}>
          {userServeys?.map(
            survey => (
              <CardPesquisa
                title={survey.name}
                img={survey.imageUrl}
                date={survey.date}
                onPress={() => handleCardPress(survey)}
              />
            ),
            // console.log(survey),
          )}
          {
            // getSurveys().then(response => {
            //   console.log(response)
            // })
            /* <CardPesquisa
            img={require('../../assets/images/compCell.png')}
            title="SECOMP 2023"
            date="10/10/2023"
            onPress={() => handleNavigate('Carnaval')}
          />
          <CardPesquisa
            img={require('../../assets/images/people.png')}
            title="UBUNTU 2022"
            date="05/06/2022"
            onPress={() => handleNavigate('Carnaval')}
          />
          <CardPesquisa
            img={require('../../assets/images/girl.png')}
            title="MENINAS CPU"
            date="01/04/2022"
            onPress={() => handleNavigate('Carnaval')}
          />
          <CardPesquisa
            img={require('../../assets/images/dontKnow.png')}
            title="PESQUISA"
            date="32/13/2024"
            onPress={() => handleNavigate('Carnaval')}
          /> */
          }
        </ScrollView>

        <View style={styles.button}>
          <Button_Green
            txtEntrar="NOVA PESQUISA"
            onPress={() => handleNavigate('NovaPesquisa')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#372775',
  },
  Content: {
    marginVertical: 15,
    paddingHorizontal: '3%',
  },
  Cards: {
    flexDirection: 'row',
    height: 150,
    marginVertical: 18,
  },
  button: {
    marginVertical: 10,
  },
});

export default Home;
