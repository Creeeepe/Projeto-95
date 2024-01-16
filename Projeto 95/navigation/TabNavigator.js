import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreatePost from './CreatePost'; // Importe o componente CreatePost
import Feed from './Feed'; // Importe o componente Feed

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
        screenOpitions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "Feed") {
                    iconName = focused
                    ? 'book'
                    : 'book-outline';
                } else if (route.name === 'CriarPost') {
                    iconName = focused ? 'create' : 'create-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tebBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }}
    >
      <Tab.Screen name="CreatePost" component={CreatePost} />
      <Tab.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
  );
};

export default TabNavigator;