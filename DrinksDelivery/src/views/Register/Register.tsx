import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Header } from '../../components/Header';
import { RegisterForm } from '../../components/RegisterForm';
import { AppLogo } from '../../components/AppLogo';

export const RegisterScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <RegisterForm />
      <AppLogo />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
});
