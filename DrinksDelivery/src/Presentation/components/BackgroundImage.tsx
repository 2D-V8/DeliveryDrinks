// components/BackgroundImage.tsx
import React from 'react';
import { Image, StyleSheet } from 'react-native';

const BackgroundImage = () => {
  return <Image style={styles.imageBackground} />;
};

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
    top: '1%',
  },
});

export default BackgroundImage;
