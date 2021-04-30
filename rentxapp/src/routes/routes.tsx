import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Onboarding from '../components/Onboarding';
import Success from '../components/SuccessModal/Success';
import Main from '../screens/Main/Main';
import Login from '../screens/Login/Login';
import SignUp from '../screens/SignUp/SignUp';
import Home from '../screens/Home/Home';
import Icon from "react-native-vector-icons/Feather";
import { useSelector } from "react-redux";
import { ApplicationState } from "../store/rootReducer";

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const routes: React.FC = () => {
  const { auth } = useSelector((state: ApplicationState) => state);
  const { isAuthenticated } = auth;

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AppStack.Navigator
          headerMode="none"
          screenOptions={{
            cardStyle: {
              backgroundColor: "#f0f0f5",
            },
          }}
        >
          <AppStack.Screen name="Onboarding" component={Onboarding} />
          <AppStack.Screen name="Main" component={Main} />
          <AppStack.Screen name="Login" component={Login} />
          <AppStack.Screen name="SignUp" component={SignUp} />
          <AppStack.Screen name="Success" component={Success} />
        </AppStack.Navigator>
      ) : (
        <Tab.Navigator 
          tabBarOptions={{
            keyboardHidesTabBar: true,
            activeTintColor: '#DC1637',
            inactiveTintColor: '#AEAEB3',
            style: {
              backgroundColor: '#FFFF',
            }
          }}
        >
          <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <Icon name="home" size={20} color={color} />
              ),
            }} 
          />
        </Tab.Navigator>
      )}
      
      
    </NavigationContainer>
  );
};

export default routes;