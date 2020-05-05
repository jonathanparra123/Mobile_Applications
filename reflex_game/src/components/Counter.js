import React, {Component} from 'react';
import {Text} from 'react-native';
import styles from '../styles/styling'

export default class Counter extends Component{

//button class for out timer variable
render(){
    return(
        <Text style = {styles.timer}>
            Time: {this.props.counter}
        </Text>
    )
   }
}