import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header } from '../../components/Header';
import { AppLogo } from '../../components/AppLogo';
import DateTimePicker from '@react-native-community/datetimepicker';
import useViewModel from './ViewModel';

export const RegisterScreen = () => {

  const { name, birthdate, document, email, password, ConfirmPassword, onChange } = useViewModel();


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
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <View style={styles.form}>
        <Text style={styles.title}>Cuéntanos de ti</Text>

        <Text style={styles.label}>Nombre Completo</Text>
        <TextInput style={styles.input} placeholder="Nombre Completo" 
        keyboardType="default"  
        value={name} 
        onChangeText={text => onChange('name', text) 
        }/>

    <Text style={styles.label}>Fecha de nacimiento</Text>
    <TouchableOpacity style={styles.input} onPress={abrirCalendario}>
      <Text style={styles.inputText}>
        {birthdate ? birthdate : 'DD/MM/AAAA'}
      </Text>
    </TouchableOpacity>
    {mostrarCalendario && (
      <DateTimePicker
        value={new Date()} // Lo puedes cambiar a la fecha que desees como valor inicial
        mode="date"
        display="default"
        onChange={(_, selectedDate) => {
          const selectedDateStr = selectedDate ? selectedDate.toLocaleDateString() : '';
          onChange('birthdate', selectedDateStr); // Esto actualiza el valor en el ViewModel
          setFecha(selectedDate || new Date()); // Actualiza la variable local de la fecha
          setMostrarCalendario(false); // Cierra el calendario
        }}
        maximumDate={new Date()} // Limitar la fecha a hoy
      />
    )}
        <Text style={styles.label}>Documento de identidad</Text>
        <Text style={styles.subLabel}>Por razones legales necesitamos validar tu identidad.</Text>
        <TextInput
        style={styles.input}
        placeholder="Ingresa tu documento"
        keyboardType="numeric"
        onChangeText={(text) => {
       const soloNumeros = text.replace(/[^0-9]/g, ''); // Asegura que solo se ingresen números
       onChange('document', soloNumeros);  // Actualiza el valor del documento en el ViewModel
     }}
        value={document}  // Enlaza el valor del documento con el ViewModel
      />

        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput style={styles.input} placeholder="Ej: nombre@gmail.com" 
        keyboardType="email-address" 
        value={email} 
        onChangeText= { text  => onChange('email', text) }/>

        <Text style={styles.label}>Contraseña</Text>
        <TextInput style={styles.input} placeholder="Ingresa una contraseña" 
        secureTextEntry={true} 
        value={password} 
        onChangeText= { text  => onChange('password', text) }/>

        <Text style={styles.label}>Confirmar Contraseña</Text>
        <TextInput style={styles.input} 
        placeholder="Confirmar contraseña" 
        secureTextEntry={true} 
        value={ConfirmPassword} 
        onChangeText= { text  => onChange('ConfirmPassword', text) }/>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
      <AppLogo />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
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
