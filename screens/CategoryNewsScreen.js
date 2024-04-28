import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { TabContext } from "../contexts/tab-context";

const CategoryNewsScreen = () => {
  const { setTabNumber } = useContext(TabContext);
  useEffect(() => {
    setTabNumber(4);
  }, []);
  return (
    <View>
      <Text>CategoryNewsScreen</Text>
    </View>
  );
};

export default CategoryNewsScreen;

const styles = StyleSheet.create({});
