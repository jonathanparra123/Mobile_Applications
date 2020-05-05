import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../styles/styling';

export default class StartButtons extends Component{

//button class that initiates game
render(){
    return(
        <TouchableOpacity onPress = {this.props.pressing}>
            <Text style = {styles.startButton}>
            {this.props.name}
            </Text>
         </TouchableOpacity>   
    )
}
}