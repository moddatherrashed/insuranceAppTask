import React from 'react'
import {Text , StyleSheet ,TouchableOpacity } from 'react-native'


const Button = (props) => {

    return(
        <TouchableOpacity onPress = {props.onPress} style ={styles.btnStyle}>
            <Text style={styles.textStyle}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create(
    {
        btnStyle : {
            backgroundColor : '#FFFFFF',
            height : 50 ,
            borderRadius : 5 ,
            borderWidth : 1,
            borderColor : "#007aff",
            padding : 10,
            alignSelf : 'stretch',
            marginBottom : 5,
            marginTop : 5,
            marginLeft : 5 ,
            marginRight : 5 ,
            justifyContent : 'center',
            alignItems : 'center'
        },
        textStyle : {
            color : '#007aff',
            fontWeight : '600',
            fontSize : 16,
            paddingTop : 5 ,
            paddingBottom : 5
        }
    }
)

export  {Button}