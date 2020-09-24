import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { OutlinedTextField } from 'react-native-material-textfield'


class Signin extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={styles.container}>
                <View style={styles.textInputContainer}>
                    <Text style={styles.tagLineText}>A Journey to Excellence. </Text>
                    <OutlinedTextField label="email" />
                    <OutlinedTextField label="password" />
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.login}>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginWithOTP}>
                            <Text style={styles.loginWithOTPText}>Login with OTP</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.txtContainer}>
                        <TouchableOpacity >
                            <Text style={{fontWeight:"bold"}}>New User? Sign up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{fontWeight:"bold"}}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
         );
    }
}
 
export default Signin;

const styles =StyleSheet.create({
    container:{
        flex:1,
        marginLeft:20,
        marginVertical:40
    },
    textInputContainer:{
        position:"absolute",
        width:"95%"
    },
    tagLineText:{
        fontSize:35,
        fontWeight:"600",
        color: '#ffb347'
    },
    btnContainer:{
        position:"relative",
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"space-between",
        marginTop:30
    },
    login:{
        width:150,
        height:60,
        backgroundColor: '#ADD8E6',
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center"
    },
    loginWithOTP:{
        width:180,
        height:60,
        backgroundColor: '#ADD8E6',
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center"
    },
    loginText:{
        color:'#fff'
    },
    loginWithOTPText:{
        color:'#fff'
    },
    txtContainer:{
        position:"relative",
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"space-between",
        marginTop:20
    }
})