import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { TabContext } from "../contexts/tab-context";

const HomeScreen = () => {
  const { setTabNumber } = useContext(TabContext);
  useEffect(() => {
    setTabNumber(2);
  }, []);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
