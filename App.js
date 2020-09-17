import React from 'react';

import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button, } from 'react-native-elements';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Data } from './data';

const data = Data;

const SettingsScreen = ({navigation}) => {
  return(
    <View>
      <Text>Settings</Text>
    </View>
  )
}

const Cart = ({navigation}) => {
  return(
    <View>
      <Text>Cart </Text>
    </View>
  )
}

const HomeScreen = () => {
  return(
    <View>
      <Card>
  <Card.Title>CARD WITH DIVIDER</Card.Title>
  <Card.Divider/>
  {
    Data.map((u) => {
      return (
        <View key={u.id}>
          <Text>{u.title}</Text>
        </View>
      );
    })
  }
      </Card>
    </View>
  )
}

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerScreen() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={()=>{return null}}/>
        <Drawer.Screen name="Locations" component={()=>{return null}}/>
        <Drawer.Screen name="Offers" component={()=>{return null}}/>
      </Drawer.Navigator>
  );
}

const App = () => {
  return(
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={DrawerScreen}/>
          <Tab.Screen name="Cart" component={Cart}/>
          <Tab.Screen name="Setings" component={SettingsScreen}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;