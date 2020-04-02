import React from 'react';
import {Platform} from 'react-native';

import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer,
    createBottomTabNavigator,
} from 'react-navigation';

//screens
import AuthComponent from './components/auth';
import NewsComponent from './components/news';
import GamesComponent from './components/games';

const AppStack = createBottomTabNavigator({
    News:NewsComponent,
    Games:GamesComponent
});

const AuthStack = createStackNavigator({
    SignIn:AuthComponent
});

export const RootNavigator = () => {
    return createAppContainer(createSwitchNavigator({
        App:AppStack,
        Auth:AuthStack
    },{
        initialRouteName:'Auth'
    }))
}