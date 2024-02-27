import React , { useState } from 'react';
import type {PropsWithChildren} from 'react';
import { NativeModules  } from 'react-native';
const { VersionModule } = NativeModules;
import CutsomButton from './NanhaiLoginView';
import LoginVoid  from './NanhaiLoginVoid';
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
      source={require('../pic/bg1.jpg')}
      style={[fullstyles.fullScreenImage]} />
       <View style={[body.block]}>
       <Image
      source={require('../pic/logo1.png')}
      style={[styles.foregroundLayer]}></Image>
         </View>
        
         <View style={[body.block1]}>
          
      <Text style={[styles.title]}>登入</Text>
      </View>
    

      <View style={[body.block3]}>
      <Image source={require('../pic/vectoruser.png')} style={styles.image} />
      <TextInput placeholder="帳號" placeholderTextColor="#BDBDBD" style={[styles.input]}  onChangeText={handleInputChange} value={actext}/>
      </View>
        
      
   
      <View style={[body.block4]}>
      <Image source={require('../pic/vectorpwd2.png')} style={styles.image} />

      <TextInput placeholder="密碼" placeholderTextColor="#BDBDBD" style={[styles.input1]}  onChangeText={handleInputpwChange} value={pwtext}/>
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
       
        alignItems: 'center', // 水平居中
        marginTop:62,
        zIndex: 1, 
     },
     block1:{
      alignItems: 'center', // 水平居中

      marginTop:60,
  
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
  width:260,
  height:50,
  backgroundColor: '#FFFFFF', // 可选背景色
  flexDirection: 'row',
  alignItems: 'center', // 水平居中
  borderWidth:1,
  borderColor:'gray',
  borderRadius:5,
  marginLeft:75,
  marginTop:25,
  zIndex: 1, 
},
block4:{
  width:260,
  height:50,
  backgroundColor: '#FFFFFF', // 可选背景色
  flexDirection: 'row',
  alignItems: 'center', // 水平居中
  borderWidth:1,
  borderColor:'gray',
  borderRadius:5,
  marginLeft:75,
  marginTop:25,
  zIndex: 1, 

},
block5:{
  alignItems: 'center', // 水平居中
  width:260,
  height:50,
  marginLeft:75,
  marginTop:25,
  zIndex: 1, 

},
  });
  const styles = StyleSheet.create({
 
    image: {

      width:17,
      height:21,
      marginLeft:10,
      backgroundColor: '#FFFFFF', // 可选背景色

   
    },
      input: {
        width:260,
        height:50,
        borderRadius: 5,
        paddingLeft:10,      
        flex:1 
        
      },
      input1: {
        backgroundColor: '#FFFFFF', // 可选背景色
        borderRadius: 5,
        paddingLeft:10,      
        flex:1 
      },
    title: {
       
        fontSize: 20, 
        fontWeight: 'bold',
     
        alignItems: 'center', // 水平居
        color: '#FFFFFF', // 可选背景色
      },
    foregroundLayer: {
    
        padding: 10,
        width:230,
        height:78,
        resizeMode: 'contain', // 调整图片大小以完整显示
        flexDirection: 'column', // 或 'row'
        justifyContent: 'center',
        alignItems: 'center',
      },
  });
  
  export default App;
  