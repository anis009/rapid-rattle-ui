import React, { useContext, useEffect, useRef, useState } from 'react';
import { TabContext } from '../contexts/tab-context';
import { NewsServices } from '../services/newsServices';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Animated,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
  ScrollView,
  RefreshControl,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import { IMG_URL } from '../constants/baseUrl';
import { useTheme } from '../contexts/theme-context';
import { Colors } from '../constants/colors';
import { createSubstringWithWords, timeAgo } from '../utils/news';
import Loading from '../components/Loading';
import NewsCard from '../components/NewsCard';

const MyFeed = ({ navigation }) => {
  const { setTabNumber } = useContext(TabContext);
  const [data, setData] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const { isDarkMode } = useTheme();
  const scrollViewRef = useRef(null);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  useEffect(() => {
    setTabNumber(3);
  }, []);

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

  useEffect(() => {
    fetchDataFromApi();
  }, [page]);

  if (loading) {
    return <Loading text="News fetching..." />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }
  const readMoreHandler = (url) => {
    // console.log('url~~', url);
    if (url && url.includes('http')) {
      navigation.navigate('Web', {
        url: url,
      });
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    console.log('anis molla');
    // Simulate fetching new data
    setTimeout(() => {
      // setData([...data, new Date().toISOString()]);
      setRefreshing(false);
    }, 2000);
  };

  // Scroll listener to detect scroll direction
  const handleScroll = (event) => {
    // const currentOffset = event.nativeEvent.contentOffset.y;
    // setIsScrollingUp(
    //   currentOffset > 0 && currentOffset < event.nativeEvent.contentSize.height,
    // );

    // console.log(currentOffset);

    console.log('anis molla1');
  };

  const onPageSelected = () => {
    console.log('onPageSelected');
  };

  // console.log("data~", data);
  console.log('isDarkMode', isDarkMode);

  return (
    <PagerView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#9Bd35A', '#689F38']}
          progressBackgroundColor="#ffffff"
        />
      }
      onPointerUp={onPageSelected}
      ref={scrollViewRef}
      style={[
        styles.pagerView,
        {
          backgroundColor: isDarkMode ? Colors.bgDark : Colors.bgLight,
        },
      ]}
      orientation="vertical"
      initialPage={0}
    >
      {data.map((item, index) => {
        return <NewsCard item={item} key={index} />;
      })}
    </PagerView>
  );
};

export default MyFeed;

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    marginTop: 10,
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'left',
    width: '100%',
    textTransform: 'capitalize',
    letterSpacing: 0.5,
    paddingHorizontal: 10,
  },
  content: {
    fontSize: 18,
    fontWeight: '300',
    marginVertical: 10,
    textAlign: 'left',
    width: '100%',
    lineHeight: 30,
    letterSpacing: 0.5,
    paddingHorizontal: 10,
  },
  writeContainer: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 10,
  },
});
