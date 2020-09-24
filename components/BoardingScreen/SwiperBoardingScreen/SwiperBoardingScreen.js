import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

class SwiperBoardingScreen extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <Swiper autoplay={true} showsButtons={false}>
                    <View style={styles.swipe} >
                        <Image source={require('../../../assets/images/image1.jpg')} style={styles.image} />
                    </View>
                    <View style={styles.swipe} >
                        <Image source={require('../../../assets/images/image2.jpg')} style={styles.image} />
                    </View>
                    <View style={styles.swipe} >
                        <Image source={require('../../../assets/images/image3.jpg')} style={styles.image} />
                    </View>
                </Swiper>
                <View style={styles.btncontainer}>
                    <TouchableOpacity style={styles.signUp}>
                        <Text style={styles.signUpText}>Signup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signIn}>
                        <Text style={styles.signInText}>Signin</Text>
                    </TouchableOpacity>
                </View>
            </View>
         );
    }
}
 
export default SwiperBoardingScreen;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    slide:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    image:{
        width:width,
        height:height
    },
    btncontainer:{
        position:"absolute",
        flexDirection:"row",
        bottom:50,
        width:370,
        height:60,
        marginLeft:20,
        alignItems:"flex-start",
        justifyContent:"space-between"
    },
    signUp:{
        width:180,
        height:60,
        backgroundColor: '#ADD8E6',
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center"
    },
    signUpText:{
        fontWeight:"700"
    },
    signIn:{
        width:180,
        height:60,
        backgroundColor: '#ADD8E6',
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
    },
    signInText:{
        fontWeight:"700"
    }

})