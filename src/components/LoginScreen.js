// src/components/LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { loginUser } from '../utils/auth';
import { styles } from '../utils/styles';

function LoginScreen({ onSignIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = () => {
        loginUser(username, password, onSignIn);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.loginInput}
                value={username}
                onChangeText={setUsername}
                placeholder="Benutzername"
            />
            <TextInput
                style={styles.loginInput}
                value={password}
                onChangeText={setPassword}
                placeholder="Passwort"
                secureTextEntry
            />
            <Button title="Anmelden" onPress={handleLogin} />
        </View>
    );
}

export default LoginScreen;
