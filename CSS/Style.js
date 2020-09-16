const React = require("react-native");
const { Dimensions } = React;
 


export default {

    //Category
    mainContent:{
        paddingLeft:'3%',
        paddingRight:'3%',
        backgroundColor:'lightgrey'
    },
    slider:{
        width:'100%',
        height:'30%'
    },

    //Product
   
    title:{
        textAlign:'center',
        width:'60%',
        fontWeight:'bold',
        fontSize:20
    },
    productContent:{
        paddingLeft:'2%',
        paddingRight:'2%',
        backgroundColor:'lightgrey'
    },


    
    //ProductDetail
    productWeight:{
        fontSize:12,
        fontWeight:'bold',
        borderColor:'lightgrey',
        textAlign:'center',
        borderWidth:1,
        paddingBottom:5,
        paddingTop:5,
        paddingRight:10,
        paddingLeft:10
    },

    productAdd:{
        borderWidth:1,
        fontSize:12,
        borderColor:'lightgrey',
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:5,
        paddingBottom:5,
        paddingRight:10,
        paddingLeft:10
    },

    productAmount:{
        borderWidth:1,
        fontSize:12,
        fontWeight:'bold',
        borderColor:'lightgrey',
        textAlign:'center',
        paddingTop:5,
        paddingBottom:5,
        paddingRight:10,
        paddingLeft:10
    },
    productFlex:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'10%',
        marginRight:5
    }
    
}
