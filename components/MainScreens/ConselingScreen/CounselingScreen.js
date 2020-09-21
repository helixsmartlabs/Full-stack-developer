import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, Image, DrawerLayoutAndroid, } from 'react-native'
import { Card, Header, ListItem } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

class CounselingScreen extends Component {
    state = {  }
    render() { 
        return ( 
            <ScrollView>
                <Header leftComponent={{ icon: 'menu', color: '#fff' }}
                        centerComponent={{ text: 'Counseling', style: { color: '#fff' } }}
                        rightComponent={{ icon: 'notifications-active', color: '#fff' }} />
                <Card>
                    <View style={{flexDirection:"row"}}>
                        <Card.Image source={require('../../../assets/images/image1.jpg')} style={{width:60,height:40}} />
                        <Card.Title style={{paddingLeft:30}}>Counseling1</Card.Title>
                    </View>
                    <View style={{marginLeft:45}}>
                        <Card.Title>Exam Date: dd/mm/yyyy</Card.Title>
                    </View>
                </Card>
                <Card>
                    <View style={{flexDirection:"row"}}>
                        <Card.Image source={require('../../../assets/images/image1.jpg')} style={{width:60,height:40}} />
                        <Card.Title style={{paddingLeft:30}}>Counseling2</Card.Title>
                    </View>
                    <View style={{marginLeft:45}}>
                        <Card.Title>Exam Date: dd/mm/yyyy</Card.Title>
                    </View>
                </Card>
                <Card>
                    <View style={{flexDirection:"row"}}>
                        <Card.Image source={require('../../../assets/images/image1.jpg')} style={{width:60,height:40}} />
                        <Card.Title style={{paddingLeft:30}}>Counseling3</Card.Title>
                    </View>
                    <View style={{marginLeft:45}}>
                        <Card.Title>Exam Date: dd/mm/yyyy</Card.Title>
                    </View>
                </Card>
                <Card>
                    <View style={{flexDirection:"row"}}>
                        <Card.Image source={require('../../../assets/images/image1.jpg')} style={{width:60,height:40}} />
                        <Card.Title style={{paddingLeft:30}}>Counseling4</Card.Title>
                    </View>
                    <View style={{marginLeft:45}}>
                        <Card.Title>Exam Date: dd/mm/yyyy</Card.Title>
                    </View>
                </Card>
                <Card>
                    <View style={{flexDirection:"row"}}>
                        <Card.Image source={require('../../../assets/images/image1.jpg')} style={{width:60,height:40}} />
                        <Card.Title style={{paddingLeft:30}}>Counseling5</Card.Title>
                    </View>
                    <View style={{marginLeft:45}}>
                        <Card.Title>Exam Date: dd/mm/yyyy</Card.Title>
                    </View>
                </Card>
                <Card>
                    <View style={{flexDirection:"row"}}>
                        <Card.Image source={require('../../../assets/images/image1.jpg')} style={{width:60,height:40}} />
                        <Card.Title style={{paddingLeft:30}}>Counseling6</Card.Title>
                    </View>
                    <View style={{marginLeft:45}}>
                        <Card.Title>Exam Date: dd/mm/yyyy</Card.Title>
                    </View>
                </Card>
                <Card>
                    <View style={{flexDirection:"row"}}>
                        <Card.Image source={require('../../../assets/images/image1.jpg')} style={{width:60,height:40}} />
                        <Card.Title style={{paddingLeft:30}}>Counseling7</Card.Title>
                    </View>
                    <View style={{marginLeft:45}}>
                        <Card.Title>Exam Date: dd/mm/yyyy</Card.Title>
                    </View>
                </Card>
            </ScrollView>
         );
    }
}
 
export default CounselingScreen;