import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TabNavigation from './src/Navigation/TabNavigation';
import 'react-native-gesture-handler';
import AppProvider from './src/context/Context';

const App = () => {
  return (
    <AppProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </AppProvider>
  );
};

export default App;
