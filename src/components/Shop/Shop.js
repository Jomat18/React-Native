
import React, { useState } from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import Header from './Header/Header';
import AddItem from './AddItem/Add';
import ListItem from './ListItem/List';
import img1 from '../../assets/images/detergente.jpg';
import img2 from '../../assets/images/leche.jpeg';
import img3 from '../../assets/images/descarga.jpeg';
import img4 from '../../assets/images/protex.jpg';
import img5 from '../../assets/images/arroz.jpeg';

const Shop = () => {

  const [item, setItem] = useState([
    {id: 1, text: 'Fideo'},
  ]);

  const addItem = (text) => {
    setItem(prevItems => {
      return [{id: id+1, text}, ...prevItems];
    });
  }   

  const deleteItem = (id) => {
    setItem(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  return(
    <View style={styles.container}>
       <ScrollView >
        <Header />
        <AddItem valor={"S/5"} img={img1}/>
        <AddItem valor={"S/9"} img={img2}/>
        <AddItem valor={"S/4"} img={img3}/>
        <AddItem valor={"S/3"} img={img4}/>
        <AddItem valor={"S/4"} img={img5}/>
      </ScrollView>
      {/* <FlatList 
        data={item}
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8a2be2',
  }
});

export default Shop;
