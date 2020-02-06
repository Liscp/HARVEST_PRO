import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

export default class Publicacion extends Component {
  render(){
    let { container, cardText, card } = styles;
    return (
        <ImageBackground source={require('../img/fondo.jpg')} style={styles.container}>
      <View style = {styles.container}>
          <TouchableOpacity style={styles.card}>
            <Text style= {styles.cardText}>Publicar</Text>

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
        fontSize: 30
    }, 
    card: {
        backgroundColor: '#fff',
        marginBottom: 10,
        marginLeft: '2%',
        width: '96%',
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowOffset: {
            width: 3,
            height: 3
        }
    }
})