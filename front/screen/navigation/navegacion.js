import React, {Component} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';
import Home from '../Home/Home';
import Publicacion from '../Publicar/Publicar';


enableScreens();

const Tab = createBottomTabNavigator();
export default class Nav extends Component {
  render(){
    return (
    
        <NavigationContainer>
            
            <Navigator />
            <Tab.Navigator
                initialRouteName="Publicacion"
                screenOptions={{
                    headerShown: false,
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'tomato' },
                }}
            >
                <Tab.Screen
                    name="Publicacion"
                    component={Publicacion}
                    options={{
                        title: 'Mis publicaciones',
                    }}
                />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
}