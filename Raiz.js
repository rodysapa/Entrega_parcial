import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import App from './App';
import CreateAcount from './src/screens/CreateAcount';
import RecorverPassword from './src/screens/RecorverPassword';
import Home from './src/screens/Home';
import NovaPesquisa from './src/screens/NovaPesquisa';
import ModificarPesquisa from './src/screens/ModificarPesquisa';
import Drawer from './src/screens/Drawer';
import AcoesPesquisa from './src/screens/AcoesPesquisa';

const Stack = createStackNavigator();

const Raiz = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="App"
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
          name="App"
          component={App}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAcount"
          component={CreateAcount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RecorverPassword"
          component={RecorverPassword}
          options={{headerShown: false}}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Raiz;
