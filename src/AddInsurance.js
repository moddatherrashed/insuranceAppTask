import React , {Component} from 'react'
import {StackNavigator} from 'react-navigation'
import {Text,View,StyleSheet,Picker} from 'react-native'
import {Input, Button, CardSection} from './components'
import api from './api'

class AddInsurance extends Component {
    state = {title : '', price : '', singleCat : '', cat : [] }
    
    static navigationOptions  = {
        title : 'Add',
        headerTintColor: '#007aff'
        
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
            cat => <Picker.Item style = {styles.textStyle} key={cat.pageid} label={(cat.title).substring(9)} value={(cat.title).substring(9)} />
        )
    }
    render(){
        const {navigate} = this.props.navigation
        const {price, singleCat , title} = this.state
        return(
            <View style={styles.containerStyle} >
                <CardSection>
                    <Input  
                        placeholder = "Title"
                        label = 'Insurance Title'
                        value = {title}
                        onChangeText = {title => this.setState({title})} />
                </CardSection>
                <CardSection>
                    <Input  
                        placeholder = "CHF"
                        label = 'Yearly Cost'
                        value = {price}
                        onChangeText = {price => this.setState({price})} />
                </CardSection>
                <CardSection>
                    <Text style = {styles.textStyle}>Catagory</Text>
                    <Picker
                        style = {styles.textStyle}
                        selectedValue={singleCat}
                        onValueChange={(itemValue, itemIndex) => this.setState({singleCat: itemValue})}>
                        <Picker.Item  style = {styles.textStyle} label="Please chose a catagory"/>
                        {this.renderCat()}
                    </Picker>
                </CardSection>
                <Button text= 'Done' onPress = {()=> {
                        if(title.trim()  === '' ){
                            alert('please fill title')
                        }else if (price.trim()  === '' ){
                            alert('please fill price')
                        }else if(singleCat === ''){
                            alert('please chose the catagory')
                        }else {
                            var data = {
                                "title": title,
                                "price": price,
                                "cat" : singleCat
                             }
                             
                             fetch("http://www.moddather.net/moddatherTask/insert_insurance", {
                                method: "POST",
                                headers: new Headers({
                                    "Content-Type": "application/json",
                                  }),
                                body:  JSON.stringify(data)
                             })
                             .then((res) =>{
                                alert(JSON.parse(res._bodyInit).message)
                                
                             } )
                             .catch(error => console.log(error));
                             navigate('Home')
                        }
                }}/>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    containerStyle : {
        backgroundColor : '#007aff',
         flex :1
    },
    textStyle : {
        color : '#007aff'
        
    }
})
export default AddInsurance