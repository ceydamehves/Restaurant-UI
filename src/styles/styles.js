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
});