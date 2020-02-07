import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter'
import colors from '../src/style/index'

//const KEYS_TO_FILTERS = [''] para llamar de la base de datos parala busyqeda

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ''
        }
    }
    searchUpdate(term){
        this.setState({searchTerm: term})
    }
  render(){
    return(
        <View style = { styles.container }>
            <ImageBackground style={[{opacity: 0.6}, styles.wrapper]} source={require('../img/foto1.jpg')} behavior="padding">
                <View style={[styles.box]}>
                    <Text style={ styles.loginHeader }>HERVEST OF THE FUTURE</Text>
                </View>
            </ImageBackground>
            <View style={[styles.box]}>
        
            </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column'
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
  }
});