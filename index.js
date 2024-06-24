/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';
global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreLogs(['Remote debugger']);
LogBox.ignoreAllLogs();
AppRegistry.registerComponent(appName, () => App);
