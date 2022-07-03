import React,{useState} from "react";
import { Text,StyleSheet,View,FlatList } from "react-native"; 


function Funcionario(){
    const[info,changeInfo]=useState([
        {id:'1',nome:'kervem',prof:'programador javascript'}
    ])
    return(
        <View style={styles.display}>
        <FlatList style={styles.list} data={info} renderItem={({item})=> <Func data={item}></Func>}></FlatList>
    
    </View>
    )
}


const styles=StyleSheet.create({
    display:{
        marginTop:50,
        flex:1,
        flexDirection:'column',
        
        textAlign:'center',
        backgroundColor:'black'
    },
    text:{
        color:'#fff',
        fontSize:30

    },
    list:{
        backgroundColor:'#0F00',
        
        marginTop:20,
        height:120,
        textAlign:'center'
    }
})
function Func(params) {
    return(
        <View style={styles.list}>
            <Text style={styles.text}>{`Nome: ${params.data.nome}`}</Text>
            <Text style={styles.text}>{`Cargo: ${params.data.prof}`}</Text>
        </View>
    )
}

export default Funcionario