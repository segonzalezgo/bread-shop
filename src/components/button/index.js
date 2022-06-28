import React from 'react';
import { Pressable} from 'react-native';
import {styles} from './styles';
import theme from '../../constants/theme'
import DefaultText from '../text';

const Button = ({color, title, onPress, style}) => {
    const customStyle = {
        backgroundColor: color,
        ...style
    }

    return (
        <Pressable style={[styles.button, customStyle]} onPress={onPress}>
            <DefaultText style={styles.text}>{title}</DefaultText>
        </Pressable>
    )
}

Button.defaultProps = {
    color: theme.colors.primary,
    customStyle: {}
}

export default Button;