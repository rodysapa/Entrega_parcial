import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import CreateAcount from './src/screens/CreateAcount';
import RecorverPassword from './src/screens/RecorverPassword';
import NovaPesquisa from './src/screens/NovaPesquisa';
import ModificarPesquisa from './src/screens/ModificarPesquisa';
import Drawer from './src/screens/Drawer';
import AcoesPesquisa from './src/screens/AcoesPesquisa';
import Coleta from './src/screens/Coleta';
import AgradecimentoParticipacao from './src/screens/AgradecimentoParticipacao';
import Relatorio from './src/screens/Relatorio';
import Login from './src/screens/Login';

const Stack = createStackNavigator();

const Raiz = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {backgroundColor: '#2B1D62', height: 56},
          headerTintColor: '#573fba',
          headerTitleStyle: {
            fontFamily: 'AveriaLibre-Regular',
            color: '#FFFFFF',
            fontSize: 30,
          },
        }}
        sreenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Nova Conta"
          component={CreateAcount}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Recuperar Senha"
          component={RecorverPassword}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Nova Pesquisa"
          component={NovaPesquisa}
          options={{headerShown: true}}
        />

        <Stack.Screen
          name="Modificar Pesquisa"
          component={ModificarPesquisa}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Drawer"
          component={Drawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Carnaval"
          component={AcoesPesquisa}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="AcoesPesquisa"
          component={AcoesPesquisa}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Coleta"
          component={Coleta}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Relatorio"
          component={Relatorio}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="AgradecimentoParticipacao"
          component={AgradecimentoParticipacao}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Raiz;
