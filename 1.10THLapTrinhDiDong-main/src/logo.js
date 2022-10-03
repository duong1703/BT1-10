import React from 'react';
import {Image} from 'react-native'


export default function Logos() {
    return (
      <Image source={require("../img/HNG.png")  } style={{ width: 80, height: 80 }}></Image>  
    );
  }