import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AuthorScreen from '../screens/AuthorScreen/AuthorScreen';
import EditScreen from '../screens/EditScreen/EditScreen';
import {StackNavigationAuthorParamList} from '../type/navigation';

const Stack = createStackNavigator<StackNavigationAuthorParamList>();

const EditNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AuthorScreen" component={AuthorScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
    </Stack.Navigator>
  );
};

export default EditNavigation;
