import React, { memo } from 'react';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import { IconViewProps } from './interface';

function IconView(props: IconViewProps) {
    let {
        name = 'cached',
        size = 32,
        typeIcon = 'AntDesign',
        style,
        onPress,
        color
    } = props;

    const iconMap = {
        AntDesign: IconAntDesign,
        MaterialIcons: IconMaterialIcons,
        Ionicons: IconIonicons,
        Octicons: IconOcticons,
        FontAwesome5: IconFontAwesome5,
        Feather: IconFeather,
    };

    const Icon = iconMap[typeIcon] || IconAntDesign;

    if (!Icon) {
        console.error(`Invalid typeIcon: ${typeIcon}`);
        return null;
    }
    return <Icon name={name} size={size} style={style} onPress={onPress} color={color} />;
}

export default memo(IconView);;
