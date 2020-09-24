import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CounselingScreen from '../MainScreens/ConselingScreen/CounselingScreen';
import ExamDetailsScreen from '../MainScreens/ExamDetailsScreen/ExamDetailsScreen';
import HomeScreen from '../MainScreens/HomeScreen/HomeScreen';
import ProfileScreen from '../MainScreens/ProfileScreen/ProfileScreen';


class Routing extends Component {
    state = {  }
    render() { 

        const Tab = createBottomTabNavigator();

        return ( 
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Exam detais" component={ExamDetailsScreen} />
                    <Tab.Screen name="Counseling" component={CounselingScreen} />
                    <Tab.Screen name="My Profile" component={ProfileScreen} />
                </Tab.Navigator>
            </NavigationContainer>
         );
    }
}
 
export default Routing;