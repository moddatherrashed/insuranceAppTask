import React , {Component} from 'react'
import {StackNavigator} from 'react-navigation'
import {Text,View} from 'react-native'


class AddInsurance extends Component {
    static navigationOptions  = {
        title : 'Add'
    }
    render(){
        return(
            <View><Text>here is add insurance</Text></View>
        )
    }

}

export default AddInsurance