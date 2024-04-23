import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from "./App";
import CreateAcount from './src/screens/CreateAcount';
import RecorverPassword from './src/screens/RecorverPassword';

const Stack = createStackNavigator();

const Raiz = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen name="App" component={App}/>
        <Stack.Screen name= "CreateAcount" component={CreateAcount}/>
        <Stack.Screen name= "RecorverPassword" component={RecorverPassword}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Raiz