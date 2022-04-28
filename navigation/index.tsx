/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import StatusScreen from '../screens/StatusScreen';
import CallsScreen from '../screens/CallsScreen';
import CameraScreen from '../screens/CameraScreen';
import ChatsScreen from '../screens/CallsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{
        headerShown: false,
      }}/>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Status"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      
      <BottomTab.Screen
        name="Status"
        component={StatusScreen}
        options={{
          title: 'Status',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 40,
          },
          headerTitleAlign:'left',
          tabBarIcon: ({ color }) => <Ionicons name="md-heart-circle-outline" size={24} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Calls"
        component={CallsScreen}
        options={({ navigation }: RootTabScreenProps<'Calls'>) => ({
          title: 'Calls',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 40,
          },
          headerTitleAlign:'left',
          tabBarIcon: ({ color }) => <Ionicons name="md-call" size={24} color={color } />,

        })}
      />

      <BottomTab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="camera" size={24}  color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Chats"
        component={ChatsScreen}
        options={({ navigation }: RootTabScreenProps<'Chats'>) => ({
          title: 'Chats',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 40,
          },
          headerTitleAlign:'left',
          tabBarIcon: ({ color }) => <Ionicons name="chatbubbles-sharp" size={24} color={color } />,

        })}
      />

      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={({ navigation }: RootTabScreenProps<'Settings'>) => ({
          title: 'Settings',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 40,
          },
          headerTitleAlign:'left',
          tabBarIcon: ({ color }) => <Ionicons name="md-settings-sharp" size={24} color={color } />,

        })}
      />

    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}