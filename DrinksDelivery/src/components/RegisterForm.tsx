import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export const RegisterForm = () => {
  const [documento, setDocumento] = useState('');
  const [fecha, setFecha] = useState<Date | undefined>();
  const [mostrarCalendario, setMostrarCalendario] = useState(false);

  const abrirCalendario = () => setMostrarCalendario(true);

  const onChangeFecha = (_: any, selectedDate?: Date) => {
    setMostrarCalendario(false);
    if (selectedDate) {
      setFecha(selectedDate);
    }
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Cuéntanos de ti</Text>

      <Text style={styles.label}>Nombre Completo</Text>
      <TextInput style={styles.input} placeholder="Nombre Completo" keyboardType="default" />

      <Text style={styles.label}>Fecha de nacimiento</Text>
      <TouchableOpacity style={styles.input} onPress={abrirCalendario}>
        <Text style={styles.inputText}>
          {fecha ? `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}` : 'DD/MM/AAAA'}
        </Text>
      </TouchableOpacity>
      {mostrarCalendario && (
        <DateTimePicker
          value={fecha || new Date()}
          mode="date"
          display="default"
          onChange={onChangeFecha}
          maximumDate={new Date()}
        />
      )}

      <Text style={styles.label}>Documento de identidad</Text>
      <Text style={styles.subLabel}>Por razones legales necesitamos validar tu identidad.</Text>
      <TextInput
        style={styles.input}
        placeholder="XXXXXXXXXXX"
        keyboardType="numeric"
        onChangeText={(text) => {
          const soloNumeros = text.replace(/[^0-9]/g, '');
          setDocumento(soloNumeros);
        }}
        value={documento}
      />

      <Text style={styles.label}>Correo electrónico</Text>
      <TextInput style={styles.input} placeholder="Ej: nombre@gmail.com" keyboardType="email-address" />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput style={styles.input} placeholder="Ingresa una contraseña" secureTextEntry={true} />

      <Text style={styles.label}>Confirmar Contraseña</Text>
      <TextInput style={styles.input} placeholder="Confirmar contraseña" secureTextEntry={true} />

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
    justifyContent: 'center',
  },
  inputText: {
    fontSize: 16,
    color: '#333',
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
