import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { OutlinedTextField } from 'react-native-material-textfield'

class Signup extends Component {
    state = {  }
    render() { 
        return ( 
            
                <View style={styles.container}>
                 <View style={styles.textInputContainer}>
                    <Text style={styles.tagLineText}>A Journey to Excellence. </Text>
                    <OutlinedTextField label="First Name" />
                    <OutlinedTextField label="Last Name" />
                    <OutlinedTextField label="Phone" keyboardType={"number-pad"} />
                    <OutlinedTextField label="Email" />
                    <OutlinedTextField label="State" />
                    <OutlinedTextField label="Gender" />
                    <OutlinedTextField label="Passwod" />
                    <OutlinedTextField label="Cofirm Password" />
                    <TouchableOpacity style={styles.signUp}>
                        <Text>Signup</Text>
                    </TouchableOpacity>
                </View>   
            </View>
            
         );
    }
}
 
export default Signup;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginLeft:20,
        marginVertical:40
    },
    textInputContainer:{
        position:"absolute",
        width:"95%",
    },
    tagLineText:{
        fontSize:35,
        fontWeight:"600",
        color: '#ffb347'
    },
    signUp:{
        width:150,
        height:60,
        backgroundColor: '#ADD8E6',
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        marginLeft:110
    }
})