import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/styling';
import Counter from './Counter';
import StartButtons from './StartButtons';
import Points from './Points';

export default class main extends Component{

constructor(props){
        super(props);

        //class variables for state
        this.state = {
            count: 20,
            score: 0,
            won: false,
            complete: false,
            level1: false,
            level2:false,
            lost: false,
        }

        //class variables
        this.ranN1
        this.ranN2
        this.changeBack1
        this.changeBack2
        this.stop
        this.grid1 = []
        this.grid2 = []
}

render(){
            //renders level or start screen
            if(!this.state.lost)
            {
                if(!this.state.level1 && !this.state.level2){
                return this.StartButton();
                }
                else if(this.state.level1 && !this.state.level2){
                return this.PlayLevel1();
                }
                else if(!this.state.level1 && this.state.level2){
                return this.PlayLevel2();
                }
            }
            //renders game over screen
            else
            {
                return(
                    <View style = {styles.main_container}>
            
                    <Text style = {styles.title}>
                        GAME OVER!
                    </Text>

                    <StartButtons
                      name = 'Play again'
                      pressing = {()=>this.RunPlayLevelAgain2()}/>

                    </View>
                    )
            }
}

//displays start screens for each level
StartButton(){
            //start screen for level 1
            if(!this.state.won && !this.state.complete){
            return(
                <View style = {styles.container2}>
                <Text style = {styles.congrats}>
                    Tap at least 15 squares to advance!
                    </Text>
                <StartButtons
                name = 'Start Level 1'
                pressing = {()=>this.RunPlayLevel1()}/>
                </View> 
            )
        }
           //start screen for level 2
           else if(this.state.won && !this.state.complete) {  

                this.StopTimer(this.stop) //stop first timer

                return(
                <View style = {styles.container2}>
                <Text style = {styles.congrats}>
                CONGRATS!!!!
                </Text>
                <Text style = {styles.score}>
                your score was: {this.state.score}
                </Text>
                <StartButtons
                name = 'Start Level 2'
                pressing = {()=>this.RunPlayLevel2()}/>
                 </View>
             )
            }
            //screen for beating levels
            else if(!this.state.won && this.state.complete){

               this.StopTimer(this.stop)// stop second timer

                return(
                    <View style = {styles.container2}>
        
                    <Text style = {styles.congrats}>
                     You Win!
                    </Text>
                    <Text style = {styles.score}>
                     your score was: {this.state.score}
                    </Text>
                    <StartButtons
                    name = 'Play again'
                    pressing = {()=>this.RunPlayLevelAgain()}/>  
        
                     </View> 
                 )
            }
}

//level 1 method that displays grid
PlayLevel1(){
            this.MakeGird1()

            this.check()

                return(

                <View style = {styles.container1}>

                <View style = {styles.container4}>
        
                <Counter 
                counter = {this.state.count}/>
        
                <Points 
                point = {this.state.score}/>
    
                </View>
                <View style = {styles.container3}>

                {this.ShowRandom()}
                
                </View>

                </View>
            )
}

//level 2 method that displays grid for second level
PlayLevel2(){

            this.MakeGird2()

            this.check2()

            return(
                    <View style = {styles.container1}>
        
                    <View style = {styles.container4}>
            
                    <Counter 
                    counter = {this.state.count}/>
            
                    <Points 
                    point = {this.state.score}/>
        
                    </View>
    
                    <View style = {styles.container3}>
        
                    {this.ShowRandom2()}
                    
                    </View>
        
                    </View>
                )

}

//method that keeps track of the score in level 1
Scoring1(){

                    this.changeBack1 = this.ranN1
                    this.ranN1 = this.RandomNum()

                    this.grid1[this.changeBack1] = <TouchableOpacity
                    style = {styles.gameButton}/>

                     this.setState(
                        (prevState) => {
                            return{score: prevState.score + 1}
                            }
                        )
}

//method that keeps track of the score in level 2
Scoring2(){

                this.changeBack2 = this.ranN2
                this.ranN2 = this.RandomNum()

                this.grid2[this.changeBack2] = <TouchableOpacity
                style = {styles.button_2}/>

                 this.setState(
                    (prevState) => {
                        return{score: prevState.score + 1}
                        }
                    )
}

//method that starts timer
Timer(){
           this.stop = setInterval(
                 () => this.setState(
                (prevState) => {
                    return{count : prevState.count - 1}
                     }
                 ), 1000)
}

//method that stops timer
StopTimer(value){clearInterval(value)}

//method to signal start of level 1
RunPlayLevel1(){

            this.ranN1 = this.RandomNum()

            this.Timer() //start first timer
            
            this.setState((prevState)=>{
                return{level1: !prevState.level1}
            }
        )
}

//method to signal start of level 2
RunPlayLevel2(){

            this.ranN2 = this.RandomNum()

            this.Timer() //start second timer

            this.setState((prevState)=>{
                return{
                    level2: !prevState.level2,
                    count: 15,
                    score: 0,
                }
            }
       )
}

//method to signal start of new game when you win
RunPlayLevelAgain(){

            this.StopTimer(this.stop) //stops current timer

            this.grid1[this.ranN1] = <TouchableOpacity
            style = {styles.gameButton}/>

            this.grid2[this.ranN2] = <TouchableOpacity
                style = {styles.button_2}/>

            this.setState((prevState)=>{
                return{
                    complete: false,
                    count: 20,
                    score: 0,
                    won: false,
                }
            }
         )
}

//method to signal start of new game when you lose
RunPlayLevelAgain2(){

            this.StopTimer(this.stop) //stops current timer

            this.grid1[this.ranN1] = <TouchableOpacity
            style = {styles.gameButton}/>

            this.grid2[this.ranN2] = <TouchableOpacity
                style = {styles.button_2}/>

            this.setState((prevState)=>{
                return{
                lost: false,
                level1: false,
                level2: false,
                count: 20,
                score: 0,
                complete: false,
                won: false,
                }
            }
         )
}

//array of tiles for level 1
MakeGird1(){
            
            for(let i = 0 ; i < 5; i++)
            {
                for(let j = 0; j < 8; j++)
                        {
                         this.grid1.push(<TouchableOpacity
                            style = {styles.gameButton}/>
                            )
                        }   
                    }
}

//array of tiles for level 2
MakeGird2(){
    
    for(let i = 0 ; i < 5; i++){
          for(let j = 0; j < 8; j++){
                 this.grid2.push(<TouchableOpacity
                    style = {styles.button_2}/>
                  )
                }   
            }
}

//shows individual random tiles for level 1
ShowRandom(){

           this.grid1[this.ranN1] = <TouchableOpacity
           onPress = {()=>this.Scoring1()}
           style = {styles.buttonShow}/>

           return this.grid1
}

//shows individual random tiles for level 2
ShowRandom2(){

          this.grid2[this.ranN2] = <TouchableOpacity
          onPress = {()=>this.Scoring2()}
          style = {styles.buttonShow2}/>
                
          return this.grid2
}

//generates a random number
RandomNum(){return Math.floor(Math.random()*40)}

//method to check the current state of level 1
check(){

//if player wins the level
    if(this.state.count < 0 && this.state.score >= 15){

        this.setState(
            (prevState)=> {
                return{
        won: !prevState.won,
        level1: !prevState.level1,
        }
    }
   )
    }
//if player loses the level
    else if(this.state.count < 0 && this.state.score < 15){

        this.StopTimer(this.stop) //stops current timer
        this.setState(
            (prevState)=> {
                return{lost: !prevState.lost}
            }
        )
    }
}

//method that checks current state of level 2
check2(){

//if player wins level
    if(this.state.count < 0 && this.state.score >= 15){

     this.setState(
        (prevState)=> {
            return{
        won: !prevState.won,
        complete: !prevState.complete,
        level2: !prevState.level2,
            }
        }
    )
   }
//if player loses level
    else if(this.state.count < 0 && this.state.score < 15){

        this.StopTimer(this.stop) //stops current timer
        this.setState(
            (prevState)=> {
                return{lost: !prevState.lost}
            }
        )
    }
   }
}





