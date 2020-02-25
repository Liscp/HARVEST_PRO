import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { View, ScrollView, StyleSheet, ImageBackground, TouchableHighlight } from "react-native";
import InputField from "../../components/form/InputFiled";
import colors from "../../src/style/index";
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text } from "native-base";
export default class Login extends Component {
  render() {
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
            <Title>Transparent</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.onInicio.bind(this)}>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
      
        <View style={styles.scrollViewWrapper, styles.avoidView}>
          <ScrollView style={styles.scrollView}>
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
          <View style={styles.buttonWrapper}>
            <TouchableHighlight onPress={(this.onLogin.bind(this))} style={[{ opacity: 0.6 }, styles.button]}>
              <Text >Iniciar Sesion</Text>
            </TouchableHighlight>
          </View>
        </View>
       </ImageBackground>
       </Container>
    );
  }
  onLogin(){
    console.log('Aplaste el login')
    return this.props.navigation.push('Home')
  }
  onInicio(){
    console.log('Aplaste atras')
    return this.props.navigation.push('Inicio')
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