import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Shop from '../Shop/Shop';
import Login from '../Login/Login';
import logo from '../../assets/images/logo2.jpg';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Mapa() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.imagen}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      resizeMode: 'contain',
      backgroundColor: '#8a2be2',      
    },
    imagen: {
      width:'50%', 
      height: '50%', 
      resizeMode: 'contain',
      left: 80,
      top: 70,
    }
    
  });

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Mapa"
      labelStyle={{ fontSize: 15 }}
      activeColor="white"
      inactiveColor="black"
      barStyle={{ backgroundColor: '#8A2BE2' }}
      tabBarOptions={{
        activeTintColor: 'green',
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: 'Vender',
          tabBarIcon: ({ color }) => (
            <View>
              <Icon name='store' size={25} color={color}/>
            </View>
          ),
        }}
      />
       <Tab.Screen
        name="Mapa"
        component={Mapa}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <View>
              
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarLabel: 'Comprar',
          tabBarIcon: ({ color }) => (
            <Icon name='shopping-cart' size={25} color={color}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Tabulador = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


export default Tabulador;