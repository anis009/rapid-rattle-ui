import React from 'react';
import {
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { Ionicons } from '@expo/vector-icons';

const ImageModal = ({ isVisible, imageUrl, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <ImageViewer
          imageUrls={[{ url: imageUrl }]}
          enableSwipeDown={true}
          onSwipeDown={onClose}
          renderIndicator={() => null} // Hide indicator
          saveToLocalByLongPress={false} // Disable long press to save
        />
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Ionicons name="close" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ImageModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 9999,
  },
});
