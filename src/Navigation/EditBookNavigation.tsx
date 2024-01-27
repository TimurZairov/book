import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import EditScreen from '../screens/EditScreen/EditScreen';
import {StackNavigationBookParamList} from '../type/navigation';
import BooksScreen from '../screens/BooksScreen/BooksScreen';

const Stack = createStackNavigator<StackNavigationBookParamList>();

const EditBookNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BookScreen" component={BooksScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
    </Stack.Navigator>
  );
};

export default EditBookNavigation;
