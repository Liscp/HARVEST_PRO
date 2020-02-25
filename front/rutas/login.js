import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Inicio from '../screen/Inicio/Inicio';
import Login from '../screen/Login/Login';
import Registro from '../screen/Registro/Register';
import Publicar from '../screen/Publicar/Publicar';
import Home from '../screen/Home/Home';


const screens = {
    Inicio: {
      screen: Inicio,
      navigationOptions:{
        headerShown: false
      }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false 
        },
    },
    Registro: {
        screen: Registro,
        navigationOptions: {
            headerShown: false  
        },
    },
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false  
        },
    },
    Publicar: {
        screen: Publicar,
        navigationOptions: {
            headerShown: false  
        },
    },
}

const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);
