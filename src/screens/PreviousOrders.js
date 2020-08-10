import React from 'react';
import {Button, Text, View} from 'react-native';

class PreviousOrders extends React.Component {
  render() {
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button
            title="Go Search"
            onPress={() => this.props.navigation.navigate('SearchBusinesses')}
            />
        </View>
    );
  }
}


export default PreviousOrders;