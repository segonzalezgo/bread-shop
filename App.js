import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useFonts} from 'expo-font';

import theme from './src/constants/theme';
import Root from './src';

export default function APP() {
    const [loaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })

    if(!loaded) {
        return <ActivityIndicator size='large' color={theme.colors.primary} />;
    }

    return (<Root />)
}