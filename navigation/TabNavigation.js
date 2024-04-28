import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../contexts/theme-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Colors } from "../constants/colors";
import SettingsScreen from "../screens/SettingsScreen";
import Discover from "../screens/Discover";
import MyFeed from "../screens/MyFeed";
import CategoryNewsScreen from "../screens/CategoryNewsScreen";
const Tab = createMaterialTopTabNavigator();
const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("Settings");
  const { isDarkMode } = useTheme();
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribeFocus = navigation.addListener("tabPress", (e) => {
      // Get the name of the pressed tab
      const tabName = e.target?.options?.title || "";
      setActiveTab(tabName);
    });
    return unsubscribeFocus;
  }, [navigation]);

  console.log("Active Tab:", activeTab);
  const DummyComponent = () => null; // Dummy component
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabStyle: { width: 120 },
        tabBarMaxWidth: 360,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: isDarkMode
          ? Colors.textDark
          : Colors.textLight,
        tabBarStyle: {
          backgroundColor: isDarkMode ? Colors.bgDark : Colors.bgLight,
        },

        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "bold",
          textTransform: "capitalize",
        },

        tabBarContentContainerStyle: {
          alignSelf: "center",
          alignItems: "center", // Center horizontally
          justifyContent: "center",

          zIndex: 1,
        },

        tabBarIndicatorStyle: {
          backgroundColor: Colors.primary,
          height: 5,
          borderRadius: 50,
          width: 40,
          left: 62,
          zIndex: 100,
        },
      }}
      s
      sceneContainerStyle={{
        flex: 1,
      }}
      initialLayout={{ width: window.width }}
    >
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={24} color={color} />
          ),
        }}
        listeners={{
          tabPress: () => setActiveTab("Settings"),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        listeners={{
          tabPress: () => setActiveTab("Discover"),
        }}
      />
      <Tab.Screen
        name="MyFeed"
        options={{
          tabBarLabel: "My Feed",
        }}
        component={MyFeed}
        listeners={{
          tabPress: () => setActiveTab("MyFeed"),
        }}
      />
      <Tab.Screen
        name="Education"
        component={CategoryNewsScreen}
        listeners={{
          tabPress: () => setActiveTab("MyFeed"),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
