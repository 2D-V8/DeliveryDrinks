import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export const RegisterForm = () => {
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Cuentanos de ti</Text>

      <Text style={styles.label}>Nombre Completo</Text>
      <TextInput style={styles.input} placeholder="Nombre Completo" />

      <Text style={styles.label}>Fecha de nacimiento</Text>
      <TextInput style={styles.input} placeholder="DD/MM/AAAA" />

      <Text style={styles.label}>Documento de identidad</Text>
      <Text style={styles.subLabel}>Por razones legales necesitamos validar tu identidad.</Text>
      <TextInput style={styles.input} placeholder="XXXXXXXXXXX" />

      <Text style={styles.label}>Correo electronico</Text>
      <TextInput style={styles.input} placeholder="Ej: nombre@gmail.com" keyboardType="email-address" />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontWeight: '600',
    marginTop: 10,
  },
  subLabel: {
    fontSize: 12,
    color: 'gray',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});
