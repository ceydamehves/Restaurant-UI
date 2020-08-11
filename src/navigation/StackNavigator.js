import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SearchBusinesses from "../screens/SearchBusinesses";
import Restaurant from "../screens/Restaurant";
import PreviousOrders from "../screens/PreviousOrders";

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
      <Stack.Screen name="Restaurant" title="WD" component={Restaurant}/>
    </Stack.Navigator>
  );
}

const PreviousOrdersStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="PREVIOUS ORDERS" component={PreviousOrders} />
    </Stack.Navigator>
  );
}


export { MainStackNavigator, PreviousOrdersStackNavigator };