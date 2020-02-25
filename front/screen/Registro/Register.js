import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { View, ScrollView, StyleSheet, ImageBackground, TouchableHighlight } from "react-native";
import InputField from "../../components/form/InputFiled";
import { Container, Header, Item, Input, Icon, Button, Text, Content, Form, Label } from 'native-base';   
import colors from "../../src/style/index";
import enviarData from '../../envios/getPostRegistro';
export default class Registro extends Component {
  constructor(props){
    super(props);
    this.state = {
      nombre: null,
      apellido: null,
      correo: null,
      contra: null,
      telefono: null, 
      cedula: null,
      labelTextNombre:"Nombre",
      labelTextApellido:"Apellido",
      labelTextCorreo:"Correo",
      labelTextContrasena:"Contraseña",
      labelTextTelefono:"Teléfono",
      labelTextCedula:"Cédula"
    }
    this.nombre = this.nombre.bind(this)
    this.apellido = this.apellido.bind(this)
    this.correo = this.correo.bind(this)
    this.contra = this.contra.bind(this)
    this.telefono = this.telefono.bind(this)
    this.cedula = this.cedula.bind(this)
  }
  nombre(event){
    this.setState({nombre: event.target.value})
  }
  apellido(event){
    this.setState({apellido: event.target.value})
  }
  correo(event){
    this.setState({correo: event.target.value})
  }
  contra(event){
    this.setState({contra: event.target.value})
  }
  telefono(event){
    this.setState({telefono: event.target.value})
  }
  cedula(event){
    this.setState({cedula: event.target.value})
  }
  onRegister(){
    const data =JSON.stringify({
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      telefono: this.state.telefono,
      cedula: this.state.cedula,
      correo: this.state.correo,
      contra: this.state.contra,
      
    })
    console.log(data)
    enviarData(data);
    console.log('Aplaste el registro')
    return this.props.navigation.push('Home')
  }
  render() {
    const { labelTextSize, labelColor, textColor, borderBottomColor} = this.props;
    const color = labelColor || colors.white;
    const fontSize = labelTextSize || 14;
    const inputColor = textColor || colors.white  ;
    const borderBottom = borderBottomColor || "transparent";
    let secureInput = this.secureInput;
    return (
      <ImageBackground style={styles.wrapper} source={require('../../img/fondo2.jpg')} behavior="padding">
        <View style={styles.scrollViewWrapper, styles.avoidView}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Registrate</Text>
            <Form>
              <Item stackedLabel last>
                <Label style={[{ color, fontSize }, styles.label]}>{this.state.labelTextNombre}</Label>
                <Input   
                  autoCorrect={false}
                  style={[
                    { color: inputColor, borderBottomColor: borderBottom },
                    styles.inputFiled
                  ]}
                  secureTextEntry={secureInput}
                  labelTextSize={14} 
                  labelColor={colors.white} 
                  textColor={colors.white} 
                  borderBottomColor={colors.white} 
                  inputType="text"  
                  customStyle={{marginBottom:30}}
                  onChangeText={(nombre) =>   this.setState({nombre})}
                />
              </Item>
              <Item stackedLabel last>
                <Label style={[{ color, fontSize }, styles.label]}>{this.state.labelTextApellido}</Label>
                <Input   
                  autoCorrect={false}
                  style={[
                    { color: inputColor, borderBottomColor: borderBottom },
                    styles.inputFiled
                  ]}
                  secureTextEntry={secureInput}
                  labelTextSize={14} 
                  labelColor={colors.white} 
                  textColor={colors.white} 
                  borderBottomColor={colors.white} 
                  inputType="text"  
                  customStyle={{marginBottom:30}}
                  onChangeText={(apellido) =>   this.setState({apellido})}
                />
              </Item>
              <Item stackedLabel last>
                <Label style={[{ color, fontSize }, styles.label]}>{this.state.labelTextTelefono}</Label>
                <Input   
                  autoCorrect={false}
                  style={[
                    { color: inputColor, borderBottomColor: borderBottom },
                    styles.inputFiled
                  ]}
                  secureTextEntry={secureInput}
                  labelTextSize={14} 
                  labelColor={colors.white} 
                  textColor={colors.white} 
                  borderBottomColor={colors.white} 
                  inputType="number"  
                  customStyle={{marginBottom:30}}
                  onChangeText={(telefono) =>   this.setState({telefono})}
                />
              </Item>
              <Item stackedLabel last>
                <Label style={[{ color, fontSize }, styles.label]}>{this.state.labelTextCedula}</Label>
                <Input   
                  autoCorrect={false}
                  style={[
                    { color: inputColor, borderBottomColor: borderBottom },
                    styles.inputFiled
                  ]}
                  secureTextEntry={secureInput}
                  labelTextSize={14} 
                  labelColor={colors.white} 
                  textColor={colors.white} 
                  borderBottomColor={colors.white} 
                  inputType="number"  
                  customStyle={{marginBottom:30}}
                  onChangeText={(cedula) =>   this.setState({cedula})}
                />
              </Item>
              <Item stackedLabel last>
                <Label style={[{ color, fontSize }, styles.label]}>{this.state.labelTextCorreo}</Label>
                <Input   
                  autoCorrect={false}
                  style={[
                    { color: inputColor, borderBottomColor: borderBottom },
                    styles.inputFiled
                  ]}
                  secureTextEntry={secureInput}
                  labelTextSize={14} 
                  labelColor={colors.white} 
                  textColor={colors.white} 
                  borderBottomColor={colors.white} 
                  inputType="email"  
                  customStyle={{marginBottom:30}}
                  onChangeText={(correo) =>   this.setState({correo})}
                />
              </Item>
              <Item stackedLabel last>
                <Label style={[{ color, fontSize }, styles.label]}>{this.state.labelTextContrasena}</Label>
                <Input   
                  autoCorrect={false}
                  style={[
                    { color: inputColor, borderBottomColor: borderBottom },
                    styles.inputFiled
                  ]}
                  secureTextEntry={secureInput}
                  labelTextSize={14} 
                  labelColor={colors.white} 
                  textColor={colors.white} 
                  borderBottomColor={colors.white} 
                  inputType="password"  
                  customStyle={{marginBottom:30}}
                  onChangeText={(contra) =>   this.setState({contra})}
                />
              </Item>
            </Form>
          </ScrollView>
          <View style={styles.buttonWrapper}>
            <TouchableHighlight onPress={() => this.onRegister()} style={[{ opacity: 0.6 }, styles.button]}>
              <Text >Registrate</Text>
            </TouchableHighlight>
          </View>
        </View>
       </ImageBackground>
    );
  }

}

Registro.propTypes = {
  disabled: PropTypes.bool,
  handleNextButton: PropTypes.func
};
const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1
  },
  avoidView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex:1
  },
  loginHeader: {
    fontSize: 28,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
  },
  buttonWrapper: {
    alignItems: "center",
    right: -2,
    bottom: 100,
    paddingTop: 0
    
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 80,
    backgroundColor: colors.green02,
    borderRadius: 15,
  }
});