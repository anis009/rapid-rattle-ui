import React, { useContext, useEffect, useState } from "react";
import { TabContext } from "../contexts/tab-context";
import { NewsServices } from "../services/newsServices";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Animated,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import PagerView from "react-native-pager-view";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList); // Wrap FlatList with Animated

const Discover = () => {
  const { setTabNumber } = useContext(TabContext);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // Track the current page for infinite scrolling
  const fullHeight = Dimensions.get("window").height; // Get screen height

  useEffect(() => {
    setTabNumber(2);
  }, []);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await NewsServices.getAllNews(page); // Pass page number
        setData((prevData) => [
          ...(prevData || []),
          ...(responseData?.data ?? []),
        ]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, [page]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  console.log("data~", data);

  return (
    <PagerView style={styles.pagerView} orientation="vertical" initialPage={0}>
      {data.map((item, index) => {
        return (
          <View key={index} style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.content}</Text>
          </View>
        );
      })}
    </PagerView>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: "100%", // Make card full width
    height: "100%", // Make card full height
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  pagerView: {
    flex: 1,
  },
});
