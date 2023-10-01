import StatusBar from '@/components/StatusBar';
import { color } from '@/constants/color';
import Login from '@/modules/login';
import Register from '@/modules/register';
import { RootStackRoute } from '@/types/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
function App(): JSX.Element {
  const Stack = createNativeStackNavigator<RootStackRoute>();

  return (
    <>
      <NavigationContainer>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor={color.primary}
        />
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            name="login"
            options={{ header: () => null }}
            component={Login}
          />
          <Stack.Screen
            name="register"
            options={{ header: () => null }}
            component={Register}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
