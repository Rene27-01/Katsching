// src/utils/auth.js
import { CognitoUserPool, AuthenticationDetails, CognitoUser, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { Alert } from 'react-native';

const poolData = {
    UserPoolId: 'eu-central-1_nIB2ZvLTt', // Ersetzen Sie mit Ihrer User Pool ID
    ClientId: '3cg9r2ms32mj97jelovqc9gme9' // Ersetzen Sie mit Ihrem Client ID
};

const userPool = new CognitoUserPool(poolData);

export const loginUser = (username, password, onSignIn) => {
    const authenticationDetails = new AuthenticationDetails({
        Username: username,
        Password: password
    });

    const cognitoUser = new CognitoUser({
        Username: username,
        Pool: userPool
    });

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (session) => {
            console.log('Anmeldung erfolgreich!', session);
            onSignIn(true);
        },
        onFailure: (err) => {
            console.error('Anmeldung fehlgeschlagen', err);
            onSignIn(false);
        }
    });
};

export const registerUser = (username, password, email, onRegisterSuccess) => {
    const attributeList = [
        new CognitoUserAttribute({ Name: 'email', Value: email })
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


export const handleSignOut = (setIsAuthenticated, userPool) => {
    const user = userPool.getCurrentUser();
    if (user) {
        user.signOut();
    }
    setIsAuthenticated(false);
};
