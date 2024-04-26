import {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
// import {useFonts} from 'expo-font';

import SearchBar from '../components/SearchBar.js';
import CardPesquisa from '../components/CardPesquisa.js';
import Button_Green from '../components/Button_Green.js';

const Home = props => {
  const [txtSearch, setTxtSearch] = useState('');

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

  return (
    <View style={styles.container}>
      <View style={styles.cContent}>
        <SearchBar
          placeholder="Insira o termo de busca..."
          value={txtSearch}
          onChangeText={setTxtSearch}
        />

        <ScrollView horizontal style={styles.cCards}>
          <CardPesquisa
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
          />
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
  cTop: {
    backgroundColor: '#2B1D62',
    width: '100%',
    height: '20%',
    paddingTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  cContent: {
    marginVertical: 15,
    paddingHorizontal: '3%',
  },
  cCards: {
    flexDirection: 'row',
    height: 150,
    marginVertical: 18,
  },
  button: {
    marginVertical: 10,
  },
});

export default Home;
