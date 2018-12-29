import React, {Component} from 'react';
import {View,Text,StyleSheet,Image,Dimensions,TouchableOpacity} from 'react-native';
import config from '../../config';

class Post extends Component {
    constructor(){
        super();
            this.state={
                liked:false,
                screenWidth:Dimensions.get("window").width
            };
        }

    likedToggled(){
        this.setState({
            liked:!this.state.liked
        })
    }
    
    render(){
        const imageHeight = Math.floor(this.state.screenWidth*1.1);
        const imageSelection = 
            this.props.item % 2 == 0 
            ? "https://lh3.googleusercontent.com/LhsisR_nD6oqUfWo3uEkZ5HkAJlKDl1ew4tIvXmfAJAaJCrtoAJei0jBSBm87uIA5g1wVhUIO_FnQC2QIPN1whC4tw" 
            : "https://lh3.googleusercontent.com/oRKeemjFx0jY2obVUjd_JGA7maeWe8N5PGAa-5QhDLuqu8F-fmh_8K4pCRmeQAPvfbWk2sbWHPWcKEIYZbZ-oIpKgMk"
        const imageUri = imageSelection +"=s"+imageHeight+"-c" ;
        const heartIconColor = (this.state.liked)? 'rgb(252,61,57)': null
        return(
            <View style ={{flex:1,width:100+'%'}}>
                <View style = {styles.userBar}>
                    <View style={{flexDirection:'row',alignItems:"center"}} >
                        <Image 
                        style={styles.userPicture}
                        source={{uri:
                        "https://lh3.googleusercontent.com/A24mjhpfyVGcz3IP1th8BvBWUZL7_AuSXshUGmwR9NGMYia-BOK0nNWdU8hXFm2b2faFXykVQjiz0p1kcaUVk0vjOQ"
                        }}/>
                        <Text style={{marginLeft:10}}>Mc Lovin</Text>
                    </View>
                    <View style={{alignItems:"center"}}>
                        <Text style={{fontSize:25}}>...</Text>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={.7}
                    onPress={()=>{this.likedToggled();}}>
                <Image 
                style ={{width:this.state.screenWidth , height:400}}
                source={{uri:imageUri
                }} />
                </TouchableOpacity>
                <View style={styles.iconBar}>
                    <Image style={[styles.icon,{height:40,width:45,tintColor:heartIconColor}]} 
                    source ={config.images.heartIcon}/>
                    

                    <Image style={[styles.icon,{height:36,width:36}]}  
                    source ={config.images.chatIcon}/>

                    <Image 
                    resizeMode="stretch"
                    style={[styles.icon,{height:40,width:40}]}  
                    source ={config.images.arrowIcon}/>
                </View>
                <View style ={styles.iconBar}>
                    <Image style={[styles.icon,{height:30,width:35}]} 
                        source ={config.images.heartIcon}/>
                    <Text> 128 likes</Text>
                </View>
            </View>
        )
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

export default Post;