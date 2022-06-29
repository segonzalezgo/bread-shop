import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonicIcons from "@expo/vector-icons/Ionicons";
import MainNavigator from "./main";
import CartNavigator from "./cart";
import OrdersNavigator from "./orders";
import theme from '../constants/theme';

const BottomTabs = createBottomTabNavigator();

const LabelBottomTab = (focused, label) => (
  <Text
    style={{
      color: focused ? theme.colors.primary : theme.colors.secondary,
      fontFamily: focused ? "open-sans-bold" : "open-sans",
    }}
  >
    {label}
  </Text>
);

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTabs.Screen
        name="ShopTab"
        component={MainNavigator}
        options={{
          tabBarLabel: ({ focused }) => LabelBottomTab(focused, "Shop"),
          tabBarIcon: ({ focused }) => (
            <IonicIcons
              name={focused ? "home" : "home-outline"}
              size={20}
              color={focused ? theme.colors.primary : theme.colors.secondary}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarLabel: ({ focused }) => LabelBottomTab(focused, "Cart"),
          tabBarIcon: ({ focused }) => (
            <IonicIcons
              name={focused ? "cart" : "cart-outline"}
              size={20}
              color={focused ? theme.colors.primary : theme.colors.secondary}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarLabel: ({ focused }) => LabelBottomTab(focused, "Orders"),
          tabBarIcon: ({ focused }) => (
            <IonicIcons
              name={focused ? "file-tray-full" : "file-tray-outline"}
              size={20}
              color={focused ? theme.colors.primary : theme.colors.secondary}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default TabNavigator;
