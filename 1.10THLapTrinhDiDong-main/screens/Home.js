import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from 'react-native';
import Btns from '../src/btn';

export default function HomeScreen({ navigation }) {
    const logOut = async () => {
        await AsyncStorage.removeItem("curUser");
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });
      };
    return (
        <View style={styles.container}>
          {/* <View style={styles.btnback} ><Btnback color='#81d3e3' Text='Sign Ip' onPress={() => {navigation.goBack() }}></Btnback></View> */}
          <Text>Home</Text>
          <Btns color="#8e64a1" Text='Log Out' onPress={logOut}></Btns>

        </View>
      )
    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '',
        alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'column',
      },
      titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: 'blue',
        margin: 20
    
      },
      viewtop: {
        margin: 50
    
      },
      viewtop1: {
        margin: 10
      },
      btnback: {
        alignSelf: 'flex-start',
        marginTop: 20
      },
    });

