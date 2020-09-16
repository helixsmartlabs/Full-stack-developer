import React, { Component } from "react";
import {Image, Text, View} from "react-native";
import style from 'Helix/CSS/Style';
export default class ProductDetail extends Component {
    constructor(props) {
        super(props);
        
      }
  

  render() {
    return (
      
            <View style={{flexDirection:'row',backgroundColor:'white', marginTop:5}}>
              <View style={{width:'30%',paddingTop:5,paddingBottom:5}}>
                <Image 
                    source={{ uri:this.props.productData.image}} 
                    style={{height:100}}
                />
              </View>
                <View style={{width:'70%'}}>
                  <View  style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <View >
                        <Text style={{fontWeight:'bold'}}>{this.props.productData.name}</Text>
                        <Text style={{fontSize:12,fontWeight:'bold'}}>{this.props.productData.desc}</Text>
                      </View>
                      
                      <View style={{margin:5}}>
                        <Text style={style.productAmount}>{this.props.productData.amount}</Text>
                      </View>
                   </View>

                  <View  style={style.productFlex}>
                    <Text style={style.productWeight}>{this.props.productData.weight}</Text>
                    <Text style={style.productAdd}>ADD</Text>
                  </View>                     
                </View>                
            </View>         
    );
  }
}


