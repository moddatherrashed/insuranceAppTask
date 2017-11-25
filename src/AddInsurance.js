import React , {Component} from 'react'
import {StackNavigator} from 'react-navigation'
import {Text,View,StyleSheet,Picker} from 'react-native'
import {Input, Button, CardSection} from './components'


class AddInsurance extends Component {
    state = {title : '', price : '', singleCat : '' }
    
    static navigationOptions  = {
        title : 'Add'
    }
    render(){
        const {navigate} = this.props.navigation
        
        return(
            <View style={styles.containerStyle} >
                <CardSection>
                    <Input  
                        placeholder = "Title"
                        label = 'Insurance Title'
                        value = {this.state.title}
                        onChangeText = {title => this.setState({title})} />
                </CardSection>
                <CardSection>
                    <Input  
                        placeholder = "CHF"
                        label = 'Yearly Cost'
                        value = {this.state.price}
                        onChangeText = {price => this.setState({price})} />
                </CardSection>
                <CardSection>
                    <Text>Catagory</Text>
                    <Picker
                        selectedValue={this.state.singleCat}
                        onValueChange={(itemValue, itemIndex) => this.setState({singleCat: itemValue})}>
                        <Picker.Item label="Please chose a catagory"/>
                    </Picker>
                </CardSection>
                <Button text= 'Done' onPress = {()=> navigate('Home')}/>
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