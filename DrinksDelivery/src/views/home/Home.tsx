// screens/HomeScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import LogoSection from '../../components/LogoSection';
import LoginForm from '../../components/LoginForm';
import BackgroundImage from '../../components/BackgroundImage';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <BackgroundImage />
      <LogoSection />
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
