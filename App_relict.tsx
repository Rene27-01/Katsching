import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { enableScreens } from 'react-native-screens';
enableScreens();
import { CognitoUserPool, AuthenticationDetails, CognitoUser, CognitoUserAttribute } from 'amazon-cognito-identity-js';
console.log('CognitoUserPool:', CognitoUserPool);


APP_CLIENT_ID = "3cg9r2ms32mj97jelovqc9gme9"
COGNITO_REGION = "eu-central-1"
USER_POOL_ID = "eu-central-1_nIB2ZvLTt"



const poolData = {
  UserPoolId: 'eu-central-1_nIB2ZvLTt',
  ClientId: '3cg9r2ms32mj97jelovqc9gme9'
};

const userPool = new CognitoUserPool(poolData);

function RegisterScreen({ onRegisterSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    const attributeList = [
      new CognitoUserAttribute({ Name: 'email', Value: email }),
    ];

    userPool.signUp(username, password, attributeList, null, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Registrierung erfolgreich!', result);
      onRegisterSuccess();
    });
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


// Beispiel für eine Anmeldefunktion
const loginUser = (username, password, onSignIn) => {
  const authenticationDetails = new AuthenticationDetails({
    Username: username,
    Password: password,
  });

  const cognitoUser = new CognitoUser({
    Username: username,
    Pool: userPool
  });

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: (session) => {
      console.log('Anmeldung erfolgreich!', session);
      onSignIn(true); // Authentifizierungsstatus aktualisieren
    },
    onFailure: (err) => {
      console.error('Anmeldung fehlgeschlagen', err);
      onSignIn(false); // Authentifizierungsstatus nicht ändern
    }
  });
};



const linking = {
  prefixes: ['katsching://'],
  config: {
    screens: {
      AuthCallback: 'callback',
      SignOut: 'signout',
      // Definieren Sie hier weitere Screens/Routen
    },
  },
};


function LoginScreen({ onSignIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    loginUser(username, password, onSignIn); // onSignIn wird hier übergeben
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
      <Button title="Anmelden" onPress={handleLogin} />
    </View>
  );
}



function TableScreen() {
  const [participants, setParticipants] = useState([]);

  const addParticipant = () => {
    setParticipants([...participants, { name: '', count: 0 }]);
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
                style={styles.input}
                onChangeText={(text) => updateName(index, text)}
                value={participant.name}
                placeholder="Name"
              />
              <Button title="+ Teilnehmer hinzufügen" onPress={addParticipant} />
              <Text style={styles.counter}>{participant.count}</Text>
              <Button title="+" onPress={() => updateCount(index, 1)} />
            </View>
          ))}
        </View>
        <Button title="+ Teilnehmer hinzufügen" onPress={addParticipant} />
      </ScrollView>
    </SafeAreaView>
  );
}

function StatisticsScreen() {
  return (
    <View>
      <Text>Statistiken</Text>
    </View>
  );
}

function RulesScreen() {
  return (
    <View>
      <Text>Regelbuch</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthState();
  }, []);

  const onSignIn = (isSignedIn) => {
    setIsAuthenticated(isSignedIn);
  };

  const checkAuthState = async () => {
    try {
      const session = await userPool.getCurrentUser().getSession();
      console.log('Session:', session);
      setIsAuthenticated(true);
    } catch (err) {
      console.log('Benutzer ist nicht angemeldet', err);
      setIsAuthenticated(false);
    }
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        {isAuthenticated ? (
          <>
            <Tab.Screen name="Tabelle" component={TableScreen} />
            {/* Weitere authentifizierte Screens hier */}
          </>
        ) : (
          <Tab.Screen name="Login">
            {() => <LoginScreen onSignIn={onSignIn} />}
          </Tab.Screen>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// ... (der Rest des Codes bleibt gleich)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Hintergrundfarbe
  },
  scrollView: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
    color: '#333', // Schriftfarbe
  },
  table: {
    alignSelf: 'stretch',
    backgroundColor: '#fff', // Hintergrundfarbe der Tabelle
    borderRadius: 10, // Abgerundete Ecken
    shadowColor: '#000', // Schattenfarbe
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Nur für Android (Schatten)
    padding: 10, // Innenabstand
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    flex: 1,
    marginRight: 10,
    padding: 8, // Padding für Input
    borderRadius: 5, // Abgerundete Ecken für Input
  },
  counter: {
    fontSize: 18,
    width: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff', // Hintergrundfarbe für Button
    color: '#fff', // Schriftfarbe für Button
    padding: 10,
    borderRadius: 5, // Abgerundete Ecken für Button
  },
});


export default App;