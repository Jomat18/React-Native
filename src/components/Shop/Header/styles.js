import { StyleSheet, Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
    header: {
        width: width,
        height: 55,
        backgroundColor: '#8a2be2',                
    },
    text: {
        padding: 15,
        color: 'black',
        fontSize: 22,
        textAlign: 'center',
    },
    text2: {
        top: -30,
        padding: 15,
        color: 'black',
        fontSize: 22,
        textAlign: 'center',
    },
    precio: {
        top: 50,
        left:-90,
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },
    stock: {
        top: -30,
        left:100,
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    }

});

export default styles;
