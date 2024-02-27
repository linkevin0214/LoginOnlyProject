import React,{useState} from 'react';
import { TouchableOpacity,Text,StyleSheet,TextStyle,ViewStyle } from 'react-native';
import config from '../Config/config';

interface CustomButtonProps{
    title:string;
    onPress:() => void;
    style?:ViewStyle;
    textStyle?:TextStyle;
}
const CutsomButton:React.FC<CustomButtonProps> =({title,onPress,style,textStyle})=>{
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button,style]}>
            <Text style={[styles.text,textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
  
  button: {
    width:260,
    height:50,
    backgroundColor: 'rgba(71, 96, 66, 1)',
    alignItems: 'center', // 水平居中
    borderRadius: 5,
  },
  text: {
    width:34,
    height:23,
    marginTop:14,
    color: 'white',
    fontSize: 16, 
  },
    });
    export default CutsomButton;
