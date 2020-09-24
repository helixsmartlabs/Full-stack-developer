import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, Image, DrawerLayoutAndroid, } from 'react-native'
import { Card, ListItem,Header } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

class ExamDetailsScreen extends Component {
    state = {  }
    render() { 
        return ( 
            <ScrollView>
                <Header leftComponent={{ icon: 'menu', color: '#fff' }}
                        centerComponent={{ text: 'Exam', style: { color: '#fff' } }}
                        rightComponent={{ icon: 'notifications-active', color: '#fff' }} />
                <Card>
                    <View style={{flexDirection:"row"}}>
                        <Card.Image source={require('../../../assets/images/image1.jpg')} style={{width:60,height:40}} />
                        <Card.Title style={{paddingLeft:30}}>Exam1</Card.Title>
                    </View>
                    <View style={{marginLeft:45}}>
                        <Card.Title>Exam Date: dd/mm/yyyy</Card.Title>
                    </View>
                </Card>
                <Card>
                    <View style={{flexDirection:"row"}}>
                        <Card.Image source={require('../../../assets/images/image1.jpg')} style={{width:60,height:40}} />
                        <Card.Title style={{paddingLeft:30}}>Exam2</Card.Title>
                    </View>
                    <View style={{marginLeft:45}}>
                        <Card.Title>Exam Date: dd/mm/yyyy</Card.Title>
                    </View>
                </Card>
                <Card>
                    <View style={{flexDirection:"row"}}>
                        <Card.Image source={require('../../../assets/images/image1.jpg')} style={{width:60,height:40}} />
                        <Card.Title style={{paddingLeft:30}}>Exam3</Card.Title>
                    </View>
                    <View style={{marginLeft:45}}>
                        <Card.Title>Exam Date: dd/mm/yyyy</Card.Title>
                    </View>
                </Card>
                <Card>
                    <View style={{flexDirection:"row"}}>
                        <Card.Image source={require('../../../assets/images/image1.jpg')} style={{width:60,height:40}} />
                        <Card.Title style={{paddingLeft:30}}>Exam4</Card.Title>
                    </View>
                    <View style={{marginLeft:45}}>
                        <Card.Title>Exam Date: dd/mm/yyyy</Card.Title>
                    </View>
                </Card>
                <Card>
                    <View style={{flexDirection:"row"}}>
                        <Card.Image source={require('../../../assets/images/image1.jpg')} style={{width:60,height:40}} />
                        <Card.Title style={{paddingLeft:30}}>Exam5</Card.Title>
                    </View>
                    <View style={{marginLeft:45}}>
                        <Card.Title>Exam Date: dd/mm/yyyy</Card.Title>
                    </View>
                </Card>
                <Card>
                    <View style={{flexDirection:"row"}}>
                        <Card.Image source={require('../../../assets/images/image1.jpg')} style={{width:60,height:40}} />
                        <Card.Title style={{paddingLeft:30}}>Exam6</Card.Title>
                    </View>
                    <View style={{marginLeft:45}}>
                        <Card.Title>Exam Date: dd/mm/yyyy</Card.Title>
                    </View>
                </Card>
                <Card>
                    <View style={{flexDirection:"row"}}>
                        <Card.Image source={require('../../../assets/images/image1.jpg')} style={{width:60,height:40}} />
                        <Card.Title style={{paddingLeft:30}}>Exam7</Card.Title>
                    </View>
                    <View style={{marginLeft:45}}>
                        <Card.Title>Exam Date: dd/mm/yyyy</Card.Title>
                    </View>
                </Card>
            </ScrollView>
         );
    }
}
 
export default ExamDetailsScreen;