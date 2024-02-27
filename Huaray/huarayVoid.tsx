import { nanhailogin } from '../API/Login';
import { NavigationProp } from "@react-navigation/native";
import {Alert} from 'react-native';
interface User {
    response: string;
    message: string;
    error_id:string;
    error_msg:string;
    // 其他需要的属性
  }
const huarayVoid = (navigation:NavigationProp<any>) =>{
    const handlePressA = () => {navigation.navigate('PageWeb', { title: '華瑞管控',webtype:1,isVisiable:true})}; 
    const handlePressB = () => {navigation.navigate('PageWeb', { title: '華瑞打卡',webtype:2,isVisiable:true })}; 
    const handlePressC = () => {navigation.navigate('PageWeb', { title: '華瑞官網',webtype:3,isVisiable:true })}; 


    
        return {
            handlePressA,
            handlePressB,
            handlePressC,
        };
};

export default huarayVoid;




