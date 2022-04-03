import { View, Text, Button, TextInput, StyleSheet, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';
import uuid from 'react-native-uuid';

const Second = (props) => {

  
  const [content, setContent] = useState('');
  const [list, setList] = useState([]);
function handleChange(text) {setContent(text)} 
const send = () => {setList((currentCourseGoals) => [...currentCourseGoals, { text: content, key: uuid.v4()},])} 

  return (
    
      <View style={styles.first}>  
      <Text style={styles.main}>Ma todo liste</Text>
    <View style={styles.second}>
    
    <TextInput placeholder='Votre tâche ?' onChangeText={handleChange} style={styles.textInput}/>
    <View style={styles.button}> 
      <Button title="Valider" onPress={send}/>     
      </View>
      
      </View>
  <View style={styles.trois}>    
  <FlatList data={list} renderItem={itemData => {
    itemData.index
    return(
      <View style={styles.textGoal}>
        <Text style={styles.textColor}>{itemData.item.text}</Text>
      </View>
    )
  }} 
    keyExtractor={(item) => {
      return item.id
    }}
  />
      </View>   
    <View>

    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    fontSize: 22,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '700'
  },
  first: {
     flex: 1,
     backgroundColor: 'white',
     padding: 25,
  },  
    second: {
    flex: 1,   
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  textInput: {
    justifyContent: 'center',
    width: '70%',
    marginVertical: 30,
    padding: 8,
    marginRight: 2,
    backgroundColor: '#ececec'
  },
  button: {
    alignContent: 'center',
    justifyContent: 'center',
  },

  trois: {
    paddingTop: 20,
    borderTopColor: '#C8C8C8',
    borderTopWidth: 1,
    flex: 5
  },
  textGoal: {
 margin: 8,
 padding: 8,
 borderRadius: 6,
 backgroundColor: '#5e0acc',
  },
  textColor: {
    color: 'white',
    paddingHorizontal: 10
  }
 })

export default Second;


