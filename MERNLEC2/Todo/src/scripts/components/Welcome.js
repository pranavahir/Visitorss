import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import bgImage from '../../../images/todo.jpg'
import { Actions } from 'react-native-router-flux';
export default function Welcome(){
  const onClick = () =>{
      Actions.Home();
  }
  return(
    <ImageBackground source={bgImage} style={styles.bg}>
    <View style={styles.Header}>
      <Text style={styles.Htext}>Welcome to Todo's!</Text>
      <View>
        <TouchableOpacity style={styles.Btn} onPress={onClick}>
          <Text style={styles.BtnText}>List Todo's</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  Header:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  Htext:{
    fontSize:25,
    fontWeight:'bold',
    color:'#000080'
  },
  Btn:{
    height:50,
    width:130,
    borderRadius:50,
    borderWidth:2,
    backgroundColor:'#add8e6',
    borderColor:'black',
    padding:12
  },
  BtnText:{
    fontSize:20,
    fontWeight:'bold'
  },
  bg:{
    height:null,
    width:null,
    flex:1
  }
})