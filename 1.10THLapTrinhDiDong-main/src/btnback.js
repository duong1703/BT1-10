import React from 'react';
import {Text, Button, View,TouchableOpacity,Image } from 'react-native';


export default function Btnback(props) {
    return (
//       <Button 
//       color={props.color}
//       title={props.Text}
// />
<View style={{margin:10}}>
<TouchableOpacity onPress={props.onPress} >  
<Image source={require('../img/BackMini.png')}></Image>
</TouchableOpacity></View>
    );
  }