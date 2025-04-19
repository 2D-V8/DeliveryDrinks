import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

export const AppLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 100,
  },
});
