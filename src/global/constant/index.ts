import {Dimensions, Platform} from 'react-native';

export const DO_EXERCISE_TIMES = 3; //Số lần làm bài tối đa

export const SCREEN_WIDTH = Dimensions.get('window').width;

export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const isANDROID = Platform.OS === 'android';

export const isIOS = Platform.OS === 'ios';
