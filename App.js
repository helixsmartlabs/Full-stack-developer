import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Signin from './components/BoardingScreen/SigninScreen/Signin';
import Signup from './components/BoardingScreen/SignupScreen/Signup';
import SwiperBoardingScreen from './components/BoardingScreen/SwiperBoardingScreen/SwiperBoardingScreen';
import ExamDetailsScreen from './components/MainScreens/ExamDetailsScreen/ExamDetailsScreen';
import HomeScreen from './components/MainScreens/HomeScreen/HomeScreen';
import ProfileScreen from './components/MainScreens/ProfileScreen/ProfileScreen';
import Routing from './components/Routing/Routing';


class App extends Component {
  state = {  }
  render() { 
    return ( 
     <Routing />
     );
  }
}
 
export default App;