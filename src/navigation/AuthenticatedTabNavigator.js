// src/navigation/AuthenticatedTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TableScreen from '../components/TableScreen';
import RulesScreen from '../components/RulesScreen';
import StatisticsScreen from '../components/StatisticsScreen';

const Tab = createBottomTabNavigator();

const AuthenticatedTabNavigator = ({ setIsAuthenticated, userPool }) => (
    <Tab.Navigator>
        <Tab.Screen
            name="Tabelle"
            children={() => <TableScreen setIsAuthenticated={setIsAuthenticated} userPool={userPool} />} // Pass userPool as a prop to TableScreen
            initialParams={{ setIsAuthenticated }} // Pass setIsAuthenticated as a prop
        />
        <Tab.Screen name="Statistiken" component={StatisticsScreen} />
        <Tab.Screen name="Regelbuch" component={RulesScreen} />
    </Tab.Navigator>
);

export default AuthenticatedTabNavigator;

