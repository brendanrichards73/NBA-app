import React from 'react';
import { Navigation } from 'react-native-navigation'

import Login from './components/auth';
import News from './components/news';
import Games from './components/games';
import HomeScreen from './components/home';

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('News', () => News);
Navigation.registerComponent('Games', () => Games);


export const goToLogin = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          component: {
            id: Login,
            name: 'Login',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Sign In',
                icon: require('../app/images/signIn.png')
              }
            }
          },
        },
        {
          component: {
            id: News,
            name: 'News',
            options: {
              bottomTab: {
                text: 'News',
                fontSize: 12,
                icon: require('../app/images/signUp.png')
              }
            }
          },
        },
      ],
    }
  }
});


export const goToTabs = () => {  
    Navigation.setRoot({
        root: {
        bottomTabs: {
            children: [{
            stack: {
                children: [{
                component: {
                    id: Games,
                    name: 'Games',
                    passProps: {
                    text: 'Games Screen',
                    icon: require('../app/images/signUp.png')
                    }
                }
                }],
                options: {
                bottomTab: {
                    text: 'Tab 1',
                }
                }
            }
            },
            {
            component: {
                id: News,
                name: 'News',
                passProps: {
                text: 'News Screen'
                },
                options: {
                bottomTab: {
                    text: 'Tab 2',
                    icon: require('../app/images/signIn.png')
                    
                }
                }
            }
            }]
        }
    }
})};