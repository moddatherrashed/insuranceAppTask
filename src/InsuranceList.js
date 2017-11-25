import React,{Component} from 'react'
import {View , Text , Button} from 'react-native'
import {StackNavigator} from 'react-navigation'


class InsuranceList extends Component {

    static navigationOptions  = {
        title : 'Insurance List',
        headerLeft: null        
    }

    render(){
        const {navigate} = this.props.navigation
        
        return(
            <View>
                <Text>hello world from insrauce list</Text>
                <Button
                    title="Add Insurance"
                    onPress={()=> navigate('Add')}/>
            </View>
        )
    }
}

export default InsuranceList