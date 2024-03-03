// src/components/RegisterScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { registerUser } from '../utils/auth';
import { styles } from '../utils/styles';

function RegisterScreen({ onRegisterSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = () => {
        registerUser(username, password, email, onRegisterSuccess);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder="Benutzername"
            />
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Passwort"
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="E-Mail"
            />
            <Button title="Registrieren" onPress={handleRegister} />
        </View>
    );
}

export default RegisterScreen;
