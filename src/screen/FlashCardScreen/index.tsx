import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import Tts from 'react-native-tts';

const FlashCardScreen = () => {
  const [ttsStatus, setTtsStatus] = useState('initializing');
  useEffect(() => {
    Tts.setDefaultLanguage('en-US');
    Tts.setDefaultVoice('com.apple.ttsbundle.Lekha-compact');
    Tts.getInitStatus().then(() => {
      Tts.speak('Hello, world!');
    });
  }, []);
  // console.log(ttsStatus, 'ttsStatus');
  const speak = () => {
    Tts.speak('Hello, how are you?');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>React Native TTS Example</Text>
      <Button title="Speak" onPress={speak} />
    </View>
  );
};

export default FlashCardScreen;
