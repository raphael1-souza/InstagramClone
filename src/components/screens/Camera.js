import React , {Component} from 'react';
import {View,Text,TouchableOpacity} from "react-native";

class Camera extends Component {

   login(){
      //
   }
   render (){
       return (
           <TouchableOpacity 
           style = {{
               height:100+'%',
               width:100+'%',
               flex:1,
               justifyContent:"center",
               alignItems:"center"
           }}
           onPress = {()=> {this.login()}}
           >
               <Text>Camera</Text>
           </TouchableOpacity>
       )
   }
}

export default Camera;