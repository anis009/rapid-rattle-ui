import {
  Dimensions,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { createSubstringWithWords, timeAgo } from '../utils/news';
import { useTheme } from '../contexts/theme-context';
import { IMG_URL } from '../constants/baseUrl';
import { Colors } from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import ImageModal from './ImageModal';

const NewsCard = ({ item }) => {
  const { isDarkMode } = useTheme();
  const [refreshing, setRefreshing] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [visible, setIsVisible] = useState(false);

  navigation = useNavigation();

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

  const pressHandler = (url) => {
    setImageUrl(url);
    setIsVisible(true);
  };

  return (
    <ScrollView style={styles.card}>
      <TouchableOpacity onPress={() => pressHandler(IMG_URL + item.image_hd)}>
        <Image
          source={{ uri: IMG_URL + item.image_hd }}
          style={{
            width: Dimensions.get('screen').width * 0.98,
            height: 250,
            objectFit: 'fill',
            borderRadius: 20,
            alignSelf: 'center',
          }}
        />
      </TouchableOpacity>

      <Text
        numberOfLines={2}
        ellipsizeMode="tail"
        style={[
          styles.title,
          { color: isDarkMode ? Colors.textDark : Colors.textLight },
        ]}
      >
        {item.title}
      </Text>
      <Text
        numberOfLines={10}
        ellipsizeMode="tail"
        style={[
          styles.content,
          { color: isDarkMode ? Colors.textDark : Colors.textLight },
        ]}
      >
        {createSubstringWithWords(item.content, 50)}
      </Text>
      <View style={[styles.writeContainer]}>
        <Text
          style={[
            {
              color: isDarkMode ? Colors.textDark : Colors.textLight,
              fontWeight: 'bold',
              fontSize: 12,
            },
          ]}
        >
          Summary By:{' '}
          {item.user
            ? item?.user?.displayName
              ? item?.user?.displayName
              : item?.user?.userName
            : 'Unknown'}{' '}
          /
        </Text>
        <Text
          style={[
            {
              color: Colors.primary,
              fontWeight: 'bold',
            },
          ]}
        >
          {timeAgo(item.createdAt)}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => readMoreHandler(item?.source_url)}
        style={{
          width: '100%',
          height: Dimensions.get('screen').height * 0.05,
          backgroundColor: Colors.primary,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          alignSelf: 'flex-start',
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: Colors.textLight,
            fontWeight: 'bold',
            textTransform: 'capitalize',
          }}
        >
          Read more at {item?.source_name}
        </Text>
      </TouchableOpacity>
      <ImageModal
        onClose={() => setIsVisible(false)}
        imageUrl={imageUrl}
        isVisible={visible}
      />
    </ScrollView>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
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
