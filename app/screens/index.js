import {Navigation} from 'react-native-navigation';

export function registerScreens() {
    Navigation.registerComponent('Home', () => require('../components/home').default);
    Navigation.registerComponent('Login', () => require('../components/auth').default);
    Navigation.registerComponent('Games', () => require('../components/games').default);
    Navigation.registerComponent('News', () => require('../components/news').default);
  }