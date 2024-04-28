import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { TabContext } from "../contexts/tab-context";

const SettingsScreen = () => {
  const { setTabNumber } = useContext(TabContext);
  useEffect(() => {
    setTabNumber(1);
  }, []);

  return (
    <View>
      <Text>SettingsScreen</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
