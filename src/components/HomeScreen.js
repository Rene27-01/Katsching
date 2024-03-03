// src/components/HomeScreen.js
import React from 'react';
import { View, Button, Text } from 'react-native';
import { styles } from '../utils/styles';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Willkommen bei Katsching</Text>
            <Button
                title="Einloggen"
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                title="Registrieren"
                onPress={() => navigation.navigate('Registrieren')}
            />
        </View>
    );
}

export default HomeScreen;
