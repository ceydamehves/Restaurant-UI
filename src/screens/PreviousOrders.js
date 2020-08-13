import React from "react";
import {ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from '../styles/styles.js';


class PreviousOrders extends React.Component{
  render() {    
    return( 
  
    <ScrollView style={{flex:1,backgroundColor:'#23283A'}}>
      <TouchableOpacity style={styles.previousOrderTouchable}
                  onPress={() => {
                  this.props.navigation.navigate('PreviousOrdersDetail');}}>  
     <Text style={{color:'white',fontSize:16}}>{"Date : 00/00/00 \nTime : 00.00 "}</Text>                  
     <Text style={{color:'#FBAE2A',marginLeft:50,fontSize:16}}>Total : $ 00.00 </Text>   
     <Image style={styles.nextIcon}
            source={require ('../asset/next.png')}/>         
     </TouchableOpacity>           
     
    </ScrollView>
    );
  }
}
export default PreviousOrders;