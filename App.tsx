import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Nanhai/Login'; // 主页组件
import huaraylogin from './Huaray/huaraylogin';//華瑞登入
import page1 from './Nanhai/page1'; // 南海
import LoadingIndicator from './LoadingIndicator'; // 南海
import huaraypage from './Huaray/huaraypage';//公司功能
import { NativeModules,NativeEventEmitter,Platform } from 'react-native';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';


const Stack = createNativeStackNavigator();

function App() {
  const [response, setResponse] = useState<string | null>(null);
  const [result, setResponse1] = useState<string | null>(null);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setResponse('1'); // 或 '2' 来测试不同的路由
  //   }, 1000);
  // }, []);

  if(Platform.OS==='ios'){
    // return (
    //   <NavigationContainer>
    //     <Stack.Navigator initialRouteName="Homea">
    //       <Stack.Screen name="Homea" component={huaraylogin} options={{ headerShown: false }} />
    //       <Stack.Screen name="Details" component={huaraypage} options={{ headerShown: false }}  />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // );
  // 使用接口声明模块
 

 
  // 調用原生模塊的方法
  // CustomModule.passValueToReactNative('Received from iOS:')
  // .then((result:string)=>{
  //  console.log("Response:", result, "Type:", typeof result);
  // }).catch((error :Error)=> {
  //  console.error(error)
  // })

  // 添加事件监听



    const { CustomEventEmitter } = NativeModules;
    const eventEmitter = new NativeEventEmitter(CustomEventEmitter);
    console.log(CustomEventEmitter.VersionType);
    if(CustomEventEmitter.VersionType===1){
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Homea">
            <Stack.Screen name="Homea" component={huaraylogin} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={huaraypage} options={{ headerShown: false }}  />
          </Stack.Navigator>
        </NavigationContainer>
      );
      
    } 
    if(CustomEventEmitter.VersionType===2){
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Homea">
            <Stack.Screen name="Homea" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={page1} options={{ headerShown: false }}  />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
   
    if (response === null) {
      return <LoadingIndicator />; // 您可以创建一个简单的加载中指示器组件
    }

  }else if(Platform.OS==='android'){
    useEffect(() => {
      
      const { VersionModule } = NativeModules;
      VersionModule.getBuildConfigValue("Test Message", (response: string) => {
       
        setResponse(response);
      });
  
    }, []);
    console.log("Response:", response, "Type:", typeof response);
      if(response==="1"){
        return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Homea">
            <Stack.Screen name="Homea" component={huaraylogin} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={huaraypage} options={{ headerShown: false }}  />
          </Stack.Navigator>
        </NavigationContainer>
      );
      }
      if(response==="2"){
        return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Homea">
            <Stack.Screen name="Homea" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={page1} options={{ headerShown: false }}  />
          </Stack.Navigator>
        </NavigationContainer>
      );
      }
      if (response === null) {
        return <LoadingIndicator />; // 您可以创建一个简单的加载中指示器组件
      }
  }
}

export default App;
