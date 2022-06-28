import {Dimensions, StyleSheet} from 'react-native';
import theme from '../../constants/theme';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        width: height > 600  ? 200 : 150,
        height: height > 600 ? 40 : 30,
    },
    text: {
        fontSize: height > 600 ? theme.fontSize.medium : theme.fontSize.small,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});