/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import { NativeModules  } from 'react-native';

console.log('ResponseC:',NativeModules);

AppRegistry.registerComponent(appName, () => App);
