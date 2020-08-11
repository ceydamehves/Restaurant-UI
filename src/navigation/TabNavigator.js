import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MainStackNavigator, PreviousOrdersStackNavigator} from "./StackNavigator";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from "react-native";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    
  return (
    <Tab.Navigator      
      initialRouteName="SearchBusinesses"
      shifting={true}
      activeColor="yellow"
      inactiveColor="white"      
      barStyle={{ backgroundColor: "#2F364E" ,  justifyContent:'center', alignItems:'center'}}
      tabBarOptions={{
      shifting:true,
      showLabel:false
    }}>
      
      <Tab.Screen name="Search Businesses" component={MainStackNavigator}
       options={{
          tabBarLabel: 'Search Businesses',           
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={21}/>),
        }}/>
      
      <Tab.Screen name="PreviousOrders" component={PreviousOrdersStackNavigator}
        options={{
          tabBarLabel: 'Previous Orders',              
          tabBarIcon: ({ color }) => (
            <Icon name="shopping-basket" color={color} size={21}/>),
        }}/>
    </Tab.Navigator>
    
  );
};


export default BottomTabNavigator;






