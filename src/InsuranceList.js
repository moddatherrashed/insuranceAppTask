import React,{Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {StackNavigator} from 'react-navigation'
import {CardSection, Button} from './components'

class InsuranceList extends Component {

    static navigationOptions  = {
        title : 'Insurance List',
        headerLeft: null        
    }

    render(){
        const {navigate} = this.props.navigation
        
        return(
            <View style={styles.containerStyle} >    
                <CardSection>
                    <Text>here is the list</Text>
                </CardSection>
                <CardSection>
                <Text>here is the amount of the yearly cost</Text>
                </CardSection>
                <Button text= 'Add Insurance' onPress = {()=> navigate('Add')}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    containerStyle : {
        flex : 1,
        backgroundColor : '#007aff'
    }
})

export default InsuranceList