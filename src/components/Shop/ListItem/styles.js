import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    listItem: {
       padding: 15,
       backgroundColor: '#f8f8f8',
       marginBottom: 5,
       borderColor: '#eee',
       marginLeft: 20,
       marginRight: 20,
       borderRadius: 10, 
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },    
    listItemText: {
        fontSize: 18,
    }
});

export default styles;