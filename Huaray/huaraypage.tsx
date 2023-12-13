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
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Card,Title,Paragraph, Avatar} from 'react-native-paper';
type SectionProps = PropsWithChildren<{
    title: string;
  }>;


  function App({ route,navigation }: any): JSX.Element {
    const { ismember } = route.params;
    const [text, setText] = useState('');
    const handlePress = () => {
      navigation.navigate('Details');
      };
    const isDarkMode = useColorScheme() === 'dark';

    const fullstyles = StyleSheet.create({
        fullScreenImage: {
          flex: 1, 
          position: 'absolute', // 使用绝对定位
          width: config.FULL_SCREEN_WIDTH,
          height: config.FULL_SCREEN_HEIGHT*1.1, 
        
        },
      });
      const [modalVisiblework, setModalVisiblework] = useState(false);
      const [modalVisible, setModalVisible] = useState(false);
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
        source={require('../pic/huaraybg.png')}
        style={[fullstyles.fullScreenImage]} />
         <View style={[body.block]}>
            <Image
                source={require('../pic/loadinglogo.png')}
                style={[styles.foregroundLayer]}></Image>
         </View>
         
            <View style={[body.block1]}>
            <Card style={[body.content]}>
            <TouchableOpacity onPress={()=>setModalVisiblework(true)}>
                <View style={[body.cardLayout]}>
                        <Image
                        source={require('../pic/03.png')}
                        style={styles.image}
                        />
                        <View >
                        <Text style={[styles.title]}>員工管控</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                </Card>
            </View>
      
        <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisiblework}
        onRequestClose={() => {
            setModalVisiblework(false);
        }}
      >
        <WebView source={{ uri: 'https://work.huaray.com.tw/admin/index/index.php' }} />
      </Modal>
       
       
      {
ismember === 'success' && (
  <>
    <View style={[body.block1]}>
      <Card style={[body.content]}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={[body.cardLayout]}>
            <Image
              source={require('../pic/02.png')}
              style={styles.image}
            />
            <View>
              <Text style={[styles.title]}>員工打卡</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Card>
    </View>
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <WebView source={{ uri: 'https://checkin_test.huaray.com.tw/login.php' }} />
    </Modal>
    </>
  )
}
      </KeyboardAvoidingView>
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
        width:  config.FULL_SCREEN_WIDTH*0.9,
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
        width: config.FULL_SCREEN_WIDTH*0.2 ,
        height:config.FULL_SCREEN_HEIGHT*0.12,
        borderRadius: 25,

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
        height:config.FULL_SCREEN_HEIGHT*0.5,
        resizeMode: 'contain', // 调整图片大小以完整显示
        flexDirection: 'column', // 或 'row'
        justifyContent: 'center',
        alignItems: 'center',
       
      },
  });
  
  export default App;
  