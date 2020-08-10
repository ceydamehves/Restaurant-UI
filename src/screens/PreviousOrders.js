import React from 'react';
import {Button, Text, View} from 'react-native';
import {Header} from 'react-native-elements';
class PreviousOrders extends React.Component {
  render() {
    return (
        <View style={{flex:1}}>
            <Header
                placement="center"
                containerStyle={{backgroundColor: '#2F364E', height:120}}
                centerComponent={{ text: 'PREVIOUS ORDERS', style: {marginTop:40, color: '#fff', fontSize:16 }}}/>
                <View style={{ flex:1 , alignItems:'center', justifyContent:'center'}}>
            <Button
            title="Go Search"
            onPress={() => this.props.navigation.navigate('SearchBusinesses')}
            /></View>
        </View>

    );
  }
}


export default PreviousOrders;