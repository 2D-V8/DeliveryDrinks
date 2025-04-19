
import React from 'react'
import { Button, Image, Text, TextInput, ToastAndroid, View, StyleSheet } from 'react-native';
export const HomeScreen =  () => {

    return (
        <View style={styles.container}>
         <Image
          //source = {require("./assets/image.png")}
            style={styles.imageBackground}
           />
           <View style = {styles.logoContainer}>
            <Image style  = {styles.logoImg}
                  source = {require("../../../assets/logo.png")}
            />
            <Text style = {styles.logoText}> Drinks Now</Text>
    
           </View>
    
    
        
          <View style ={styles.form}>
            <Text style =  {styles.formText}>INGRESAR</Text>
            <TextInput
            style = {styles.formTextInput}
              placeholder="Correo Electronico"
         
            />
    
           <TextInput
            style = {styles.formTextInput}
              placeholder="Contraseña"
              keyboardType='default'
              secureTextEntry ={true}
            />
          <View style = {{marginTop:30}}>
          <Button
            title = "INGRESAR"
            onPress={() => ToastAndroid.show("CLICK", ToastAndroid.LONG)}
            color ="purple"
          />
          </View>
    
          <View style ={styles.formRegister}>
            <Text>No Tienes Cuenta?</Text>
            <Text style ={styles.formRegisterText}>Registrate</Text>
    
    
          </View>
          </View>
          
    
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'black',
      },
    
      imageBackground:{
        width: "100%",
        height: "100%",
        top: "1%"
        
        
      },
      form: {
        width: "100%",
        height: "40%",
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        borderTopRightRadius:40,
        borderTopLeftRadius: 40,
        padding: 30
    
      },
    
      formText:{
        fontWeight:"bold",
        fontSize: 16
    
      },
    
      
      formTextInput:{
        borderBottomWidth: 1,
        borderBottomColor: "black"
      },
      formRegister:{
        flexDirection:"row",
        justifyContent: "center",
        marginTop: 30
    
      },
      formRegisterText: {
        fontStyle:"italic",
        color: "purple",
        borderBottomWidth: 1,
        borderBottomColor: "purple",
        fontWeight: "bold",
        marginLeft: 10
      },
      logoContainer: {
        position: "absolute",
        alignSelf: "center",
        top: "15%"
      },
      logoImg: {
        width:350,
        height: 200,
        borderRadius: 30
      },
      logoText: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        marginTop: 10,
        fontWeight: "bold"
      }
      
    
    });
    