import React from 'react';
import { View, Text } from 'react-native';
import {Header} from 'react-native-elements';
class SearchBusinesses extends React.Component{
  render (){
    return( 
        <View style={{flex:1}}>
            <Header
                placement="center"
                containerStyle={{backgroundColor: '#2F364E', height:120}}
                centerComponent={{ text: 'SEARCH BUSINESSES', style: {marginTop:40, color: '#fff', fontSize:16 }}}/>
            <View style={{ flex:1 , alignItems:'center', justifyContent:'center'}}>
            <Text>Search Businesses</Text>
            </View>
        </View>     
    );

  }
}
export default SearchBusinesses;