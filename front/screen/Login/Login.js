import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { View, ScrollView, StyleSheet, ImageBackground, TouchableHighlight } from "react-native";
import colors from "../../src/style/index";
import { Container, Header, Title, Button, Icon, Left, Right, Body, Text, Item, Input, Form, Label } from "native-base";
import enviarData from '../../envios/getPostLogin'
export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      correo: "",
      contra: "",
      usuario: "",
      idUser: null,
      labelTextCorreo:"Correo",
      labelTextContrasena:"Contraseña"
    }
    this.onLogin = this.onLogin.bind(this)
    this.correo = this.correo.bind(this)
    this.contra = this.contra.bind(this)
  }
  correo(event){
    this.setState({correo: event.target.value})
  }
  contra(event){
    this.setState({contra: event.target.value})
  }
  onLogin= async(x,y)=>{
    await enviarData(x, y).then((data)=>{
      if (data === "Datos incorrectos") {
        alert("datos incorrectos")
      }else{
      console.log(data)
      this.setState({
          usuario: data[0]['nombre'],
          idUser: data[0]['id']
      })
      }
    })
    /*localStorage.setItem('id', this.state.idUser)
    localStorage.setItem('user', String(this.state.usuario))*/
    console.log('Aplaste el login')
    return this.props.navigation.push('Home')
  }
  onInicio(){
    console.log('Aplaste atras')
    return this.props.navigation.push('Inicio')
  }
  render() {
    const { labelTextSize, labelColor, textColor, borderBottomColor} = this.props;
    const color = labelColor || colors.white;
    const fontSize = labelTextSize || 14;
    const inputColor = textColor || colors.white  ;
    const borderBottom = borderBottomColor || "transparent";
    let secureInput = this.secureInput;
    return (
      <Container>
        <ImageBackground style={styles.wrapper} source={require('../../img/fondo2.jpg')} behavior="padding">
        <Header transparent>
          <Left>
            <Button transparent onPress={this.onInicio.bind(this)}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Login</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.onInicio.bind(this)}>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
      
        <View style={styles.scrollViewWrapper, styles.avoidView}>
          <ScrollView style={styles.scrollView}>
            <Form>
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
            <TouchableHighlight onPress={()=>this.onLogin(this.state.correo, this.state.contra)} style={[{ opacity: 0.6 }, styles.button]}>
              <Text >Iniciar Sesion</Text>
            </TouchableHighlight>
          </View>
        </View>
       </ImageBackground>
       </Container>
    );
  }
}

Login.propTypes = {
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
  backgroundImage: {
    position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.3
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