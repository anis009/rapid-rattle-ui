import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemeProvider, useTheme } from "../contexts/theme-context";
import TabProvider from "../contexts/tab-context";
import RootNavigation from "../navigation/RootNavigation";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../constants/colors";

const WrapperContainer = () => {
  const { isDarkMode } = useTheme();
  return (
    <TabProvider>
      <StatusBar
        backgroundColor={isDarkMode ? Colors.bgDark : Colors.bgLight}
        style={isDarkMode ? "light" : "dark"}
      />
      <View style={{ marginTop: 15 }}></View>
      <RootNavigation />
    </TabProvider>
  );
};

export default WrapperContainer;

const styles = StyleSheet.create({});
