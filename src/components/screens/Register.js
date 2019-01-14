import React , {Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,TextInput,Button} from "react-native";
import config from "../../config"
class Register extends Component {

    constructor(){
        super();
        this.state={
            credentials:{
                email:"",
                senha:""
            }
        };
    }

    updateText(text,field){
        let newCredentials = Object.assign(this.state.credentials);
        newCredentials[field] = text;
        this.setState({
            credentials:newCredentials
        });
        
    }

   register(){
       console.log(config.baseUrl);
       fetch(config.baseUrl+'cadastrar',{
           method:'POST',
           headers:{
               Accept: 'application/json',
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(this.state.credentials)
       }).then(data=>{
           console.log(JSON.stringify(data))
       })
       .catch(err=>{
           console.log(err.message);
       });
   }
   render (){
       return (
           <View 
           style = {{
               height:100+ '%',
               width:100+'%',
               flex:1,
               justifyContent:"center",
               alignItems:"center",
               backgroundColor:"rgb(252,61,57)"
           }}
           
           >
               <Text>Register</Text>
               <TextInput  
                    value={this.state.email}
                    placeholder="Nome de Usuario"
                    onChangeText={(text)=>this.updateText(text,'email')}
                    autoCorrect={false}  
                    style = {styles.input}
                />
               <TextInput 
                    value={this.state.senha}  
                    onChangeText={(text)=>this.updateText(text,'senha')} 
                    secureTextEntry={true}
                    autoCorrect={false} 
                    placeholder="Senha" 
                    style={styles.input}
                />
               <Button  onPress={()=>{this.register();}} title="Cadastrar"/>
           </View>
       )
   }
}

const styles = StyleSheet.create({
    input:{
        height:40,
        width: 100+'%',
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal:50,
        backgroundColor:"rgb(255,255,255)",
        marginBottom:10
    }
})

export default Register;