import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import EventList from './components/Events';
import CreateEvent from './components/CreateEvents';
import MyBookings from './components/MyBookin';
import BookingForm from './components/BookingForm';

const Tab = createBottomTabNavigator(); 
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Events" component={EventList} />
        <Tab.Screen name="Create Event" component={CreateEvent} />
        <Tab.Screen name="My Bookings" component={MyBookings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;