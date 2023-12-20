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
          height: config.FULL_SCREEN_HEIGHT*1.1, 
        
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
        source={require('../pic/bg.jpg')}
        style={[fullstyles.fullScreenImage]} />
         <View style={[body.block]}>
            <Image
                source={require('../pic/logo.png')}
                style={[styles.foregroundLayer]}></Image>
         </View>
        
            <View style={[body.block1]}>
            <Card style={[body.content]}>
            <TouchableOpacity onPress={()=>handlePressA()}>
                <View style={[body.cardLayout]}>
                        <Image
                        source={require('../pic/01.png')}
                        style={styles.image}
                        />
                        <View >
                        <Text style={[styles.title]}>官方網站</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                </Card>
            </View>
        
         
        {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleweb}
        onRequestClose={() => {
          setModalVisibleweb(false);
        }}
      >
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: config.FULL_SCREEN_WIDTH, height: '50%', backgroundColor: 'white'}}>
              <WebView source={{ uri: config.TEST_NANHAI_MAINURL }} />
          </View>
        </View>
      </Modal> */}
        <View style={[body.block1]}>
        <Card style={[body.content]}>
        <TouchableOpacity onPress={()=>handlePressB()}>
            <View style={[body.cardLayout]}>
                    <Image
                    source={require('../pic/04.png')}
                    style={styles.image}
                    />
                    <View >
                    <Text style={[styles.title]}>線上購物</Text>
                    </View>
                </View>
                </TouchableOpacity>
            </Card>
        </View>
        {/* <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisibleshop}
        onRequestClose={() => {
          setModalVisibleshop(false);
        }}
      >
        <WebView source={{ uri: config.TEST_NANHAI_SHOP }} /> */}
      {/* </Modal> */}
        <View style={[body.block1]}>
        <Card style={[body.content]}>
        <TouchableOpacity onPress={()=>handlePressC()}>
            <View style={[body.cardLayout]}>
                    <Image
                    source={require('../pic/05.png')}
                    style={styles.image}
                    />
                    <View >
                    <Text style={[styles.title]}>線上點餐</Text>
                    </View>
                </View>
                </TouchableOpacity>
            </Card>
        </View>
        {/* <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisibleorder}
        onRequestClose={() => {
          setModalVisibleorder(false);
        }}
      >
        <WebView source={{ uri: config.TEST_NANHAI_ORDER }} />
      </Modal> */}
        <View style={[body.block1]}>
            <Card style={[body.content]}>
            <TouchableOpacity onPress={()=>handlePressD()}>
            <View style={[body.cardLayout]}>
                    <Image
                    source={require('../pic/03.png')}
                    style={styles.image}
                    />
                    <View >
                    <Text style={[styles.title]}>會員中心</Text>
                    </View>
                </View>
                </TouchableOpacity>
            </Card>
        </View>
        {/* <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisiblemember}
        onRequestClose={() => {
          setModalVisiblemember(false);
        }}
      >
        <WebView source={{ uri: config.TEST_NANHAI_MEMBER }} />
      </Modal> */}

      {
      
        ismember ==='success' && (
          <>
  <View style={[body.block1]}>
        <Card style={[body.content]}>
        <TouchableOpacity onPress={()=>handlePressE()}>
                <View style={[body.cardLayout]}>
                    <Image
                    source={require('../pic/02.png')}
                    style={styles.image}
                    />
                    <View >
                    <Text style={[styles.title]}>員工打卡</Text>
                    </View>
                </View>
                </TouchableOpacity>
            </Card>
        </View>
        {/* <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisiblecheck}
        onRequestClose={() => {
          setModalVisiblecheck(false);
        }}
      >
        <WebView source={{ uri: config.TEST_NANHAI_URL}} />
      </Modal> */}
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
      width:  config.FULL_SCREEN_WIDTH,
      height: config.FULL_SCREEN_HEIGHT,
    },
    block:{
      justifyContent: 'center', // 垂直居中
      alignItems: 'center', // 水平居中
      width:  config.FULL_SCREEN_WIDTH,
      height: config.FULL_SCREEN_HEIGHT*0.15,
      zIndex: 1, 
   },
   block1:{
  
    justifyContent: 'center', // 垂直居中
    alignItems: 'center', // 水平居中
    width:  config.FULL_SCREEN_WIDTH,
    height: config.FULL_SCREEN_HEIGHT*0.16,
   
    zIndex: 1, 
 
 },
     cardLayout: {
       
        justifyContent: 'center', // 垂直居中
        alignItems: 'center', // 水平居中
        width:  config.FULL_SCREEN_WIDTH,
        height: config.FULL_SCREEN_HEIGHT*0.15,
        borderRadius: 50,
        backgroundColor: '#DADEE2',
        zIndex: 1, 
        flexDirection: 'row',
      
      },
      content: {
        borderRadius: 50,
      },
  });
  const styles = StyleSheet.create({
    image: {
        justifyContent: 'center', // 垂直居中
        alignItems: 'center', // 水平居中
        width:50,
        height:70,
      },
   
      marginRight: {
        marginRight: 10,  // 為左邊的卡片添加右邊距
      },
      title: {
        height:config.FULL_SCREEN_HEIGHT*0.08,
        fontSize:  config.FULL_SCREEN_WIDTH*0.09, 
        fontWeight: 'bold',
        justifyContent: 'center', // 垂直居中
        alignItems: 'center', // 水平居
        color: '#000', // 可选背景色
      },
      text: {
        color: 'white',
        fontSize: 36,
      },
 
      foregroundLayer: {
        width:  config.FULL_SCREEN_WIDTH*0.5,
        padding: 10,
        height: config.FULL_SCREEN_HEIGHT*0.5,
        resizeMode: 'contain', // 调整图片大小以完整显示
        flexDirection: 'column', // 或 'row'
        justifyContent: 'center',
        alignItems: 'center',
       
      },
  });
  
  export default App;
  