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
const PageVoid = (navigation:NavigationProp<any>) =>{
    const handlePressA = () => {navigation.navigate('PageWeb', { title: '官方網站',webtype:1,isVisiable:true})}; 
    const handlePressB = () => {navigation.navigate('PageWeb', { title: '線上購物',webtype:2,isVisiable:true })}; 
    const handlePressC = () => {navigation.navigate('PageWeb', { title: '線上點餐',webtype:3,isVisiable:true })}; 
    const handlePressD = () => {navigation.navigate('PageWeb', { title: '會員中心',webtype:4,isVisiable:true })}; 
    const handlePressE = () => {navigation.navigate('PageWeb', { title: '線上打卡',webtype:5,isVisiable:true })}; 

    
        return {
            handlePressA,
            handlePressB,
            handlePressC,
            handlePressD,
            handlePressE
            
        };
};

export default PageVoid;




