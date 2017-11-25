import React ,{Component} from 'react'
import {View} from 'react-native'
import {StackNavigator} from 'react-navigation'
import InsuranceList from './src/InsuranceList'
import AddInsurance from './src/AddInsurance'
export const insuranceApp = StackNavigator({
  Home: { screen: InsuranceList },
  Add : {screen : AddInsurance}
});

export default insuranceApp