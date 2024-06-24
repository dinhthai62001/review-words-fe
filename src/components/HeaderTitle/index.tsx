import IconView from '@/components/IconView';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface Props {
  title?: string;
  style?: any;
  showBack?: boolean;
  children?: React.ReactNode;
  color?: string;
  size?: number;
}
const HeaderTitle: React.FC<Props> = ({
  title,
  style,
  showBack = true,
  children,
  color = 'black',
  size = 16,
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.header,
        {justifyContent: showBack ? undefined : 'center'},
      ]}>
      {showBack && (
        <View style={[styles.bgicon, style]}>
          <IconView
            typeIcon="MaterialIcons"
            name="arrow-back-ios-new"
            size={25}
            color={'black'}
            onPress={() => navigation.goBack()}
          />
        </View>
      )}
      <Text
        style={[
          showBack
            ? [styles.headerText, {color: color, fontSize: size}]
            : styles.headerText1,
        ]}>
        {title}
      </Text>
      {children}
    </View>
  );
};
export default HeaderTitle;
