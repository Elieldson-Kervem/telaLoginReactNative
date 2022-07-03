import React from "react"
import {View,StyleSheet,Text} from 'react-native';

function Pessoa(props){
    return(
      <View style={styles.areaFeed}>
          <Text style={styles.personInfo}>
            {props.data.nome}
         </Text>
         <Text style={styles.personInfo}>
            {props.data.idade}
         </Text>
         <Text style={styles.personInfo}>
            {props.data.email}
         </Text>
      </View>
    )
  }
  const styles=({
    areaFeed:{
        backgroundColor:'#000',
        justifyContent:'center',
        marginTop:20,
        height:200,
        textAlign:'center'
      },
      personInfo:{
        textAlign:'center',
             color:'#fff',
             fontSize:20
      }
  })
  export default Pessoa