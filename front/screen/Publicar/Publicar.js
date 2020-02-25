import React, { Component } from "react";
import colors from "../../src/style/index";
import { PropTypes } from "prop-types";
import { Container, Header, Item, Input, Icon, Button, Text, Content, Form, Label } from 'native-base';   
import { StyleSheet } from "react-native";

export default class Publicacion extends Component {
  constructor(props){
    super(props);
    this.state = {
      labelTextCorreo:"Correo Institucional"
    }
    
  }
  render(){
    const { labelText, labelTextSize, labelColor, textColor, borderBottomColor, inputType,
      customStyle } = this.props;
    const color = labelColor || colors.black;
    const fontSize = labelTextSize || 14;
    const inputColor = textColor || colors.black  ;
    const borderBottom = borderBottomColor || "transparent";
    let secureInput = this.secureInput;
    return(
      
      <Container style>
        <Content>
          <Form transparent>
            <Item stackedLabel>
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
              />
            </Item>
          </Form>
        
        </Content>
      </Container>
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
  }
})