import React, { Component } from 'react';
import {Text} from 'react-native';
import styles from '../styles/styling';

export default class Points extends Component{

//button class for our score variable
    render(){
        return(
            <Text style = {styles.point}>
                Score: {this.props.point}
            </Text>    
        )
    }
}