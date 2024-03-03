// src/utils/styles.js
import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    counter: {
        fontSize: 18,
        width: 10,
        textAlign: 'center',
        
    },
    scrollView: {
        marginHorizontal: 20,
    },
    table: {
        width: screenWidth * 0.8, // 80% der Bildschirmbreite
        alignSelf: 'center', // Zentriert die Tabelle
        backgroundColor: '#fff',
        borderRadius: 15,
        margin: 5,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingVertical: 10,
    },
    input: {
        color: 'black',
        flex: 1,
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        marginRight: -20,
        paddingLeft: 8,
    loginInput: {
        padding: 10,
        flex: 1,
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        width: screenWidth * 0.8,
        alignSelf: 'center',
    },
    },
    counter: {
        fontSize: 16,
        width: 30,
        textAlign: 'center',
        marginRight: 10,
    },
    addButton: {
        backgroundColor: '#28a745',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    
    },
    addButtonText: {
        color: '#fff',
        textAlign: 'center',
    },
    confirmButton: {
        padding: 10,
        // Weitere Style-Einstellungen für den Bestätigungs-Button
    },
    inputContainer: {
        flexDirection: 'row',
        flex: 1,
        marginRight: 10,
    },
    confirmButton: {
        justifyContent: 'center',
        paddingLeft: 0,
        paddingRight: 15,
    },
    // In Ihrer styles.js
    confirmedInput: {
        borderColor: 'transparent', // Entfernt die Border
        backgroundColor: '#ffffff', // Optional: Hintergrundfarbe ändern
    },
    // ... Rest der Styles
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        // Weitere Stilangaben für den Kopfbereich
    },
    dropdownMenu: {
        position: 'absolute',
        top: 50,
        right: 10,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        // Schatten- und andere Stile für das Dropdown-Menü
    },
    // ... Rest Ihrer Styles



});
