import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import DeFiScreen from '../screens/DeFiScreen';
import EducationScreen from '../screens/EducationScreen';
import EventsScreen from '../screens/EventsScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeIcon from '../assets/icons/HomeIcon';
import EducationIcon from '../assets/icons/EducationIcon';
import CalendarIcon from '../assets/icons/CalendarIcon';
import WalletIcon from '../assets/icons/WalletIcon';
import UserIcon from '../assets/icons/UserIcon';
const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={HomeScreen}
        options={{tabBarIcon: () => <HomeIcon />}}
      />
      <Tab.Screen
        name="Education"
        component={EducationScreen}
        options={{tabBarIcon: () => <EducationIcon />}}
      />
      <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{tabBarIcon: () => <CalendarIcon />}}
      />
      <Tab.Screen
        name="DeFi"
        component={DeFiScreen}
        options={{tabBarIcon: () => <WalletIcon />}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{tabBarIcon: () => <UserIcon />}}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
