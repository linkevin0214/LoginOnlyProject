import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {useEffect} from 'react';
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
  Modal,
} from 'react-native';
import {WebView} from 'react-native-webview';
import WebViewModal from '../WebView/WebViewModal';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import {Card, Title, Paragraph, Avatar} from 'react-native-paper';
import {fontConfig} from 'react-native-paper/lib/typescript/styles/fonts';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App({route, navigation}: any): JSX.Element {
  useEffect(() => {
    const {webtype, title, isVisiable} = route.params ?? {};
    const navTitle = title ?? `預設標題 - 類型 ${webtype ?? ''}`;
    console.log(navTitle);
    navigation.setOptions({title: navTitle});
  }, [route.params?.title, navigation]);

  const [text, setText] = useState('');
  const {webtype, title, isVisiable} = route.params ?? {};

  const isDarkMode = useColorScheme() === 'dark';

  const fullstyles = StyleSheet.create({
    fullScreenImage: {
      flex: 1,
      position: 'absolute', // 使用绝对定位
      width: config.FULL_SCREEN_WIDTH,
      height: config.FULL_SCREEN_HEIGHT * 1.1,
    },
  });
  const [modalVisiblework, setModalVisiblework] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleMain,setModalVisibleMain] = useState(false);
  useEffect(() => {
    if (webtype === 1 && isVisiable) {
      setModalVisiblework(true);
    }
    if (webtype === 2 && isVisiable) {
      setModalVisible(true);
    } 
    if (webtype === 3 && isVisiable) {
      setModalVisibleMain(true);
    }

  }, [isVisiable]);
  return (
    <SafeAreaView style={{flex: 1}}>
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
        style={[fullstyles.fullScreenImage]}
      />

      {webtype === 1 && (
        <>
          <WebView source={{uri: config.HUARAY_CONTROL}} />
        </>
      )}
      {webtype === 4 && (
        <>
          <WebView source={{uri: config.TEST_NANHAI_SHOP}} />
        </>
      )}
      {webtype === 2 && (
        <>
          <WebView source={{uri: config.HUARAY_MAIN_MEMBER}} />
        </>
      )}
      {webtype === 3 && (
        <>
          <WebView source={{uri: config.HUARAY_MAIN}} />
        </>
      )}
      {webtype === 5 && (
        <>
          <WebView source={{uri: config.TEST_NANHAI_URL}} />
        </>
      )}

      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
}
const body = StyleSheet.create({
  container: {
    flex: 1,
    width: config.FULL_SCREEN_WIDTH,
    height: config.FULL_SCREEN_HEIGHT,
  },
  block: {
    justifyContent: 'center', // 垂直居中
    alignItems: 'center', // 水平居中
    width: config.FULL_SCREEN_WIDTH,
    height: config.FULL_SCREEN_HEIGHT * 0.15,
    zIndex: 1,
  },
  block1: {
    justifyContent: 'center', // 垂直居中
    alignItems: 'center', // 水平居中
    width: config.FULL_SCREEN_WIDTH,
    height: config.FULL_SCREEN_HEIGHT * 0.16,

    zIndex: 1,
  },
  cardLayout: {
    justifyContent: 'center', // 垂直居中
    alignItems: 'center', // 水平居中
    width: config.FULL_SCREEN_WIDTH,
    height: config.FULL_SCREEN_HEIGHT * 0.15,
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
    width: 50,
    height: 70,
  },

  marginRight: {
    marginRight: 10, // 為左邊的卡片添加右邊距
  },
  title: {
    height: config.FULL_SCREEN_HEIGHT * 0.08,
    fontSize: config.FULL_SCREEN_WIDTH * 0.09,
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
    width: config.FULL_SCREEN_WIDTH * 0.5,
    padding: 10,
    height: config.FULL_SCREEN_HEIGHT * 0.5,
    resizeMode: 'contain', // 调整图片大小以完整显示
    flexDirection: 'column', // 或 'row'
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
