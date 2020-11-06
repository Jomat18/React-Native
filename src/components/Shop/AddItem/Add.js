import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';

import styles from './styles'

const AddItem = ({item, addItem, img, valor}) => {

  const [count, setCount] = useState(1);


  return(
    <View style={styles.container}>
      <Text style={styles.btnText3}>
        {valor}
        </Text>  
      <Image source={img}  
                        style={styles.image} />
      <TouchableOpacity style={styles.btn}  onPress={() => {
          Alert.alert("Listo", 'Agregado al carrito');
      }}>
        <Text style={styles.btnText}>
          Añadir
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn2} onPress={() => setCount(count + 1)}>
      <Text style={styles.btnText2}>
          +{count}
        </Text>  
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;
