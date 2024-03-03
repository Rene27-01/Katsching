// src/components/RulesScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../utils/styles';

function RulesScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Regelbuch</Text>
            {/* Regelbuch-Inhalte hier */}
        </View>
    );
}

export default RulesScreen;
