import * as React from 'react';
import {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Dimensions, 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet 
} from 'react-native'

import Bodega from '../../components/Shop/Bodega';

const Stack = createStackNavigator();

const Login = ({ navigation }) => {

  return (
    <View style={styles.SplashScreen_RootView}>

          <TouchableOpacity style={styles.btn2}>
            <Text> REGISTRARSE </Text>
          </TouchableOpacity>
      
        <View style={styles.SplashScreen_ChildView}>  
          <Text style={[styles.Text_Time]}>Iniciar Sesion </Text>  

          <Text style={[styles.Text]}>Usuario </Text>           
          <TextInput style={styles.input}
            placeholder="Usuario" 
            type="text" 
            autofocus="true"
        
          />
          <Text style={[styles.Text]}>Contraseña </Text>           
          <TextInput style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
          />

          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bodega')}>
            <Text> INGRESAR </Text>
          </TouchableOpacity>
        </View>
      
    </View>    
  )
}

function Vista() {
  return (
      <Stack.Navigator 
        initialRouteName="Login"
        headerMode="screen"
        screenOptions={{
        headerTintColor: 'black',
        headerStyle: { backgroundColor: '#4BBD6E', height: 40 },
      }}
      >
        <Stack.Screen 
          options={{headerShown: false}}
          name="Login" component={Login} />
        <Stack.Screen name="Bodega" component={Bodega} />
      </Stack.Navigator>
  );
}

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  SplashScreen_RootView: {  
      justifyContent: 'center',  
      flex:1,  
      position: 'absolute',  
      width: '100%',  
      height: '100%',  
      backgroundColor: '#8a2be2',  
    },  
 
  SplashScreen_ChildView: {  
      justifyContent: 'center',  
      alignItems: 'center',  
      flex:1,  
  },
  
    input:{
        height:40,
        width: width-width/3,
        borderRadius:8,
        borderColor:'black',
        backgroundColor: 'white',
        borderWidth:2,
        padding:10,
        margin:10,
        
    },

   Text_Time: {  
    paddingBottom: 10,
    fontSize:20,
    color:'white',      
    textAlign:'center'
       
   },

   Text: {  
    fontSize:15,
    color:'black',      
    textAlign:'center'
    
  },
    btn: {
        width:200,
        height:40,
        backgroundColor:'#4BBD6E',
        textAlign:'center',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginTop:10
    },
    btn2: {
      width:200,
      height:35,
      backgroundColor:'#4BBD6E',
      textAlign:'center',
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
      top:50,
      marginLeft: 65,
  }
  })  
export default Vista;