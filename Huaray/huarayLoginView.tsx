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
        width:'50%',
        height:'50%',
        backgroundColor: '#476041',
        justifyContent: 'center', // 垂直居中
        alignItems: 'center', // 水平居中
        borderRadius: 25,
        fontSize: config.FULL_SCREEN_WIDTH*0.05, 
      },
      text: {
        color: 'white',
        fontSize: config.FULL_SCREEN_WIDTH*0.05, 
      },
    });
    export default CutsomButton;
