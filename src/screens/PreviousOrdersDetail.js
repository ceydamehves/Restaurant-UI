import React from "react";
import { ScrollView, View, Text } from "react-native";
import { styles } from '../styles/styles.js';


class PreviousOrdersDetail extends React.Component{
  render() {    
    return( 
    <ScrollView style={{flex:1,backgroundColor:'#23283A'}}>
      <View style={styles.detailHolder}>
      <Text style={{color:'#FBAE2A',fontSize:20,marginBottom:20}}>RESTAURANT NAME</Text>
      <View style={{flexDirection:'row',alignContent:'space-between', justifyContent:'space-around'}}>
        <View style={styles.count}>
          <Text style={{color:'white'}}>1</Text>
        </View>
        <Text style={styles.detailText}> salad </Text>
        <Text style={styles.detailText}> $ 00.00 </Text>
      </View>
      </View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <View style={styles.total}>
          <Text style={{color:'black'}}> Total : $ 00.00</Text>
      </View></View>
    </ScrollView>
    );
  }
}
export default PreviousOrdersDetail;