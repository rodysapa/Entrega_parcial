import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from "./App";
import CreateAcount from './src/screens/CreateAcount';
import RecorverPassword from './src/screens/RecorverPassword';

import Coleta from './src/screens/Coleta';
import AgradecimentoParticipacao from './src/screens/AgradecimentoParticipacao';
import AcoesPesquisa from './src/screens/AcoesPesquisa';
import Relatorio from './src/screens/Relatorio';

const Stack = createNativeStackNavigator();

const Raiz = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App" SreenOptions={{ headerShown: false }}>
        <Stack.Screen name="App" component={App} options={{ headerShown: false }}/>
        <Stack.Screen name= "CreateAcount" component={CreateAcount} options={{ headerShown: false }}/>
        <Stack.Screen name= "RecorverPassword" component={RecorverPassword} options={{ headerShown: false }}/>

        <Stack.Screen name="AcoesPesquisa" component={AcoesPesquisa} options={{headerShown: true}} />
        <Stack.Screen name="Coleta" component={Coleta} options={{ headerShown: false }}/>
        <Stack.Screen name="Relatorio" component={Relatorio} options={{headerShown: true}} />
        <Stack.Screen name="AgradecimentoParticipacao" component={AgradecimentoParticipacao} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Raiz