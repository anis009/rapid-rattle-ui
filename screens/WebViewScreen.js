import WebView from 'react-native-webview';
import { StyleSheet, View, Animated, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../constants/colors';
import CustomHeader from '../components/CustomWebHeader';
import Loading from '../components/Loading';

const WebViewScreen = ({ route }) => {
  const { url } = route.params;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleLoadEnd = () => {
    setLoading(false);
  };

  const handleClose = () => {
    navigation.goBack();
  };

  const handleLoadStart = () => {
    setLoading(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader onClose={handleClose} />
      {loading && <Loading />}
      <WebView
        source={{ uri: url }}
        onLoad={handleLoadEnd}
        onLoadStart={handleLoadStart}
      />
    </View>
  );
};

export default WebViewScreen;

const styles = StyleSheet.create({
  loadingIndicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent', // Set background color to transparent to overlay the WebView
    justifyContent: 'center',
    alignItems: 'center',
  },
});
