import React , { useState } from 'react';
import type {PropsWithChildren} from 'react';
import { NativeModules  } from 'react-native';
const { VersionModule } = NativeModules;
import CutsomButton from './LoginTestView';
import LoginVoid  from './LoginTestVoid';
import config from '../Config/config';
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
  Platform,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


type SectionProps = PropsWithChildren<{
    title: string;
  }>;

  function App({ navigation }: any): JSX.Element {
    const [text, setText] = useState('');
    const [actext, setInputValue] = useState('');
    const [pwtext, setInputpwValue] = useState('');
    const handleInputChange = (text:string) => {
        setInputValue(text); // 更新状态
      };

      const handleInputpwChange = (text:string) => {
        setInputpwValue(text); // 更新状态
      };
    const { handlePress } = LoginVoid(navigation,'','');
    const {handlePressByMember} =  LoginVoid(navigation,actext,pwtext);
    const isDarkMode = useColorScheme() === 'dark';

    const fullstyles = StyleSheet.create({
        fullScreenImage: {
          flex: 1, 
          width:config.FULL_SCREEN_WIDTH, 
          height: config.FULL_SCREEN_HEIGHT*1.1, 
          position:'absolute'
        
        },
      });
      
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView 
      
      style={[
        body.container,
      {
       
        // Try setting `flexDirection` to `"row"`.
        flexDirection: 'column',
        
      },
    ]}   

    
    behavior={Platform.OS === "ios" ? "position" : "position"}
    keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 10}>
 
 <Image
      source={require('../pic/bg.jpg')}
      style={[fullstyles.fullScreenImage]} />
       <View style={[body.block]}>
       <Image
      source={require('../pic/logo.png')}
      style={[styles.foregroundLayer]}></Image>
         </View>
        
         <View style={[body.block1]}>
          
      <Text style={[styles.title]}>登入</Text>
      <Text style={[styles.title]}>LOGIN</Text>
      </View>
      <View style={[body.block2]}>
      <CutsomButton title="一般登入" onPress={handlePress}/>
      </View>

      <View style={[body.block3]}>
      <TextInput placeholder="員工帳號" placeholderTextColor="#D0D0D0" style={[styles.input]}  onChangeText={handleInputChange} value={actext}/>
      </View>
        
      
   
      <View style={[body.block4]}>
      <TextInput placeholder="員工密碼" placeholderTextColor="#D0D0D0" style={[styles.input1]}  onChangeText={handleInputpwChange} value={pwtext}/>
      </View>
 
      <View style={[body.block5]}>
      <CutsomButton title="登入" onPress={handlePressByMember}/>
      </View>
 


     
      </KeyboardAvoidingView >
     </SafeAreaView>
     </TouchableWithoutFeedback>
    );
  }
  const body = StyleSheet.create({
    container: {
      flex: 1,
      width: config.FULL_SCREEN_WIDTH,
      height: config.FULL_SCREEN_HEIGHT,
    },
     block:{
        justifyContent: 'center', // 垂直居中
        alignItems: 'center', // 水平居中
        width: config.FULL_SCREEN_WIDTH,
        height: config.FULL_SCREEN_HEIGHT*0.1,
        zIndex: 1, 
     },
     block1:{
      justifyContent: 'center', // 垂直居中
      alignItems: 'center', // 水平居中
      width: config.FULL_SCREEN_WIDTH,
      height: config.FULL_SCREEN_HEIGHT*0.2,
     
      zIndex: 1, 
   
   },
   block2:{
    justifyContent: 'center', // 垂直居中
    alignItems: 'center', // 水平居中
    width: config.FULL_SCREEN_WIDTH,
    height: config.FULL_SCREEN_HEIGHT*0.2,
   
    zIndex: 1, 
 
 },
 block3:{
  justifyContent: 'center', // 垂直居中
  alignItems: 'center', // 水平居中
  width: config.FULL_SCREEN_WIDTH,
  height: config.FULL_SCREEN_HEIGHT*0.1,
 
  zIndex: 1, 

},
block4:{
  justifyContent: 'center', // 垂直居中
  alignItems: 'center', // 水平居中
  width: config.FULL_SCREEN_WIDTH,
  height: config.FULL_SCREEN_HEIGHT*0.1,
 
  zIndex: 1, 

},
block5:{
  justifyContent: 'center', // 垂直居中
  alignItems: 'center', // 水平居中
  width: config.FULL_SCREEN_WIDTH,
  height: config.FULL_SCREEN_HEIGHT*0.2,
 
  zIndex: 1, 

},
  });
  const styles = StyleSheet.create({
 
    
      input: {
        width:'50%',
        height:config.FULL_SCREEN_HEIGHT*0.08,
        fontSize: config.FULL_SCREEN_WIDTH*0.05,
        alignItems: 'center', // 水平居中
        textAlign: 'center', // 这会让 placeholder 文本和用户输入的文本都居中
        backgroundColor: '#EFF4FA', // 可选背景色
        borderRadius: 50,
        padding:10,       
      },
      input1: {
        width:'50%',
        height:config.FULL_SCREEN_HEIGHT*0.08,
        justifyContent: 'center', // 垂直居中
        alignItems: 'center', // 水平居中
        fontSize: config.FULL_SCREEN_WIDTH*0.05, // 这也会影响 placeholder 文本的字体大小
        backgroundColor: '#EFF4FA', // 可选背景色
    
        borderRadius: 50,
        textAlign: 'center', // 这会让 placeholder 文本和用户输入的文本都居中
       
      },
    title: {
        height:config.FULL_SCREEN_HEIGHT*0.08,
        fontSize: config.FULL_SCREEN_WIDTH*0.09, 
        fontWeight: 'bold',
        justifyContent: 'center', // 垂直居中
        alignItems: 'center', // 水平居
        color: '#476041', // 可选背景色
      },
    foregroundLayer: {
        width: config.FULL_SCREEN_WIDTH*0.5,
        padding: 10,
        height:config.FULL_SCREEN_HEIGHT*0.5,
        resizeMode: 'contain', // 调整图片大小以完整显示
        flexDirection: 'column', // 或 'row'
        justifyContent: 'center',
        alignItems: 'center',
      },
  });
  
  export default App;
  