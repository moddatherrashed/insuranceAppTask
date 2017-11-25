import React from 'react'
import {View, StyleSheet} from 'react-native'

const CardSection = (props) => {
    //destructuring the styling obj 
    const {containerStyle} = styles
    
    return(
        <View style={containerStyle}>
            {props.children}
        </View>
    )

}

const styles = StyleSheet.create(
    {
        containerStyle : {
            borderBottomWidth : 1,
            padding : 5 ,
            borderRadius : 5 ,
            borderWidth : 1,
            padding :  10,
            maxHeight : 300 ,
            marginLeft : 5 ,
            marginRight : 5,
            marginBottom : 3 ,
            backgroundColor :'#FFFFFF',
            justifyContent : 'flex-start',
            borderColor : '#007aff',
            position : 'relative'
        }
    }
)
export  {CardSection}