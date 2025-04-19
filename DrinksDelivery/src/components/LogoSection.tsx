// components/LogoSection.tsx
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const LogoSection = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logoImg}
        source={require('../../assets/logo.png')}
      />
      <Text style={styles.logoText}>Drinks Now</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '15%',
  },
  logoImg: {
    width: 350,
    height: 200,
    borderRadius: 30,
  },
  logoText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default LogoSection;
