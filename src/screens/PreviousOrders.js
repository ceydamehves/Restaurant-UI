import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from '../styles/styles.js';

class PreviousOrders extends React.Component{
  render() {    
    return( 
  
    <View style={{flex:1,backgroundColor:'#23283A'}}>
      <TouchableOpacity style={styles.restaurantTouchable}
                  onPress={() => {
                  this.props.navigation.navigate('PreviousOrdersDetail');}}> 
        <Text>order</Text>         
      </TouchableOpacity>
    </View>
    );
  }
}
export default PreviousOrders;