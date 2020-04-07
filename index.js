import React from 'react';
import { Navigation } from "react-native-navigation";
import App from './app/index';
// import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import { registerScreens } from './app/screens';
import reducers from './app/store/reducers';

registerScreens();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = createStore(reducers, composeEnhancers(
        applyMiddleware(promiseMiddleware)
))


const appRedux = () => {
  return (
        <Provider store={createStoreWithMiddleware}>
            <App />
        </Provider>
  )}

Navigation.registerComponent('HomeScreen', () => appRedux);
Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setRoot({
          root: {
            // stack: {
            //   children: [
            //     {
            //       stack: {
            //         children: [
            //           {
            //             component: {
            //               name: 'Home'
            //             }
            //           },
            //         ]
            //       }
            //     },
            //     {
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
