import React from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

const Header2 = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.precio}>
               Precio
            </Text>
            <Text style={styles.text2}>
                Bienvenido
            </Text>
            <Text style={styles.stock}>
                Stock
            </Text>
        </View>
    );
};

export default Header2;