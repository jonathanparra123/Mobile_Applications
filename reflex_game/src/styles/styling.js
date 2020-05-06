import { StyleSheet } from 'react-native';

export default StyleSheet.create({

//style for main screen
    title:{
        color:'red',
        fontSize:40,
        alignSelf: 'center',
    },

//main screen container
    main_container:{
        flex: 1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'space-around',
    },

//containers for grids
    container1:{
        flex:1,
    },

    container4:{ 
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    container2:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'space-around',
    },

    container3: {
        flex: 6,
        backgroundColor: 'white',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },

//style container for buttons and tiles
    startButton: {
        textAlign: 'center', 
        fontSize: 20,
        color: 'white',
        backgroundColor:'black',
        height: 70,
        width: 100,
      },

      gameButton:{
          backgroundColor: 'white',
          height: 70,
          width: 70,
      },

      timer:{
        textAlign: 'center', 
        fontSize: 30,
        color: 'blue',
      },

      point:{
          textAlign: 'center',
          fontSize: 30,
          color: 'blue',
      },

      congrats:{
          fontSize: 30,
          color: 'red',
          textAlign: 'center',
      },

      score:{
            fontSize: 30,
            color: 'red',
            textAlign: 'center',
            },

      buttonShow:{
            backgroundColor:'yellow',
            height: 70,
            width: 70,
      },

      buttonShow2:{
            backgroundColor:'#eb9694',
            height: 70,
            width: 70,
      },

      button_2:{
          backgroundColor:'white',
          height: 70,
          width: 70,
      }
  });