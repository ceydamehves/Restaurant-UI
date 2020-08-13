import React from "react";
import {ScrollView, View, Text, Image } from "react-native";
import { styles } from '../styles/styles.js';
class Menu extends React.Component{
  render() {    
    return( 
    <ScrollView style={{flex:1,backgroundColor:'#23283A'}}>
      <View style={styles.menuFlat}>
      <Image style={styles.menuImage}
            source={require ('../asset/res.jpg')}/>
      <Text style={styles.menuText}>SALAD 1</Text> 
      </View>
    </ScrollView>
    );
  }
}
export default Menu;