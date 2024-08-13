import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTemp from './App/HomeTemp';
import SignInScreen from './App/SignInScreen';
import SignUpScreen from './App/SignUpScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false,}} name="SignUp" component={SignUpScreen} />
        <Stack.Screen options={{headerShown: false,}} name="Home" component={HomeTemp} />
        <Stack.Screen options={{headerShown: false,}} name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}
