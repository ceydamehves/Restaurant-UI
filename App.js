import React from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBusinesses from './src/screens/SearchBusinesses';
import PreviousOrders from './src/screens/PreviousOrders';


const TabNavigator = createMaterialBottomTabNavigator(
  {
    
    SearchBusinesses: {
      screen: SearchBusinesses,
      navigationOptions: {
        tabBarLabel: 'Search Businesses',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={26} name={'search'} />
          </View>
        ),
        activeColor: '#FBAE2A',
        inactiveColor: 'white',
        barStyle: {backgroundColor: '#2F364E'},
      },
    },
    PreviousScreen: {
      screen: PreviousOrders,
      navigationOptions: {
        tabBarLabel: 'Previous Orders',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon
              style={[{color: tintColor}]}
              size={26}
              name={'basket'}
            />
          </View>
        ),
        activeColor: '#FBAE2A',
        inactiveColor: 'white',
        barStyle: {backgroundColor: '#2F364E'},
      },
    },
  },
  {
    initialRouteName: 'SearchBusinesses',
    shifting: true,
  },
);


export default createAppContainer(TabNavigator);