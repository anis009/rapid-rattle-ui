import { useEffect, useState } from 'react';
import TabNavigation from './TabNavigation';
import { useTheme } from '../contexts/theme-context';
import { useNavigation } from '@react-navigation/native';
import WebViewScreen from '../screens/WebViewScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  const [activeTab, setActiveTab] = useState('Settings');
  const { isDarkMode } = useTheme();
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('tabPress', (e) => {
      // Get the name of the pressed tab
      const tabName = e.target?.options?.title || '';
      setActiveTab(tabName);
    });
    return unsubscribeFocus;
  }, [navigation]);

  console.log('Active Tab:', activeTab);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarAnimation: 'slide',
        gestureEnabled: true,
        gestureDirection: 'horizontal', // Set gesture direction to horizontal
        animation: 'slide_from_right',
      }}
      initialRouteName="Tabs"
    >
      <Stack.Screen
        name="Tabs"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Web"
        component={WebViewScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
