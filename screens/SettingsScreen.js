import {
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableOpacity,
  Button,
  Touchable,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { TabContext } from '../contexts/tab-context';
import { useTheme } from '../contexts/theme-context';
import { Colors } from '../constants/colors';
import { FontAwesome } from '@expo/vector-icons'; // Assuming you have FontAwesome installed
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import BottomSheet from '../components/BottomSheet';
import { AntDesign } from '@expo/vector-icons';
import { useLang } from '../contexts/language-context';
const SettingsScreen = () => {
  const { setTabNumber } = useContext(TabContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { lang } = useLang();
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  useEffect(() => {
    setTabNumber(1);
  }, []);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };
  const toggleSwitch = () => {
    setIsDarkMode((prev) => !prev);
  };

  console.log(lang);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode ? Colors.bgDark : Colors.bgLight,
        },
      ]}
    >
      {/* theme switch */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 8,
          paddingHorizontal: 10,
          height: 50,
          width: '100%',
          marginBottom: 10,
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center', // Center horizontally
            justifyContent: 'center', // Center horizontally
            zIndex: 1,
          }}
        >
          {isDarkMode ? (
            <MaterialIcons
              name="nightlight"
              style={[
                styles.icon,
                {
                  color: isDarkMode ? Colors.textDark : Colors.textLight,
                },
              ]}
              size={24}
              color="black"
            />
          ) : (
            <Entypo
              name="light-up"
              style={[
                styles.icon,
                {
                  color: isDarkMode ? Colors.textDark : Colors.textLight,
                },
              ]}
              size={24}
              color="black"
            />
          )}

          <Text
            style={[
              styles.text,
              {
                color: isDarkMode ? Colors.textDark : Colors.textLight,
              },
            ]}
          >
            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </Text>
        </View>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={isDarkMode}
        />
      </View>
      {/* theme switch */}

      {/* lang toggle */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 8,
          paddingHorizontal: 10,
          height: 50,
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={[
            styles.text,
            {
              color: isDarkMode ? Colors.textDark : Colors.textLight,
            },
          ]}
        >
          {lang === 'en' ? 'Ab' : 'কখ'}
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '30%',
            height: 50,
            paddingHorizontal: 10,
          }}
          onPress={toggleBottomSheet}
        >
          <Text
            style={[
              styles.text,
              {
                color: isDarkMode ? Colors.textDark : Colors.textLight,
              },
            ]}
          >
            {lang === 'en' ? 'English' : 'বাংলা'}
          </Text>
          <AntDesign
            style={[
              styles.icon,
              {
                color: isDarkMode ? Colors.textDark : Colors.textLight,
                fontSize: 18,
                marginLeft: 10,
              },
            ]}
            name="caretdown"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      {/* lang toggle */}

      <BottomSheet isVisible={bottomSheetVisible} onClose={toggleBottomSheet} />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },
});
