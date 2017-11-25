import React , {Component} from 'react'
import {StackNavigator} from 'react-navigation'
import {Text,View,StyleSheet} from 'react-native'


class AddInsurance extends Component {
    static navigationOptions  = {
        title : 'Add'
    }
    render(){
        return(
            <View style={styles.containerStyle} >
            
            </View>
        )
    }

}
const styles = StyleSheet.create({
    containerStyle : {
        backgroundColor : '#007aff',
         flex :1
    }
})
export default AddInsurance