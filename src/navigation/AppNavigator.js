// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import LoginScreen from '../components/LoginScreen';
import RegisterScreen from '../components/RegisterScreen';
import TableScreen from '../components/TableScreen';
import RulesScreen from '../components/RulesScreen';
import StatisticsScreen from '../components/StatisticsScreen';


import AuthenticatedTabNavigator from './AuthenticatedTabNavigator';

const Stack = createStackNavigator();

const AppNavigator = ({ isAuthenticated, onSignIn, setIsAuthenticated }) => (
    <Stack.Navigator>
        {isAuthenticated ? (
            // If authenticated, show AuthenticatedTabNavigator
            <Stack.Screen
                name="AuthenticatedTabs"
                children={() => (
                    <AuthenticatedTabNavigator
                        setIsAuthenticated={setIsAuthenticated}
                    />
                )}
                options={{ headerShown: false }}
            />
        ) : (
            // If not authenticated, show non-authenticated screens
            <>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen
                    name="Login"
                    children={() => <LoginScreen onSignIn={onSignIn} />}
                />
                <Stack.Screen
                    name="Registrieren"
                    children={() => <RegisterScreen onSignIn={onSignIn} />}
                />
            </>
        )}
    </Stack.Navigator>
);

export default AppNavigator;