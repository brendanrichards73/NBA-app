import React from 'react';
import { AppRegistry } from 'react-native';
import { Navigation } from "react-native-navigation";
import App from './app/index';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';

import reducers from './app/store/reducers';

import { registerScreens } from './app/screens';
import Login from './app/components/auth';


registerScreens();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = createStore(reducers, composeEnhancers(
        applyMiddleware(promiseMiddleware)
))


const appRedux = () => (
        <Provider store={createStoreWithMiddleware}>
            <App />
        </Provider>
  )


Navigation.registerComponentWithRedux('Login', () => Login, Provider, createStoreWithMiddleware);
Navigation.registerComponentWithRedux('Games', () => require('./app/components/games/index').default);
Navigation.registerComponentWithRedux('News', () => require('./app/components/news/index').default);
Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setRoot({
          root: {
                  bottomTabs: {
                    id: 'BOTTOM_TABS_LAYOUT',
                    children: [
                      {
                        stack: {
                          id: 'LOGIN_TAB',
                          children: [
                            {
                              component: {
                                id: 'Login',
                                name: 'Login'
                              }
                            }
                          ],
                          options: {
                            bottomTab: {
                              text: 'Login',
                              icon: require('./app/images/signIn.png')
                            }
                          }
                        }
                      },
                      {
                        stack: {
                          id: 'GAMES_TAB',
                          children: [
                            {
                              component: {
                                id: 'Games',
                                name: 'Games'
                              }
                            }
                          ],
                          options: {
                            bottomTab: {
                              text: 'Games',
                              icon: require('./app/images/signUp.png')
                            }
                          }
                        }
                      }
                    ]
                  }
                }
        });
      });
