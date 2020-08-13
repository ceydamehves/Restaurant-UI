import { StyleSheet,Dimensions } from 'react-native';

export const styles = StyleSheet.create({

    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      },
      flat:{
        backgroundColor:'#353A50',
        borderRadius:10,
        borderWidth:2,
        borderColor:'#353A50',
        marginTop:25,
        marginLeft:20,
        marginRight:20,
      },
      flatText: {
        alignSelf:'center',
        marginTop:10,
        marginBottom:10,
        fontSize: 16,    
        color:'white'
      },
      image:{
        width:350,
        height:110,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
      },
      menuImage:{
        width:70,
        height:70,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
      },
      nextIcon:{
        alignSelf:'center', 
        width:30,
        justifyContent:'flex-end',
        height:30,
      },
      restaurantText:{
        fontSize:16,
        color:'white',
      },
      restaurantHolder:{
        backgroundColor:'#2F364E',
        alignItems:'center',
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        borderRadius:10,
        borderWidth:15,
        borderColor:'#2F364E'
      },
      restaurantTouchable:{
        flexDirection:'row',
        backgroundColor:'#2F364E',
        alignItems:'center',
        justifyContent:'space-between', 
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        borderRadius:10,
        borderWidth:15,
        borderColor:'#2F364E'
      },
      previousOrderTouchable:{
        flexDirection:'row',
        backgroundColor:'#2F364E',
        alignItems:'center',
        justifyContent:'space-between', 
        marginTop:40,
        marginLeft:20,
        marginRight:20,
        borderRadius:10,
        borderWidth:20,
        borderColor:'#2F364E'
      },
      menuFlat:{
        flexDirection:'row',
        backgroundColor:'#2F364E',
        alignItems:'center',
        justifyContent:'flex-start', 
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        borderRadius:10,
        borderWidth:15,
        borderColor:'#2F364E'
      },
      menuText:{
          fontSize:16,
          color:'white',
          marginLeft:100
        
      },
      detailText:{
        fontSize:16,
          color:'white',
      },
      count:{
        backgroundColor:'#FBAE2A',
        width:20,
        height:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:1
      },
      detailHolder:{
        backgroundColor:'#2F364E',
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        borderRadius:10,
        borderWidth:15,
        borderColor:'#2F364E'
      },
      total:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FBAE2A',
        width:120,
        height:40,        
        borderRadius:5,
        marginTop:50,
        
      },
});