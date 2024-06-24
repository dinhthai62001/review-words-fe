import { GestureResponderEvent, StyleProp, TextStyle } from 'react-native';

export interface IconViewProps {
    name?: string;
    size?: number;
    typeIcon?:
        | 'AntDesign'
        | 'MaterialIcons'
        | 'Ionicons'
        | 'Octicons'
        | 'FontAwesome5'
        | 'Feather';
    style?: StyleProp<TextStyle>;
    onPress?: (event: GestureResponderEvent) => void;
    color?: string;
}
