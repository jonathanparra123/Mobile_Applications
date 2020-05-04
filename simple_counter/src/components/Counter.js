import React, {Component} from 'react'
import {Text, Button, View} from 'react-native'
import styles from '../styles/mod'

export default class counter extends Component{
    render(){
        return(
            <Text style= {styles.counter}>
            {this.props.val}
            </Text>
        );
    }
}
    

