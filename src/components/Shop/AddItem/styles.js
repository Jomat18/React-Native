import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 30,
        marginRight: 20,
        borderRadius: 10,
        borderColor:'white',
        borderTopWidth:1,
        paddingTop: 10,
    },
    image: {
        resizeMode: 'contain',
        marginBottom: 30,
        flex: 1,
        width: null,
        height: '120%',
    },
    btn: {
        top: 10,
        backgroundColor: 'black',
        height: 30,
        width: 80,
        marginBottom: 30,
        marginLeft: 0,
        borderRadius: 5,        
    },
    btnText: {
        color: 'green',
        fontSize: 20,
        textAlign: 'center',
    },
    btn2: {
        top: 10,
        backgroundColor: 'white',
        height: 30,
        width: 50,
        marginBottom: 30,
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 10,
        marginLeft: 10,
    },
    btnText2: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },
    btnText3: {
        color: 'black',
        fontSize: 19,
        textAlign: 'center',
        marginLeft: 20,
        marginRight: 0,
    },
  });

  export default styles;