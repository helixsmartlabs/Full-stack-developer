import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductScreen from 'Helix/Screens/Product';
import CategoryScreen from 'Helix/Screens/Category';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Category" component={CategoryScreen} />
      <Tab.Screen name="Product" component={ProductScreen} />    
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Category" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Category" component={MyTabs} />
    </Stack.Navigator>
  );
}

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={MyStack} />
        <Drawer.Screen name="Product" component={ProductScreen} />
      </Drawer.Navigator>
      
    </NavigationContainer>

    
  );
}

export default App;
