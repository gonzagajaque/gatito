import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Services from './screens/Services';
import Carrinho from './screens/Carrinho';

import { colors } from './styles';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.roxo,
                tabBarInactiveTintColor: colors.claro,
                tabBarActiveBackgroundColor: colors.roxo,
                tabBarInactiveBackgroundColor: colors.laranja,
                tabBarStyle: {
                    height: 70,
                },

                tabBarLabelStyle: {
                    width: '100%',
                    flex: 1,
                    fontWeight: 'bold',
                    fontSize: 16,
                    lineHeight: 14,
                    marginTop: -30,
                    paddingTop: 26,
                    backgroundColor: colors.laranja
                },
                tabBarHideOnKeyboard: true,
                headerShown: false,
            }}>
            <Tab.Screen name="Serviços" component={Services} />
            <Tab.Screen name="Carrinho" component={Carrinho} />
        </Tab.Navigator>
    </NavigationContainer>
}