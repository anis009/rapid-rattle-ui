import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useLang } from '../contexts/language-context';

const BottomSheet = ({ isVisible, onClose }) => {
  const { toggleLang, lang } = useLang();
  const langPressHandler = (value) => {
    toggleLang(value);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        onPress={onClose}
        activeOpacity={1}
      >
        <View style={styles.modalContent}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 40,
              paddingHorizontal: 20,
            }}
            onPress={() => langPressHandler('en')}
          >
            {lang === 'en' && (
              <AntDesign name="check" size={24} color="black" />
            )}

            <Text
              style={{
                textAlign: 'right',
                width: lang !== 'en' ? '100%' : 'auto',
              }}
            >
              English
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: 20,
              paddingHorizontal: 20,
            }}
            onPress={() => langPressHandler('bn')}
          >
            {lang === 'bn' && (
              <AntDesign name="check" size={24} color="black" />
            )}
            <Text
              style={{
                textAlign: 'right',
                width: lang !== 'bn' ? '100%' : 'auto',
              }}
            >
              বাংলা
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  closeButtonText: {
    color: '#007AFF', // blue color
  },
});
