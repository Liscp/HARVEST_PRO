import React, {Component} from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import Publicacion from '../Publicar/Publicar';
import colors from '../../src/style/index';
import { Container, Header, Button, Icon, Text, Footer, FooterTab, Content, Input, Item} from "native-base";
export default class Home extends Component {
  
  render(){
    return(
      <Container transparent>
        <ImageBackground source={require('../../img/fondo2.jpg')} style={styles.wrapper1} behavior="padding">
        <Header searchBar rounded transparent> 
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          <Publicacion />
        </Content>
        <Footer>
          <FooterTab>
          <Button vertical>
              <Icon name="home" />
              <Text>Inicio</Text>
            </Button>
            <Button vertical active>
              <Icon active name="car" />
              <Text>Mis Publicaiones</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Perfil</Text>
            </Button>
            <Button vertical>
              <Icon name="menu" />
              <Text>Menú</Text>
            </Button>
          </FooterTab>
        </Footer>
      </ImageBackground>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  avoidView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex:1
  },
  wrapper1: {
    display: "flex",
    flex: 1,
  },
    box: {
    height: 80
  },
  wrapper: {
    display: "flex",
    height: 230
  },
  loginHeader: {
    fontSize: 25,
    color: colors.white,
    marginTop: 190,
    marginLeft: 18,
    fontWeight: "300",
    marginBottom: 40
  },
})