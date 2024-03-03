// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'eu-central-1_nIB2ZvLTt',
  ClientId: '3cg9r2ms32mj97jelovqc9gme9'
};

const userPool = new CognitoUserPool(poolData);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onSignIn = (isSignedIn) => {
    setIsAuthenticated(isSignedIn);
  };

  useEffect(() => {
    checkAuthState();
  }, []);

  const checkAuthState = async () => {
    try {
      const user = userPool.getCurrentUser();
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            console.log('Session error', err);
            setIsAuthenticated(false);
          } else {
            console.log('Session:', session);
            setIsAuthenticated(true);
          }
        });
      } else {
        setIsAuthenticated(false);
      }
    } catch (err) {
      console.log('Benutzer ist nicht angemeldet', err);
      setIsAuthenticated(false);
    }
  };

  return (
    <NavigationContainer>
      <AppNavigator isAuthenticated={isAuthenticated} onSignIn={onSignIn} setIsAuthenticated={setIsAuthenticated} userPool={userPool} />
    </NavigationContainer>
  );
}

export default App;
