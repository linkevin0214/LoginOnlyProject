import React , { useState } from 'react';
import type {PropsWithChildren} from 'react';
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
  Modal
} from 'react-native';
import { WebView } from 'react-native-webview';
import WebViewModal from '../WebView/WebViewModal';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import {Card,Title,Paragraph, Avatar} from 'react-native-paper';
import { fontConfig } from 'react-native-paper/lib/typescript/styles/fonts';
import PageVoid from './PageVoid';
type SectionProps = PropsWithChildren<{
    title: string;
  }>;

  function App({ route,navigation }: any): JSX.Element {
  
    const [text, setText] = useState('');
    const {ismember}=route.params;
   
    const isDarkMode = useColorScheme() === 'dark';

    const fullstyles = StyleSheet.create({
        fullScreenImage: {
          flex: 1, 
          position: 'absolute', // 使用绝对定位
          width:   config.FULL_SCREEN_WIDTH,
          //height: config.FULL_SCREEN_HEIGHT, 
        
        },
      });
      // const [modalVisibleweb, setModalVisibleweb] = useState(false);
      // const [modalVisibleorder, setModalVisibleorder] = useState(false);
      // const [modalVisiblemember, setModalVisiblemember] = useState(false);
      // const [modalVisibleshop, setModalVisibleshop] = useState(false);
      // const [modalVisiblecheck, setModalVisiblecheck] = useState(false);
      const { handlePressA } = PageVoid(navigation);
      const { handlePressB } = PageVoid(navigation);
      const { handlePressC } = PageVoid(navigation);
      const { handlePressD } = PageVoid(navigation);
      const { handlePressE } = PageVoid(navigation);

    return (
     
      <SafeAreaView style={{ flex: 1 }}>
        {/* <KeyboardAvoidingView
        style={[
          body.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}
      behavior={Platform.OS === "ios" ? "padding" : "position"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 10}> */}
        <Image
        source={require('../pic/bg1.jpg')}
        style={[fullstyles.fullScreenImage]} />
         <View style={[body.block]}>
            <Image
                source={require('../pic/logo1.png')}
                style={[styles.foregroundLayer]}></Image>
         </View>
        
         <View>
          <Text style={[styles.maintitle]}>服務項目</Text>
          </View>
          <TouchableOpacity style={[body.cardLayout]} onPress={()=>handlePressA()}>
              <View style={styles.imageback2}>
              <Image
                    source={require('../pic/01.png')}
                    style={[styles.image]}
              />
              </View>
                  <Text style={[styles.title]}>官方網站</Text>
            </TouchableOpacity>
      
        <TouchableOpacity style={[body.cardLayout]} onPress={()=>handlePressB()}>
             <View style={styles.imageback}>
                    <Image
                    source={require('../pic/04.png')}
                    style={styles.image}
                    />
              </View>
                  
                  <Text style={[styles.title]}>線上購物</Text>
                </TouchableOpacity>
            
       
        
        <TouchableOpacity style={[body.cardLayout]} onPress={()=>handlePressC()}>
                  <View style={styles.imageback3}>
                    <Image
                    source={require('../pic/05.png')}
                    style={styles.image}
                    />
                  </View>
                    <Text style={[styles.title]}>線上點餐</Text>
                  
            
                </TouchableOpacity>
           
      
       
          
            <TouchableOpacity style={[body.cardLayout]} onPress={()=>handlePressD()}>
                  <View style={styles.imageback4}>
                        <Image
                        source={require('../pic/03.png')}
                        style={styles.image}
                        />
                  </View>
                  
                    <Text style={[styles.title]}>會員中心</Text>
                  </TouchableOpacity>
          
        
      {
      
        ismember ==='success' && (
          <>
  
       
        <TouchableOpacity style={[body.cardLayout]}  onPress={()=>handlePressE()}>
                  <View style={styles.imageback5}>
                    <Image
                    source={require('../pic/02.png')}
                    style={styles.image}
                    />
                    </View>
                    <Text style={[styles.title]}>員工打卡</Text>
                </TouchableOpacity>
                </>
        )
       
      }
      
      {/* </KeyboardAvoidingView> */}
      </SafeAreaView>
      );
  }
  const body = StyleSheet.create({
    container: {
      flex: 1,
     
    },
    block:{
      alignItems: 'center', // 水平居中
      marginTop:36,
      zIndex: 1, 
   },
   block1:{
    alignItems: 'center', // 水平居中
    marginTop:55,
    zIndex: 1, 
 },
     cardLayout: {
       width:280,
       height:70,
       borderRadius: 50,
       backgroundColor: 'rgba(255, 255, 255, 0.8)',
       marginLeft:75,
       marginTop:10,
       flexDirection: 'row', //
       zIndex: 1, 
      },
     
  });
  const styles = StyleSheet.create({
    imageback:{
      width:40,
      height:40,
      marginLeft:30,
      marginTop:15,
      borderRadius:100,
      backgroundColor:'rgba(229, 144, 126, 1)',
     
    },
    imageback2:{
      width:40,
      height:40,
      marginLeft:30,
      marginTop:15,
      borderRadius:100,
      backgroundColor:'rgba(114, 144, 42, 1)',
     
    },
    imageback3:{
      width:40,
      height:40,
      marginLeft:30,
      marginTop:15,
      borderRadius:100,
      backgroundColor:'rgba(132, 201, 84, 1)',
     
    },
    imageback4:{
      width:40,
      height:40,
      marginLeft:30,
      marginTop:15,
      borderRadius:100,
      backgroundColor:'rgba(94, 143, 244, 1)',
     
    },
    imageback5:{
      width:40,
      height:40,
      marginLeft:30,
      marginTop:15,
      borderRadius:100,
      backgroundColor:'rgba(224, 166, 118, 1)',
     
    },
    image: {
        width:20,
        height:20,
        marginLeft:10,
        marginTop:10,
        
      },
   
      marginRight: {
        marginRight: 20,  // 為左邊的卡片添加右邊距
      
      },
      maintitle:{
        fontSize: 20, 
        width:86,
        height:29,
        fontWeight: 'bold',
        color: 'rgba(255, 255, 255, 1)', // 可选背景色
        marginLeft:175,
        marginTop:25,
      },
      title: {
        color: 'rgba(71, 96, 66, 1)', // 可选背景色
        marginLeft:15,
        marginTop:25,
        fontWeight: 'bold',
        fontSize: 18, 
      },
      text: {
        color: 'white',
        fontSize: 36,
      },
 
      foregroundLayer: {
        width:230,
        height:78,
        marginLeft:25,
       
      },
  });
  
  export default App;
  