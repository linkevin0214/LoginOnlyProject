import React , { useState } from 'react';
import type {PropsWithChildren} from 'react';
import { NativeModules  } from 'react-native';
const { VersionModule } = NativeModules;
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { login } from './API/Login';
interface User {
    response: string;
    message: string;
    error_id:string;
    // 其他需要的属性
  }
type SectionProps = PropsWithChildren<{
    title: string;
  }>;
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const screen = Dimensions.get('screen');
  const screenWidtha = screen.width;
  const screenHeightb = screen.height;
  function App({ navigation }: any): JSX.Element {
    const [actext, setInputValue] = useState('');
    const [pwtext, setInputpwValue] = useState('');
    const handleInputChange = (text:string) => {
        setInputValue(text); // 更新状态
      };

      const handleInputpwChange = (text:string) => {
        setInputpwValue(text); // 更新状态
      };
    const [data, setData] = useState(null);
    const handlePress = () => {
      navigation.navigate('Details',{ismember:'false'});
      };
      const loginPress=async ()=>{
          // 使用
          
        const result = await login(actext,pwtext,'rNZgn1pDPnIKbXKurQkDwrvSt');
        setData(result);
        //驗證成功及登入.
        console.log("Doing something with ",result);
        console.log('Submitted Value:', actext); // 在这里使用 inputValue
       
        sucessFromLogin(result);
      };
      const sucessFromLogin = (result:User) => {
        if (result.response === 'success') {
          console.log('登录成功:', result.message);
          navigation.navigate('Details',{ismember:result.response });
          // 这里可以执行登录成功后的操作
        } else {
          console.log('登录失败:', result.message);
          // 这里可以执行登录失败的操作
        }
      };
      
    const isDarkMode = useColorScheme() === 'dark';
  
   
    const fullstyles = StyleSheet.create({
        fullScreenImage: {
          flex: 1, 
          width: screenWidth, 
          height: screenHeightb*1.1, 
          position:'absolute'
        
        },
      });
      
    return (
      <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView 
      
      style={[
        body.container,
      {
       
        // Try setting `flexDirection` to `"row"`.
        flexDirection: 'column',
        
      },
    ]}   
    behavior={Platform.OS === "ios" ? "padding" : "position"}
    keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 10}>
 
 <Image
      source={require('./pic/huaraybg.png')}
      style={[fullstyles.fullScreenImage]} />
       <View style={[body.block]}>
       <Image
      source={require('./pic/loadinglogo.png')}
      style={[styles.foregroundLayer]}></Image>
         </View>
         <View style={[body.block1]}>
          
      <Text style={[styles.title]}>登入</Text>
      <Text style={[styles.title]}>LOGIN</Text>
      </View>
      <View style={[body.block2]}>
      <TouchableOpacity style={[styles.button]} onPress={handlePress}>
        <Text style={styles.text}>一般登入</Text>
      </TouchableOpacity>
      </View>
     
      <View style={[body.block3]}>
      <TextInput placeholder="員工帳號" style={[styles.input]}  onChangeText={handleInputChange}   value={actext} />


      </View>
     
   
      <View style={[body.block4]}>
      <TextInput placeholder="員工密碼" style={[styles.input1]}  onChangeText={handleInputpwChange} value={pwtext}/>
      </View>
    
     
      <View style={[body.block5]}>
      <TouchableOpacity style={[styles.button1]}  onPress={loginPress}>
        <Text style={styles.text}>登入</Text>
      </TouchableOpacity>
      </View>
 


     
      </KeyboardAvoidingView >
     </SafeAreaView>
    );
  }
  const body = StyleSheet.create({
    container: {
      flex: 1,
      width: screenWidtha,
      height: screenHeightb,
    },
     block:{
        justifyContent: 'center', // 垂直居中
        alignItems: 'center', // 水平居中
        width: screenWidtha,
        height: screenHeightb*0.1,
        zIndex: 1, 
     },
     block1:{
      justifyContent: 'center', // 垂直居中
      alignItems: 'center', // 水平居中
      width: screenWidtha,
      height: screenHeight*0.2,
     
      zIndex: 1, 
   
   },
   block2:{
    justifyContent: 'center', // 垂直居中
    alignItems: 'center', // 水平居中
    width: screenWidtha,
    height: screenHeight*0.2,
   
    zIndex: 1, 
 
 },
 block3:{
  justifyContent: 'center', // 垂直居中
  alignItems: 'center', // 水平居中
  width: screenWidtha,
  height: screenHeight*0.1,
 
  zIndex: 1, 

},
block4:{
  justifyContent: 'center', // 垂直居中
  alignItems: 'center', // 水平居中
  width: screenWidtha,
  height: screenHeight*0.15,
 
  zIndex: 1, 

},
block5:{
  justifyContent: 'center', // 垂直居中
  alignItems: 'center', // 水平居中
  width: screenWidtha,
  height: screenHeight*0.2,
 
  zIndex: 1, 

},
  });
  const styles = StyleSheet.create({
    button: {
        width:'50%',
        height:'50%',
        justifyContent: 'center', // 垂直居中
        alignItems: 'center', // 水平居中
        backgroundColor: '#476041',
        borderRadius: 50,
        fontSize: screenWidth*0.05, 
    
      },
      button1: {
        width:'50%',
        height:'50%',
        backgroundColor: '#476041',
        justifyContent: 'center', // 垂直居中
        alignItems: 'center', // 水平居中
        borderRadius: 25,
        fontSize: screenWidth*0.05, 
      },
      text: {
        color: 'white',
        fontSize: screenWidth*0.05, 
      },
      input: {
        width:'50%',
        height:screenHeight*0.08,
        fontSize: screenWidth*0.05, 
        justifyContent: 'center', // 垂直居中
        alignItems: 'center', // 水平居中
        textAlign: 'center', // 这会让 placeholder 文本和用户输入的文本都居中
        backgroundColor: '#EFF4FA', // 可选背景色
        padding: 10,
        borderRadius: 50,
       
      },
      input1: {
        width:'50%',
        height:screenHeight*0.08,
        justifyContent: 'center', // 垂直居中
        alignItems: 'center', // 水平居中
        fontSize: screenWidth*0.05, // 这也会影响 placeholder 文本的字体大小
        backgroundColor: '#EFF4FA', // 可选背景色
    
        borderRadius: 50,
        textAlign: 'center', // 这会让 placeholder 文本和用户输入的文本都居中
       
      },
    title: {
        height:screenHeight*0.08,
        fontSize: screenWidth*0.09, 
        fontWeight: 'bold',
        justifyContent: 'center', // 垂直居中
        alignItems: 'center', // 水平居
        color: '#476041', // 可选背景色
      },
    foregroundLayer: {
        width: screenWidth*0.5,
        padding: 10,
        height:screenHeight*0.5,
        resizeMode: 'contain', // 调整图片大小以完整显示
        flexDirection: 'column', // 或 'row'
        justifyContent: 'center',
        alignItems: 'center',
      },
  });
  
  export default App;
  