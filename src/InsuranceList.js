import React,{Component} from 'react'
import {View, Text, StyleSheet,ListView,TouchableOpacity,Alert} from 'react-native'
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
            const {dataSource,count} = this.state
            
            if(values.length > 0){
                for (var i = 0; i < values.length; i++)
                {
                    this.setState({ dataSource: dataSource.cloneWithRows(values),
                                    count : count+parseInt(values[i].price) });
                }
            }
        }).catch((error)=>  alert('you dont have any insurances'))
    }  
    static navigationOptions  = {
        title : 'Insurance List',
        headerLeft: null        
    }

    render(){
        const {navigate} = this.props.navigation
        const {dataSource,count} = this.state
        return(
            <View style={styles.containerStyle} >    
                <CardSection>
                <ListView
                enableEmptySections={true}
                dataSource = {dataSource}
                renderRow = {(rowData) => 
                <TouchableOpacity onPress={
                        () =>{
                            Alert.alert(
                                'WARNING !!!',
                                'Are you sure you want to remove this ?',
                                [
                                  {text: 'Remove', onPress: () => {
                                    api.getCat(
                                        "http://www.moddather.net/moddatherTask/delete_insurance/"+rowData.id
                                    ).then((res) => {            
                                        alert(res.message)
                                        
                                    })
                                    navigate('Home')
                                  }},
                                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                ],
                                { cancelable: false }
                              )
                        }
                    }>
                    <CardSection>
                        <Text>title : {rowData.title}</Text>
                        <Text>yearly cost : {rowData.price}</Text>
                        <Text>catagory : {rowData.cat}</Text>
                    </CardSection>
                </TouchableOpacity>
                }/>

                </CardSection>
                <CardSection>
                <Text>amount of yearly cost : {count}</Text>
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