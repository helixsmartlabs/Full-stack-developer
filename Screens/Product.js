import React, { Component } from "react";
import {FlatList, View} from "react-native";
import style from 'Helix/CSS/Style';

import {  
  Body,
  Header,
  Title,
  Content,
  Container, 
  Left,
  Icon
} from "native-base";
import ProductDetail from 'Helix/components/ProductDetail';


export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state={
          products:[
            {
              "image":"https://images-na.ssl-images-amazon.com/images/I/61eluXgdNdL._SX569_.jpg",
              "name":"Cadbury",
              "desc":"Silk Oreo Chocolate",
              "amount":"Rs 165",
              "weight":"120 Gram"
            },
            {
              "image":"https://images-na.ssl-images-amazon.com/images/I/61eluXgdNdL._SX569_.jpg",
              "name":"Cadbury",
              "desc":"Silk Oreo Chocolate",
              "amount":"Rs 165",
              "weight":"120 Gram"
            },
            {
              "image":"https://images-na.ssl-images-amazon.com/images/I/61eluXgdNdL._SX569_.jpg",
              "name":"Cadbury",
              "desc":"Silk Oreo Chocolate",
              "amount":"Rs 165",
              "weight":"120 Gram"
            },
            {
              "image":"https://images-na.ssl-images-amazon.com/images/I/61eluXgdNdL._SX569_.jpg",
              "name":"Cadbury",
              "desc":"Silk Oreo Chocolate",
              "amount":"Rs 165",
              "weight":"120 Gram"
            },
            {
              "image":"https://images-na.ssl-images-amazon.com/images/I/61eluXgdNdL._SX569_.jpg",
              "name":"Cadbury",
              "desc":"Silk Oreo Chocolate",
              "amount":"Rs 165",
              "weight":"120 Gram"
            },
            {
              "image":"https://images-na.ssl-images-amazon.com/images/I/61eluXgdNdL._SX569_.jpg",
              "name":"Cadbury",
              "desc":"Silk Oreo Chocolate",
              "amount":"Rs 165",
              "weight":"120 Gram"
            },
            {
              "image":"https://images-na.ssl-images-amazon.com/images/I/61eluXgdNdL._SX569_.jpg",
              "name":"Cadbury",
              "desc":"Silk Oreo Chocolate",
              "amount":"Rs 165",
              "weight":"120 Gram"
            }
          ]
        }

    }

  render() {
    return (
      <Container>
        <Header  iosBarStyle={"dark-content"} androidStatusBarColor="red" style={{backgroundColor:'red'}} >
            <Left >
            <Icon  style={{color:'white'}} name='keyboard-backspace' type='MaterialIcons' onPress={() => this.props.navigation.goBack()} />
            </Left>
            <Body>
              <Title style={style.title}>Product</Title>
            </Body>
        </Header>         
        <Content style={style.productContent}>
          <View>
            <FlatList
              data={this.state.products}
              renderItem={({item}) =>
              <ProductDetail productData={item} {...this.props}/>
              }
            /> 
          </View>
        </Content>
      </Container>
    );
  }
} 
         
                

                          



