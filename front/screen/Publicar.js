import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import InputField from '../components/InputFiled';
import colors from '../src/style/index';

export default class Publicacion extends Component {
  render(){
    return (
      <ImageBackground source={require('../img/fondo.jpg')} style={styles.container}>
      <View style = {styles.container}>
          <TouchableOpacity style={styles.card}>
            <Text style= {styles.cardText}>Publicar</Text>
            <ScrollView style={styles.scrollView}>
              <Text style={styles.loginHeader}>IniciarSesion</Text>
              <InputField 
                labelText="Correo Institucional" 
                labelTextSize={14} 
                labelColor={colors.white} 
                textColor={colors.white} 
                borderBottomColor={colors.white} 
                inputType="email"  
                customStyle={{marginBottom:30}}
              />
              <InputField 
                labelText="Contraseña" 
                labelTextSize={14} 
                labelColor={colors.white} 
                textColor={colors.white} 
                borderBottomColor={colors.white} 
                inputType="password"  
                customStyle={{marginBottom:30}}
              />
          </ScrollView>
          </TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardText: {
        fontSize: 30,
        padding: 10
    }, 
    card: {
        backgroundColor: colors.green02,
        marginBottom: 10,
        marginLeft: '1%',
        width: '1000%',
        height: '90%',
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowOffset: {
            width: 2,
            height: 2
        }
    }
})