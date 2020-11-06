import React, { Component } from 'react';  
import { StyleSheet, 
         View,  
         Image
} from 'react-native';  
import LinearGradient from 'react-native-linear-gradient';
import Tabulador from '../Tabulador/Tabulador';



export default class Myapp extends Component {  
  constructor(){  
    super();  
    this.state={  
    isVisible : true,  
   }  
 }  
  Hide_Splash_Screen=()=>{  
   this.setState({   
     isVisible : false   
   });  
 }  
  
 componentDidMount(){  
   var that = this;  
   setTimeout(function(){  
     that.Hide_Splash_Screen();  
   }, 5000);  
  }  
  
   render()  
   {  
       let Splash_Screen = (  
        <View style = { styles.MainContainer }> 
            <View style={styles.SplashScreen_RootView}>  
              <LinearGradient
                colors={['#00B2FF', '#B7C7C9' ,'#29B3DE']}
                style={{flex: 1}}>
                <View style={styles.SplashScreen_ChildView}>  
                  
                    <Image source={require('../../assets/images/logo.png')}  
                        style={{width:'50%', height: '50%', resizeMode: 'contain'}} />
            
                   
                </View>
               </LinearGradient>                       
            </View> 
            </View>            
            )  
        return(  
          
                 (this.state.isVisible === true) ? Splash_Screen : <Tabulador/>
                 
             );  
   }  
}  
const styles = StyleSheet.create(  
{  
   MainContainer:  
   {  
       flex: 1,  
       justifyContent: 'center',  
       alignItems: 'center',  
 
   },  
  
   SplashScreen_RootView:  
   {  
       justifyContent: 'center',  
       flex:1,  
       //margin: 10,  
       position: 'absolute',  
       width: '100%',  
       height: '100%',  
       backgroundColor: '#00BCD4',  
     },  
  
   SplashScreen_ChildView:  
   {  
       justifyContent: 'center',  
       alignItems: 'center',  
       
       flex:1,  
   },
   
   Text_Time:  
   {  
       fontSize:30,
       color:'white'
       
   },


});  