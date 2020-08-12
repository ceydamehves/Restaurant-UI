import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBusinesses from "../screens/SearchBusinesses";
import Restaurant from "../screens/Restaurant";
import PreviousOrders from "../screens/PreviousOrders";
import Menu from "../screens/Menu";
import PreviousOrdersDetail from "../screens/PreviousOrdersDetail";

const Stack = createStackNavigator();

const screenOptionStyle = { 
  headerStyle: {
    backgroundColor: "#2F364E",
    height:100,
    
  },
  headerTitleStyle:{
    color:"white",
    fontFamily:"Calibri",
    fontSize:16,
    marginTop:40,
    textAlign: 'center'},
    headerTintColor: "white",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="SEARCH BUSINESSES" component={SearchBusinesses} />
      <Stack.Screen name="Restaurant" component={Restaurant}
        options={({ }) => ({
          title: "RESTAURANT",})}/>
      <Stack.Screen name="Menu" component={Menu}
        options={({ }) => ({
          title: "MENU",})}/>
    </Stack.Navigator>
  );
}

const PreviousOrdersStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="PREVIOUS ORDERS" component={PreviousOrders} />
      <Stack.Screen name="PreviousOrdersDetail" component={PreviousOrdersDetail}
        options={({ }) => ({
          title: "DETAIL",})}/>
    </Stack.Navigator>
  );
}

export { MainStackNavigator, PreviousOrdersStackNavigator };