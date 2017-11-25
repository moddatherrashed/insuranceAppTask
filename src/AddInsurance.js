import React , {Component} from 'react'
import {StackNavigator} from 'react-navigation'
import {Text,View,StyleSheet,Picker} from 'react-native'
import {Input, Button, CardSection} from './components'
import api from './api'

class AddInsurance extends Component {
    state = {title : '', price : '', singleCat : '', cat : [] }
    
    static navigationOptions  = {
        title : 'Add'
    }
    componentWillMount(){
        api.getCat(
            "https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Types_of_insurance&cmtype=subcat&format=json&origin=*"
        ).then((res) => {
            const { query: { categorymembers }} = res
            if (categorymembers.length > 0) {
                
                this.setState({
                    cat : categorymembers
               })
            } else {
                alert('some of the objects is empty')
            }

           
        })
    }

    renderCat(){
        return this.state.cat.map(
            cat => <Picker.Item key={cat.pageid} label={(cat.title).substring(9)} value={(cat.title).substring(9)} />
        )
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
                        {this.renderCat()}
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