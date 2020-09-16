


import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput, 
  TouchableHighlight,
  StatusBar,
  FlatList,
  Image,
  Text as Txt,
} from 'react-native';
import { 
  Root,
  Container,
  Header,
  Button,
  Content,
  Item,
  Icon,
  Input,
  Left,
  List,
  ListItem,
  Body, 
  Right,
  Text, 
  Title,
  Card,
  CardItem
   } from 'native-base';
 import ImageSlider from 'react-native-image-slider';
 import style from 'Helix/CSS/Style';



export default class Category extends Component {
  constructor(props) {
    super(props);
  }


  render() {
  return (
      
      <Container>
        <Header iosBarStyle={"light-content"} androidStatusBarColor="red"  style={{backgroundColor:'red'}} >
          <Left>
              <Button transparent>
                <Icon name='menu' onPress={() =>   this.props.navigation.openDrawer()} />
              </Button>
            </Left>
            <Body>
              <Title>HOME</Title>
            </Body>
            <Right>
              <Button transparent onPress={() => this.props.navigation.navigate('Product')}>
                <Icon name='arrow-right' type= 'FontAwesome5'/>
              </Button>              
            </Right>
        </Header>
        
        <View style={style.slider}>
          <ImageSlider images={[
                'https://i4.aroq.com/3/cadbury_kitkat_snickers_india.jpg',
                'https://i.pinimg.com/originals/9f/a2/95/9fa29546f077d773f9b52de9d226843b.jpg',
                'https://i.ytimg.com/vi/h4JUmC_CC68/maxresdefault.jpg']}/>
        </View>
        <Content style={style.mainContent}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'2%',height:'20%'}}>
              <Image 
                source={{ uri:'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0004/3627/brand.gif?itok=eK1U2kcx'}} 
                style={{width:'24%'}}/>

           <Image 
              source={{ uri:'https://www.logolynx.com/images/logolynx/c6/c6b13c7726bb69b240cce3cf618c3681.jpeg'}}
              style={{width:'24%'}}
            />
            <Image 
                source={{ uri:'https://pbs.twimg.com/profile_images/602122061918523393/jjngdTJJ_400x400.jpg'}} 
                style={{width:'24%'}}/>
            <Image 
                source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtePgkRbTbUUbZ2UTDah_ewLvM9xyDFl9PiCtdXynBJtVd0cAGdEwSI8ZNmDv8eoBkJSluPxMNTUWgm2VWQ5JJCzWgC2TTUweauQ&usqp=CAU&ec=45702846'}} 
                style={{width:'24%'}}/>              
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'2%'}}>
              <Image 
                source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRE4XVzGGNqirKJVJJsvIV56J8ol3j6JUzIKn4gFxMWr24jrCyR6NbHTMEf8IMrEjDiUFZWyaxY9XQuUBBAcE16A7IdK9MfismQVw&usqp=CAU&ec=45702846'}} 
                style={{width:'24%'}}/>

           <Image 
              source={{ uri:'https://www.kalpaflorist.com/wp-content/uploads/2019/07/buy-best-chocolates-online-india.png'}}
              style={{width:'24%',height:100}}
            />
            <Image 
                source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxBf-7ldCnOE6NVKAe8yWgymoityLHz30Z6myK3BFpkYolAsrKrFywpvoCqGMbhl2M93EO7WvqcF4YNW3CjOzbPjvskufbS1bD3g&usqp=CAU&ec=45702846'}} 
                style={{width:'24%',height:100}}/>
            <Image 
                source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTfrYLEKWXsayXqKJRUavyCFURQ8qT4nGaBI5Xg6X1jnC2zXLj--1Q1OUk9hi-KG2cLDLskmnZV6JVZPRZsvW0f5Cjn5h8C3yUxg&usqp=CAU&ec=45702846'}} 
                style={{width:'24%',height:100}}/>              
         </View>
            <View style={{marginTop:'5%',flexDirection:'row',justifyContent:'space-between',backgroundColor:'white'}}>
              <View style={{width:'49%'}}>
              <Image 
                source={{ uri:'https://images-na.ssl-images-amazon.com/images/I/71h5seeZa6L._SX679_.jpg'}} 
                style={{width:'99%',height:90,marginTop:'3%'}}/>
                <Text style={{textAlign:'center'}}>CADBURY</Text>
              </View>
              <View style={{width:'49%'}}>
              <Image 
                source={{ uri:'https://www.nestle.in/sites/g/files/pydnoa451/files/asset-library/publishingimages/ourexports/chocolate_banner_new.jpg'}} 
                style={{width:'99%',height:90,marginTop:'3%',marginLeft:'1%'}}/>
                <Text style={{textAlign:'center'}}>Nestle</Text>
              </View>
            </View>
        
            <View style={{marginTop:'2%',flexDirection:'row',justifyContent:'space-between',backgroundColor:'white'}}>
              <View style={{width:'49%'}}>
              <Image 
                source={{ uri:'https://i.pinimg.com/originals/88/88/91/8888912f635a2d2965370b15eecc56c7.jpg'}} 
                style={{width:'99%',height:90,marginTop:'3%'}}/>
                <Text style={{textAlign:'center'}}>Amul</Text>
              </View>
              <View style={{width:'49%'}}>
              <Image 
                source={{ uri:'https://st3.depositphotos.com/1063437/17689/i/1600/depositphotos_176893362-stock-photo-ferrero-rocher-chocolate-sweets.jpg'}} 
                style={{width:'99%',height:90,marginTop:'3%',marginLeft:'1%'}}/>
                <Text style={{textAlign:'center'}}>Ferrero Rocher </Text>
              </View>
            </View>

            <View style={{marginTop:'2%',marginBottom:'40%',flexDirection:'row',justifyContent:'space-between',backgroundColor:'white'}}>
              <View style={{width:'49%',height:100}}>
              <Image 
                source={{ uri:'https://images-na.ssl-images-amazon.com/images/I/71h5seeZa6L._SX679_.jpg'}} 
                style={{width:'99%',height:70,marginTop:'3%'}}/>
                <Text style={{textAlign:'center'}}>NEEDS</Text>
              </View>
              <View style={{width:'49%',height:100}}>
              <Image 
                source={{ uri:'https://i.pinimg.com/originals/40/ac/ee/40acee0fda6c84b560ba669743282910.jpg'}} 
                style={{width:'99%',height:70,marginTop:'3%',marginLeft:'1%'}}/>
                <Text style={{textAlign:'center'}}>NEEDS </Text>
              </View>
            </View>                
        </Content>        
      </Container>
        
    );
  }; 
 }



