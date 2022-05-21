import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator}  from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'

import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import Search from '../screens/Search';
import Profile from '../screens/Profile/Profile';

const Tab = createBottomTabNavigator()

export default function Navigation() {
    
    const screenOptions = ( route, color ) =>{
        let iconName
        switch (route.name) {
            case "inicio":
                iconName ="home-circle"
                break;
            case "favoritos":
                iconName ="heart"
                break;
            case "busqueda":
                iconName ="magnify"
                break;
            case "perfil":
                iconName ="account-circle"
                break;
        }
        return(
            <Icon
                type='material-community'
                name={iconName}
                size={30}
                color={color}
            />
        )
    }
  
    return (
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName="inicio"
            ScreenOptions={{
                inactiveTintColor: "#abdbe3",
                activeTintColor: "#1e81b0"
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => screenOptions(route, color)
            })}
        >
            <Tab.Screen
                name='inicio'
                component={Home}
                options={{ title: "Inicio"}}
            />

            <Tab.Screen
                name='favoritos'
                component={Favorites}
                options={{ title: "Favoritos"}}
            />

            <Tab.Screen
                name='busqueda'
                component={Search}
                options={{ title: "Busqueda"}}
            />

            <Tab.Screen
                name='perfil'
                component={Profile}
                options={{ title: "Perfil"}}
            />
        </Tab.Navigator>
    </NavigationContainer>
  )
}