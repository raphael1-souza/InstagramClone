import React, {Component} from 'react';
import {View,
        StyleSheet,
    } from 'react-native';
import {MainFeed,Login,Camera,Register,Profile,} from './components/screens';
import {createSwitchNavigator,createStackNavigator,createAppContainer,createBottomTabNavigator} from 'react-navigation';



const Tabs = createBottomTabNavigator({
    Feed : MainFeed,
    Camera: Camera,
    Profile : Profile
})
const IntroStack = createStackNavigator({
    register:Register,
    login:Login,  
})
const menu = createSwitchNavigator({
    intro: IntroStack,
    main: Tabs,
});

const MainStack = createAppContainer(menu);

class InstagramClone extends Component {
    render(){
        return (
            <MainStack/>
        );
    }
}

export default InstagramClone;