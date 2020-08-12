import React from "react";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../styles/styles.js';
const database = require('../data/db.json');

class Restaurant extends React.Component{

  constructor (props) {
    super (props)
    var name = database.restaurants.restaurant1.info.name//[props.route.params['touch']]
    var adress = database.restaurants.restaurant1.info.adress
    var tel = database.restaurants.restaurant1.info.tel
    var rate = database.restaurants.restaurant1.info.rate
    var menu = database.restaurants.restaurant1.info.menu.salad
    this.state = {
        textname:name,
        textadress:adress,
        texttel:tel,
        textrate:rate,
        textmenu:menu
    }     
  }

  render() {    
    return( 
     <ScrollView style={{flex:1,backgroundColor:'#23283A'}}>
     <View style={styles.restaurantHolder}>
      <Text style={styles.restaurantText}>{this.state.textname}</Text>
      <Text style={styles.restaurantText}>Adress : {this.state.textadress}</Text>
      <Text style={styles.restaurantText}>Phone : {this.state.texttel}</Text>
      <Text style={styles.restaurantText}>Rate : {this.state.textrate}</Text>     
     </View>     
     <TouchableOpacity style={styles.restaurantTouchable}
                  onPress={() => {
                  this.props.navigation.navigate('Menu');}}>  
     <Image style={styles.menuImage}
            source={require ('../asset/res.jpg')}/>                  
     <Text style={{color:'white'}}>{this.state.textmenu}</Text>   
     <Image style={styles.nextIcon}
            source={require ('../asset/next.png')}/>         
     </TouchableOpacity>      
    </ScrollView> 
   );
  }
}
export default Restaurant;
