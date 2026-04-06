import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import DestinationScreen from './screens/DestinationScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <MainApp />
    </SafeAreaProvider>
  );
}

function MainApp() {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [destination, setDestination] = useState('');

  if (currentScreen === 'Destination') {
    return (
      <DestinationScreen
        destination={destination}
        onGoBack={() => setCurrentScreen('Home')}
      />
    );
  }

  return (
    <HomeScreen
      destination={destination}
      setDestination={setDestination}
      onExplore={() => setCurrentScreen('Destination')}
    />
  );
}
