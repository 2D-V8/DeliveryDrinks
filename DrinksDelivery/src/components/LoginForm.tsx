// components/LoginForm.tsx
import React from 'react';
import {View, Text, TextInput, Button, ToastAndroid, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../App';


export const LoginForm = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.form}>
      <Text style={styles.formText}>INGRESAR</Text>
      <TextInput
        style={styles.formTextInput}
        placeholder="Correo Electrónico"
      />
      <TextInput
        style={styles.formTextInput}
        placeholder="Contraseña"
        secureTextEntry
      />
      <View style={{ marginTop: 30 }}>
        <Button
          title="INGRESAR"
          onPress={() => ToastAndroid.show('CLICK', ToastAndroid.LONG)}
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
  );
};

const styles = StyleSheet.create({
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

export default LoginForm;
