import React, {Component} from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import styles from '../styles/mod'

export default class buttons extends Component{

    render(){
        return( 
            <TouchableOpacity
            onPress = {this.props.press}>
            <Text
            style = {styles.button}>{this.props.name}
            </Text>
            </TouchableOpacity>
        );
    }
}