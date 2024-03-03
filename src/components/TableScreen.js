import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../utils/styles';
import { handleSignOut } from '../utils/auth';

function TableScreen({ setIsAuthenticated, userPool}) {
    const [participants, setParticipants] = useState([]);

    const addParticipant = () => {
        setParticipants([...participants, { name: '', count: 0, isConfirmed: false }]);
    };

    const confirmName = (index) => {
        const newParticipants = [...participants];
        newParticipants[index].isConfirmed = true;
        setParticipants(newParticipants);
    };

    const updateName = (index, name) => {
        const newParticipants = [...participants];
        newParticipants[index].name = name;
        setParticipants(newParticipants);
    };

    const updateCount = (index, delta) => {
        const newParticipants = [...participants];
        newParticipants[index].count += delta;
        setParticipants(newParticipants);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='dark-content' />
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                <Text style={styles.title}>Katsching💸</Text>
                <View style={styles.table}>
                    {participants.map((participant, index) => (
                        <View key={index} style={styles.row}>
                            <TextInput
                                style={[styles.input, participant.isConfirmed && styles.confirmedInput]}
                                onChangeText={(text) => updateName(index, text)}
                                value={participant.name}
                                placeholder="Name"
                                editable={!participant.isConfirmed}
                            />
                            {!participant.isConfirmed && (
                                <TouchableOpacity
                                    style={styles.confirmButton}
                                    onPress={() => confirmName(index)}
                                >
                                    <Text style={styles.confirmButtonText}>✓</Text>
                                </TouchableOpacity>
                            )}
                            <Text style={styles.counter}>{participant.count}</Text>
                            <TouchableOpacity onPress={() => updateCount(index, 1)} style={styles.plusButton}>
                                <Text>+</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
                <TouchableOpacity style={styles.addButton} onPress={addParticipant}>
                    <Text style={styles.addButtonText}>+ Teilnehmer hinzufügen</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

export default TableScreen;
