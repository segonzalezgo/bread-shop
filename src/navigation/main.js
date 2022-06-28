import {
    CategoriesScreen,
    HomeScreen,
    ProductDetailsScreen,
    ProductsScreen,
    StoreDetailsScreen,
    StoresScreen
} from '../screens/index';

import { Platform } from "react-native";
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from "../constants/theme";

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";

const MainNavigator = () => {
    return (
        <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
            headerStyle: {
                backgroundColor: isIOS ? theme.colors.secondary : theme.colors.primary,
            },
            headerTintColor: isIOS ? theme.colors.black : theme.colors.white,
            headerTitleStyle: {
                fontFamily: "open-sans-bold",
            },
        }}
        >
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='Categories'
                component={CategoriesScreen}
                options={({route}) => ({
                    title: 'Category Shop',
                })}
            />
            <Stack.Screen
                name='Products'
                component={ProductsScreen}
                options={({ route }) => ({
                    title: route.params.title,
                })}
            />
            <Stack.Screen
                name='ProductDetails'
                component={ProductDetailsScreen}
                options={({ route }) => ({
                    title: route.params.name,
                })}
            />
            <Stack.Screen
                name='Stores'
                component={StoresScreen}
            />
            <Stack.Screen
                name='StoreDetails'
                component={StoreDetailsScreen}
                options={({ route }) => ({
                    title: route.params.name,
                })}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator;