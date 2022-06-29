import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OrdersScreen } from "../screens/index";
import theme from '../constants/theme';

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
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
        name="Orders"
        component={OrdersScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
