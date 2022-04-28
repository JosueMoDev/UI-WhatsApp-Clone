/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';


const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Status: {
            screens: {
              StatusScreen: 'one',
            },
          },
          Calls: {
            screens: {
              CallsScreen: 'two',
            },
          },
          Camera: {
            screens: {
              CameraScreen: 'three',
            },
          },
          Chats: {
            screens: {
              ChatsScreen: 'four',
            },
          },
          Settings: {
            screens: {
              SettingsScreen: 'five',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
