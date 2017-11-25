import React,{Component} from 'react'
import {View, Text, StyleSheet,ListView} from 'react-native'
import {StackNavigator} from 'react-navigation'
import {CardSection, Button} from './components'
import api from './api'

class InsuranceList extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});        
        this.state = {
            count : 0,
            dataSource : ds.cloneWithRows([]),
         }
      }
      componentWillMount(){
        api.getCat(
            "http://www.moddather.net/moddatherTask/get_insurances"
        ).then((res) => {            
            const {values} = res 
            if(values.length > 0){
                for (var i = 0; i < values.length; i++)
                {
                    this.setState({ dataSource: this.state.dataSource.cloneWithRows(values),
                                    count : this.state.count+parseInt(values[i].price) });
                }
            }
        })
    }  
    static navigationOptions  = {
        title : 'Insurance List',
        headerLeft: null        
    }

    render(){
        const {navigate} = this.props.navigation
        
        return(
            <View style={styles.containerStyle} >    
                <CardSection>
                <ListView
                enableEmptySections={true}
                dataSource = {this.state.dataSource}
                renderRow = {(rowData) => 
                <CardSection>
                    <Text>title : {rowData.title}</Text>
                    <Text>yearly cost : {rowData.price}</Text>
                    <Text>catagory : {rowData.cat}</Text>
                </CardSection>
            }/>
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