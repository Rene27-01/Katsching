// src/components/StatisticsScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../utils/styles';

function StatisticsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Statistiken</Text>
            {/* Statistik-Logik hier */}
        </View>
    );
}

export default StatisticsScreen;
