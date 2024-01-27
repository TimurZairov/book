import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import EditNavigation from './EditNavigation';
import {TabParamList} from '../type/navigation';
import EditBookNavigation from './EditBookNavigation';

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Author" component={EditNavigation} />
      <Tab.Screen name="Books" component={EditBookNavigation} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
