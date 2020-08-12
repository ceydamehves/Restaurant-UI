import React from 'react';
import {StatusBar, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import {Header, SearchBar} from 'react-native-elements';
import { styles } from '../styles/styles.js';

class SearchBusinesses extends React.Component{

  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [
        { id: '1', name: 'RESTAURANT' , src: require('../asset/res.jpg')},
        { id: '2', name: 'RESTAURANT 2' , src: require('../asset/res.jpg')},
        { id: '3', name: 'RESTAURANT 3' , src: require('../asset/res.jpg')},
        { id: '4', name: 'RESTAURANT 4' , src: require('../asset/res.jpg')},
        { id: '5', name: 'RESTAURANT 5' , src: require('../asset/res.jpg')},
        { id: '6', name: 'RESTAURANT 6' , src: require('../asset/res.jpg')},
        { id: '7', name: 'RESTAURANT 7' , src: require('../asset/res.jpg')}
      ],
    };
  } 
   

  render() {
    const { search } = this.state;    
    return( 
      
        <View style={{flex:1,backgroundColor:'#23283A'}}>
            <StatusBar backgroundColor="#2F364E" barStyle="light-content" />            
            <SearchBar
              placeholder=" "
              onChangeText={this.updateSearch}
              name={search}
              lightTheme
              inputContainerStyle={{backgroundColor:'white', marginTop:10,height:30,borderRadius:10}}
              containerStyle={{alignItems:'center',backgroundColor:'transparent', borderTopWidth:0, borderBottomWidth:0}}/>   

            <View style={{flex:1}}>
            <FlatList 
              data={this.state.FlatListItems}
              renderItem={({ item }) => (
                <View style={styles.flat}>
                <TouchableOpacity
                  onPress={() => {
                  this.props.navigation.navigate('Restaurant', {
                  params:{touch: 'restaurant1'},//use with [props.route.params['touch']] at Restaurant.js
                  screen:'Restaurant'
                  });
                  }}>   
                  <Image style={styles.image}
                         source={item.src}/>                  
                  <Text style={styles.flatText}>{item.name}</Text>
                  </TouchableOpacity>
                </View> 
              )}/>           
              </View>  

        </View>     
    );
  }
}
export default SearchBusinesses;

