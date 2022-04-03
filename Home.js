import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import AppButton from './AppButton';

const Home = (props) => {
  return (
    <View style={styles.screenContainer}>
    <AppButton icon="sign-in" title="Login with password" backgroundColor="#777"/>
    <AppButton icon="facebook" title="Login with Facebook" backgroundColor="#3b5998"/>
    <AppButton icon="github" title="Login with GitHub" backgroundColor="blue"/>
  </View>
);
};

const styles = StyleSheet.create({
screenContainer: {
  flex: 1,
  justifyContent: "center",
  padding: 80,
  backgroundColor: "white",
},
appButton: {
  padding: 12,
},
appButtonText: {
  fontSize: 17,
},
appButtonContainer: {
  paddingVertical: 10,
  paddingHorizontal: 12,
},
});


export default Home