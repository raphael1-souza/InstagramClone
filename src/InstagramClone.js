import React, {Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

class InstagramClone extends Component {
    render(){
        return(
            <View style={{flex:1,width:100+'%',height:100+'%'}}>
                <View style = {styles.tempNav}>
                    <Text>Instagram</Text>
                </View>
                <View style = {styles.userBar}>
                    <View style={{flexDirection:'row',alignItems:"center"}} >
                        <Image 
                        style={{height:40,width:40}}
                        source={{uri:
                        "https://lh3.googleusercontent.com/A24mjhpfyVGcz3IP1th8BvBWUZL7_AuSXshUGmwR9NGMYia-BOK0nNWdU8hXFm2b2faFXykVQjiz0p1kcaUVk0vjOQ"
                        }}/>
                        <Text>Mc Lovin</Text>
                    </View>
                <View/>
                </View>
                <Image 
                style ={{width:100+'%' , height:100}}
                source={{uri:
                "https://lh3.googleusercontent.com/oRKeemjFx0jY2obVUjd_JGA7maeWe8N5PGAa-5QhDLuqu8F-fmh_8K4pCRmeQAPvfbWk2sbWHPWcKEIYZbZ-oIpKgMk"
                }} />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    tempNav:{
        width:100+'%',
        height:56,
        marginTop:20,
        backgroundColor:'rgb(250,250,250)',
        borderBottomColor:'rgb(233,233,233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent:'center',//vertical
        alignItems:'center'
    },
    userBar:{
        width:100+'%',
        height:50,
        backgroundColor:'rgb(255,255,255)',
        flexDirection:'row',
    }
});

export default InstagramClone;