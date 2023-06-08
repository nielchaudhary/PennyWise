import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstPage from './firstpage';
import SecondPage from './secondpage';
import ThirdPage from './thirdpage';
import ExpenseDetailsScreen from './ExpenseDetailsScreen';
import TotalExpenditure from './TotalExpenditure';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000000',
            borderBottomWidth: 0,
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="ThirdPage" component={ThirdPage} />
        <Stack.Screen name="ExpenseDetailsScreen" component={ExpenseDetailsScreen} />
        <Stack.Screen name="TotalExpenditure" component={TotalExpenditure} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
