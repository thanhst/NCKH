import React from "react";
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  maxScreen: {
    height: '100%',
    width: '100%',
  },
  Color_White: {
    color: 'white',
  },
  Color_Black: {
    color: 'black',
  },
  Flex_Center: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center'
  },
  Button: {
    width: '40%', 
    borderRadius: 100, 
    borderWidth: 1,
    backgroundColor: 'blue', 
    height: 50, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  FS_0:{
    fontSize:18
  },
  FS_1:{
    fontSize:20
  },
  Flex_Between:{
    justifyContent:'space-between'
  },
  Gap_0:{
    gap:20
  },
  Gap_1:{
    gap:40
  },
  Flex_row:{
    display:'flex',
    flexDirection:"row",
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  text_Bold:{
    fontWeight:'bold'
  }
});

export default styles