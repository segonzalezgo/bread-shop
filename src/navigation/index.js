import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import TabNavigator from './tab';

const AppNavigator = () => {
    return (
        <SafeAreaView   SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default AppNavigator;