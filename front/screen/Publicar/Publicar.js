import React, { Component } from "react";
import colors from "../../src/style/index";
import { PropTypes } from "prop-types";
import { Container, Header, Item, Input, Icon, Button, Text, Content, Form, Label, View } from 'native-base';   
import { StyleSheet, ScrollView, TouchableHighlight } from "react-native";

export default class Publicacion extends Component {
  constructor(props){
    super(props);
    this.state = {
      labelTextEmpresa:"Nombre de la Empresa",
      labelTextDescripcion:"Descripción",
      labelTextCiudad:"Ciudad",
      labelTextPrecio:"Precio"
    }
    
  }
  render(){
    const { labelText, labelTextSize, labelColor, textColor, borderBottomColor, inputType,
      customStyle } = this.props;
    const color = labelColor || colors.white;
    const fontSize = labelTextSize || 14;
    const inputColor = textColor || colors.white  ;
    const borderBottom = borderBottomColor || "transparent";
    let secureInput = this.secureInput;
    return(
      
          <View style={styles.scrollViewWrapper, styles.avoidView}>
            <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Publicar</Text>
              <Form transparent>
                <Item stackedLabel>
                  <Label style={[{ color, fontSize }, styles.label]}>{this.state.labelTextEmpresa}</Label>
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
                  />
                </Item>
                <Item stackedLabel>
                  <Label style={[{ color, fontSize }, styles.label]}>{this.state.labelTextDescripcion}</Label>
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
                  />
                </Item>
                <Item stackedLabel>
                  <Label style={[{ color, fontSize }, styles.label]}>{this.state.labelTextCiudad}</Label>
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
                  />
                </Item>
                <Item stackedLabel>
                  <Label style={[{ color, fontSize }, styles.label]}>{this.state.labelTextPrecio}</Label>
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
                  />
                </Item>
              </Form>
              <View style={styles.buttonWrapper}>
              <TouchableHighlight onPress={() => this.onRegister()} style={[{ opacity: 0.6 }, styles.button]}>
                <Text >Publicar</Text>
              </TouchableHighlight>
            </View>
            </ScrollView>
            
          </View>
    )
  }
}
Publicacion.propTypes = {
  disabled: PropTypes.bool,
  handleNextButton: PropTypes.func
};
const styles = StyleSheet.create({
  label: { fontWeight: "700", marginBottom: 10 },
  inputFiled: {
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5
  },
  showButton: {
    position: "absolute",
    right: 0
  },
  showButtonText: {
    color: colors.white,
    fontWeight: "700"
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
})