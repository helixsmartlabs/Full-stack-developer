import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, Image, DrawerLayoutAndroid, } from 'react-native'
import { Card, ListItem, Header } from 'react-native-elements'

class ProfileScreen extends Component {
    state = {  }
    render() { 
        return ( 
            <View>
                <Header leftComponent={{ icon: 'menu', color: '#fff' }}
                        centerComponent={{ text: 'Profile', style: { color: '#fff' } }}
                        rightComponent={{ icon: 'notifications-active', color: '#fff' }} />
                <Card>
                    <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <Card.Image source={require('../../../assets/images/image1.jpg')} style={{width:50,height:50}}></Card.Image>
                    <Card.Title>Hey! Student</Card.Title>
                    </View>
                </Card>
                <View style={{width:"90%", paddingLeft:20}}>
                    <View style={{marginVertical:60}}>
                    <View>
                        <Text style={{fontWeight:"bold"}}>Name:-</Text>
                        <Text style={{borderBottomWidth:1}}>Bhavya Vyas</Text>
                    </View>
                    <View style={{marginTop:20}}>
                        <Text style={{fontWeight:"bold"}}>Email ID:-</Text>
                        <Text style={{borderBottomWidth:1}}>bbvyas1082000@gmail.com</Text>
                    </View>
                    <View style={{marginTop:20}}>
                        <Text style={{fontWeight:"bold"}}>Mobile:-</Text>
                        <Text style={{borderBottomWidth:1}}>701xxxxx42</Text>
                    </View>
                    <View style={{marginTop:20}}>
                        <View style={{flexDirection: "row",justifyContent:"space-between"}}>
                        <View>
                        <Text style={{fontWeight:"bold"}}>City</Text>
                        <Text style={{borderBottomWidth:1}}>Gandhinagar</Text>
                        </View>
                        <View>
                        <Text style={{fontWeight:"bold"}}>State</Text>
                        <Text style={{borderBottomWidth:1}}>Gujarat</Text>
                        </View>
                        </View>
                    </View>
                    </View>
                </View>
            </View>
         );
    }
}
 
export default ProfileScreen;