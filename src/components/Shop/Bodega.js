
import React, { useState } from 'react';
import { View, StyleSheet,  TouchableOpacity, ScrollView, Text, Alert } from 'react-native';
import Header2 from './Header/Header2';
import Add from './AddItem/Add2';
import img1 from '../../assets/images/detergente.jpg';
import img2 from '../../assets/images/leche.jpeg';
import img3 from '../../assets/images/descarga.jpeg';
import img4 from '../../assets/images/protex.jpg';
import img5 from '../../assets/images/arroz.jpeg';

const Bodega = () => {

  return(
    <View style={styles.container}>
       <ScrollView>
        <Header2 />
        <Add valor={"5"} img={img1}/>
        <Add valor={"9"} img={img2}/>
        <Add valor={"4"} img={img3}/>
        <Add valor={""} img={img4}/>
        <Add valor={""} img={img5}/>
        <TouchableOpacity style={styles.btn} onPress={() => {
          Alert.alert("Productos", 'Datos Guardados!');
      }}>
            <Text style={{fontSize: 15}}> Guardar </Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8a2be2',
  },
  btn: {
    width:130,
    height:40,
    top: 30,
    left: 90,
    backgroundColor:'#4BBD6E',
    textAlign:'center',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginBottom: 40,
},
});

export default Bodega;
