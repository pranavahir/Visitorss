/*
import axios from 'axios';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
export default function Add(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onUpload = () => {
    const data = {
      title,
      description,
    };

    axios
      .post(`http://192.168.1.19:7000/add`, data)
      .then((res) => {
        if (res.data) {
          Actions.Home();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.Container}>
      <View style={styles.banner}>
        <Text>Add</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={title}
          onChangeText={(text) => setTitle(text)}
          style={styles.inputBox}
          placeholder="title"
        />
        <TextInput
          value={description}
          onChangeText={(text) => setDescription(text)}
          style={styles.inputBox}
          placeholder="description"
        />
      </View>
      <View>
        <TouchableOpacity style={styles.btn} onPress={onUpload}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    height: 20,
    alignItems: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    padding: 10,
  },
  inputBox: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: 350,
  },
  btn: {
    width: 100,
    height: 30,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
import React, {useState} from 'react';
import {View, TextInput, StyleSheet } from 'react-native'
export default function Add(){
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  return(
    <View style={styles.IP}>
     <View style={style.banner}>
    <Text>Add Todo's</Text>
       </View> 
    <TextInput
    style={styles.IPtext}
    value={title}
    onChangeText={(Text) => setTitle(Text) }
    placeholder="Enter Title"
    />
    <TextInput
    style={styles.IPtext}
    value={description}
    onChangeText={(Text) => setDescription(Text)}
    placeholder="Enter Description"/>
    
    <View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

style = StyleSheet.create({
    IP:{
      flex:1,
      alignItems:'center',
    },
    banner:

})