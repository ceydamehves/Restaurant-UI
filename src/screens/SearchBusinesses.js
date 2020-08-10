import React from 'react';
import { View, Text } from 'react-native';
import {Header, SearchBar} from 'react-native-elements';
class SearchBusinesses extends React.Component{
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return( 
        <View style={{flex:1,backgroundColor:'#23283A'}}>
            <Header
                placement="center"
                containerStyle={{
                backgroundColor: '#2F364E', 
                height:120,
                borderBottomColor:'black',
                borderBottomWidth:1
                }}
                centerComponent={{ text: 'SEARCH BUSINESSES', style: {marginTop:40, color: '#fff', fontSize:16 }}}/>
            <SearchBar
              placeholder=""
              onChangeText={this.updateSearch}
              value={search}
              lightTheme
              inputContainerStyle={{backgroundColor:'white', marginTop:10,height:30,borderRadius:10}}
              containerStyle={{alignItems:'center',backgroundColor:'transparent', borderTopWidth:0, borderBottomWidth:0}}
            />            
            <View style={{ flex:1 , alignItems:'center', justifyContent:'center'}}>
            </View>
        </View>     
    );

  }
}
export default SearchBusinesses;