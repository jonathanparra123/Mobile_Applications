import React, { Component } from 'react';
import {Text,View, Button} from 'react-native';
import styles from '../styles/mod'; 
import Counter from './Counter';
import Buttons from './Buttons';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {value: 0};
}

  render() {
    return (
      <View style= {styles.container}>

      <Counter
      val = {this.state.value}/>

      <Buttons
      press = {()=>this.upButton()}
      name =  {'up'}/>
      
      <Buttons
      press = {()=> this.downButton()}
      name = {'down'}/>

      <Buttons
       press = {() => this.resetButton()}
       name = {'reset'}/>

      </View>
    );
  }

    upButton(){
        this.setState((prevState)=> {
            return{
                value: prevState.value + 1
            }
          }
        )
    }

    downButton(){
        this.setState((prevState)=> {
            return{
                value: prevState.value - 1
            }
          }
        )
    }

    resetButton(){
       this.setState((prevState) => {
          return{
                value: 0
          }
        }
      )
    }
}

