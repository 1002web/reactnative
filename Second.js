import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react'

const Second = (props) => {

  const [content, setContent] = useState({});
  const [list, setList] = useState('');
function handleChange(text) {setContent(text)} 
const send = () => {setList(content)} 
  return (
      <>
    <View style={styles.first}>
      <Text>Second</Text>
    <TextInput placeholder='Votre texte' onChangeText={handleChange}/>
      <Button title="Valider" onPress={send}/>      
      <Text>{list}</Text>
      </View>
    <View>

    </View>
    </>
  )
}

const styles = StyleSheet.create({
  first: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  second: {
    flex: 2,
  },
  trois: {
    flex: 3
  }
 })

export default Second;


