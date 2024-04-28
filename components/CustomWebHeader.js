const { TouchableOpacity, View, Image } = require('react-native');
const { Colors } = require('../constants/colors');
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/theme-context';

const CustomHeader = ({ onClose }) => {
  const { isDarkMode } = useTheme();
  return (
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
        backgroundColor: isDarkMode ? Colors.bgDark : Colors.bgLight,
      }}
    >
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          backgroundColor: isDarkMode ? Colors.bgDark : Colors.bgLight,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
        }}
        onPress={onClose}
      >
        <Ionicons
          name="close-sharp"
          size={30}
          style={{ fontWeight: 'bold' }}
          color="red"
        />
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
        }}
      >
        <Image
          source={
            isDarkMode
              ? require('../assets/logo/light-logo.png')
              : require('../assets/logo/black-logo.png')
          }
          style={{
            width: 200,
            height: 50,
            alignSelf: 'center',
          }}
        />
      </View>
    </View>
  );
};

export default CustomHeader;
