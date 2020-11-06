import React, {useState} from 'react';
import { View, Text,TextInput, Image, TouchableOpacity } from 'react-native';

import styles from './styles'

const Add = ({item, addItem, img, valor}) => {

  const [count, setCount] = useState(1);
  //const [text, setText] = useState('');

  //const onChange = textValue => setText(textValue);


  return(
    <View style={styles.container}>
      <Text  style={{left: 25, fontSize: 20}}>
          s/
        </Text>
      <TextInput style={{backgroundColor: 'white',width:60, left: 30, height:30, padding: 0, paddingLeft:10, paddingRight:0 }}
            keyboardType='numeric'
            //onChangeText={onChange}
            // autofocus="true"
            // value={valor}
      />
      <Image source={img}  
                        style={styles.image} />
      <TouchableOpacity style={styles.btn2} onPress={() => setCount(count + 1)}>
      <Text style={styles.btnText2}>
          +{count}
        </Text>  
      </TouchableOpacity>
    </View>
  );
};

export default Add;
