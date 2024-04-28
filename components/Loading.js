import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { Colors } from '../constants/colors';
import { useTheme } from '../contexts/theme-context';

const Loading = ({ text }) => {
  const { isDarkMode } = useTheme();
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.loadingContainer,
          {
            backgroundColor: isDarkMode ? Colors.bgDark : Colors.bgLight,
            borderColor: Colors.primary,
          },
        ]}
      >
        <ActivityIndicator size="large" color={Colors.primary} />
        {text && (
          <Text
            style={[
              styles.loadingText,
              {
                color: isDarkMode ? Colors.textDark : Colors.textLight,
              },
            ]}
          >
            {text}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.09)',
    zIndex: 10,
  },
  loadingContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  loadingText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default Loading;
