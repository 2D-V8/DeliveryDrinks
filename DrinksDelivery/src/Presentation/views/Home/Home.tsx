import React, { useState } from 'react';
import { View, Text, TextInput, Button, ToastAndroid, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import LogoSection from '../../components/LogoSection';
import BackgroundImage from '../../components/BackgroundImage';
import useViewModel from './ViewModel'


export const HomeScreen = () => {

  const { email, password, onChange } = useViewModel();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <BackgroundImage />
      <LogoSection />

      <View style={styles.form}>
        <Text style={styles.formText}>INGRESAR</Text>
        <TextInput
          style={styles.formTextInput}
          placeholder="Correo Electrónico"
          keyboardType="email-address"
          value={email}
          onChangeText={text => onChange('email', text) }
        />
        <TextInput
          style={styles.formTextInput}
          placeholder="Contraseña"
          secureTextEntry={true}
          value={password}
          onChangeText={text => onChange('password', text)}
        />
        <View style={{ marginTop: 30 }}>
          <Button
            title="INGRESAR"
            onPress={() => {
              console.log('Email: ' + email);
              console.log('Password: ' + password);
              ToastAndroid.show('¡Intentando iniciar sesión!', ToastAndroid.SHORT);
            }}
            color="purple"
          />
        </View>

        <View style={styles.formRegister}>
          <Text>¿No tienes cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.formRegisterText}>Regístrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  form: {
    width: '100%',
    height: '40%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 30,
  },
  formText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  formTextInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 15,
  },
  formRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  formRegisterText: {
    fontStyle: 'italic',
    color: 'purple',
    borderBottomWidth: 1,
    borderBottomColor: 'purple',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
