import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './app/views/view.menu';
import { View, Text } from 'react-native';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;