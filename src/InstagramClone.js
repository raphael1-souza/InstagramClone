import React, {Component} from 'react';
import {View,Text,StyleSheet,Image,Dimensions,TouchableOpacity} from 'react-native';
import config from './config';
import {PostFeed} from './components/container';

class InstagramClone extends Component {
    render(){
        return(
            <View style={{flex:1,width:100+'%',height:100+'%'}}>
                <View style = {styles.tempNav}>
                    <Text>Instagram</Text>
                </View>
                <PostFeed/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    tempNav:{
        width:100+'%',
        height:46,
        marginTop:20,
        backgroundColor:'rgb(250,250,250)',
        borderBottomColor:'rgb(233,233,233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent:'center',//vertical
        alignItems:'center'
    },
    userBar:{
        width:100+'%',
        height:config.styleConstants.rowHeight,
        backgroundColor:'rgb(255,255,255)',
        flexDirection:'row',
        paddingHorizontal:10,
        justifyContent:'space-between'

    },
    userPicture:{
        height:40,
        width:40,
        borderRadius:20
    },
    iconBar:{
        height: config.styleConstants.rowHeight,
        width:100+'%',
        borderColor:'rgb(233,233,233)',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection:'row',
        alignItems:"center",
    },
    icon:{
        marginLeft:5,
    },
    commentBar:{
        width:100+'%',
        height: config.styleConstants.rowHeight,
        borderColor:'rgb(233,233,233)',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});

export default InstagramClone;