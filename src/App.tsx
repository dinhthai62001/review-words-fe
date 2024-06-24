import {Text, View} from 'react-native';
import React from 'react';
import Home from '@/screen/Home';
import Navigator from './routes';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Navigator/>
    </View>
  );
};
export default App;
