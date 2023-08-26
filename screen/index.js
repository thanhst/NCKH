import { SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login'
import Home from './home'
import Ticket from './ticket'
import Style from '../style/style'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function TabBottom({ route }) {
    const { email } = route.params;
  
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen initialParams={{ email }} name="Home" component={Home} />
        <Tab.Screen name="Ticket" component={Ticket} />
      </Tab.Navigator>
    );
  }
export default function RootComponent() {
    return (
        <SafeAreaView style={Style.maxScreen}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Tabs"  component={TabBottom} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}


