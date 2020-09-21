import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, Image, DrawerLayoutAndroid, } from 'react-native'
import { Card, ListItem, Header } from 'react-native-elements'
import Swiper from 'react-native-swiper';
import TouchableScale from 'react-native-touchable-scale'; 
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

class HomeScreen extends Component {
    state = { 
        
     }
    render() { 

        
        const navigationView = (
            <View>
                <View style={{width:300,height:180,justifyContent:"center",alignItems:"center",backgroundColor:'#ADD8E6'}}>
                    <Image source={require('../../../assets/images/image1.jpg')} style={{width:50,height:50}}></Image>
                    <Text>Hey! Student</Text>
                </View>
                <View>
                <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                    <View style={{flexDirection:"column",justifyContent:"space-around",paddingVertical:20}}>
                        <Icon name="credit-card"  color="black" size={25} onPress={() => this.props.navigation.navigate('PremiumServicesScreen')} />
                        <Icon name="analytics"  color="black" size={25} />
                        <Icon name="domain-verification"  color="black" size={25} />
                        <Icon name="content-paste"  color="black" size={25} />
                    </View>
                    <View style={{flexDirection:"column",justifyContent:"space-around",paddingVertical:20}}>
                        <Text onPress={() => this.props.navigation.navigate('PremiumServicesScreen')}>Premium Service</Text>
                        <Text>Rank Predictor</Text>
                        <Text>Choose Course</Text>
                        <Text>Testimonial</Text>
                    </View>
                </View>
                <Text style={{borderBottomWidth:2}}></Text>
                <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                    <View style={{flexDirection:"column",justifyContent:"space-around",paddingVertical:20}}>
                        <Icon name="info"  color="black" size={25} />
                        <Icon name="note"  color="black" size={25} />
                        <Icon name="contact-support"  color="black"  size={25}/>
                        <Icon name="share"  color="black" size={25}/>
                        <Icon name="privacy-tip"  color="black" size={25}/>
                    </View>
                    <View style={{flexDirection:"column",justifyContent:"space-around",paddingVertical:20}}>
                        <Text>About us</Text>
                        <Text>Terms & Condition</Text>
                        <Text>Contact Us</Text>
                        <Text>Share with Friends</Text>
                        <Text>Privacy Policy</Text>
                    </View>
                </View>
                <Text style={{borderBottomWidth:2}}></Text>
                <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                    <View style={{flexDirection:"column",justifyContent:"space-around",paddingVertical:20}}>
                        <Icon name="info"  color="black" size={25} />
                    </View>
                    <View style={{flexDirection:"column",justifyContent:"space-around",paddingVertical:20}}>
                        <Text>Log out</Text>
                    </View>
                </View>
                </View>
            </View>
          );
        return ( 
            <>
            <DrawerLayoutAndroid
                drawerWidth={300}
                renderNavigationView={() => navigationView}
            >
            <Header leftComponent={{ icon: 'menu', color: '#fff' }}
                        centerComponent={{ text: 'Welcome', style: { color: '#fff' } }}
                        rightComponent={{ icon: 'notifications-active', color: '#fff' }} />
            <View style={styles.container}>
                <StatusBar hidden={false} />
                <View>
                    <Text style={{fontSize:23, color:'#ffb347'}}>Hello, Dear Student</Text>
                </View>
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
                <View style={{marginBottom:325}}>
                    <Card>
                        <Card.Title>Conselling Processes</Card.Title>
                        <ListItem
                            Component={TouchableScale}
                            friction={90} //
                            tension={100} // These props are passed to the parent component (here TouchableScale)
                            activeScale={0.95} //
                            linearGradientProps={{
                            colors: ['#FF9800', '#F44336'],
                            start: { x: 1, y: 0 },
                            end: { x: 0.2, y: 0 },
                            }}
                            ViewComponent={LinearGradient} // Only if no expo
                        >
                            <ListItem.Content>
                                <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>
                                Conselling Processs 1
                                </ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron color="white" />
                        </ListItem>
                        <ListItem
                            Component={TouchableScale}
                            friction={90} //
                            tension={100} // These props are passed to the parent component (here TouchableScale)
                            activeScale={0.95} //
                            linearGradientProps={{
                            colors: ['#FF9800', '#F44336'],
                            start: { x: 1, y: 0 },
                            end: { x: 0.2, y: 0 },
                            }}
                            ViewComponent={LinearGradient} // Only if no expo
                        >
                            <ListItem.Content>
                                <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>
                                Conselling Processs 2
                                </ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron color="white" />
                        </ListItem>
                        <ListItem
                            Component={TouchableScale}
                            friction={90} //
                            tension={100} // These props are passed to the parent component (here TouchableScale)
                            activeScale={0.95} //
                            linearGradientProps={{
                            colors: ['#FF9800', '#F44336'],
                            start: { x: 1, y: 0 },
                            end: { x: 0.2, y: 0 },
                            }}
                            ViewComponent={LinearGradient} // Only if no expo
                        >
                            <ListItem.Content>
                                <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>
                                Conselling Processs 3
                                </ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron color="white" />
                        </ListItem>
                    </Card>
                </View>
            </View>
            </DrawerLayoutAndroid>
            </>
         );
    }
}
 
export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingLeft:30,
        paddingRight:30,
        paddingTop:30
    },
    slide:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    image:{
        width:width,
        height:height-500,
    },
    navigationContainer: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: "#fff",
        padding: 8,
    }
})