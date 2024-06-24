import {SCREEN_WIDTH} from '@/global/constant';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    zIndex: 20,
  },

  headerText: {
    fontWeight: '700',
    lineHeight: 26,
    width: SCREEN_WIDTH - 124,
    textAlign: 'center',
    color: 'black',
  },

  headerText1: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 26,
    textAlign: 'center',
    color: 'black',
  },

  bgicon: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 42,
    width: 42,
  },
});
