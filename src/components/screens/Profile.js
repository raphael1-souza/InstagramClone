import React , {Component} from 'react';
import {View,Text,TouchableOpacity} from "react-native";

class Profile extends Component {

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
               <Text>Profile</Text>
           </TouchableOpacity>
       )
   }
}

export default Profile;