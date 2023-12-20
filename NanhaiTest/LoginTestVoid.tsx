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
const LoginVoid = (navigation:NavigationProp<any>,actext: string, pwtext: string) =>{
    const handlePress = () => {
        navigation.navigate('Details',{ismember:'error'});
        }; 
        const handlePressByMember = async () =>{
            try{
            const result = await nanhailogin(actext,pwtext,'rNZgn1pDPnIKbXKurQkDwrvSt');
            console.log('帳號:', actext);
            console.log('密碼:', pwtext);
            sucessFromLogin(result); 
            console.log('result:', result);
            }catch(error){
                console.error('Login API 调用失败:', error);
            }
        };
        const sucessFromLogin = (result:User) => {
            if (result.response === 'success') {
              console.log('登录成功:', result.message);
              navigation.navigate('Details',{ismember:result.response });
              // 这里可以执行登录成功后的操作
            } else {
              console.log('登录失败:', result.message);
              Alert.alert("提示訊息",  result.error_msg,[{
                text:"取消",
                onPress:()=>console.log("取消"),
                style:"cancel"
              },
               {
                text:"確定",
                onPress:()=>console.log("確定"),
               }
              ],{
                  cancelable:false
              });
              // 这里可以执行登录失败的操作
            }
          };
        return {
            handlePress,
            handlePressByMember
        };
};

export default LoginVoid;




