import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import {SafeAreaView} from 'react-navigation'
import styles from './styles'


const Rhymes = ({navigation}) => {

    return(
        <SafeAreaView forceInset={{top: "always"}}>
            <TouchableOpacity onPress={() => navigation.navigate("LetterSelection")}>
                <Text>Rhymes Page</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

Rhymes.navigationOptions = {
    headerShown: null
}

export default Rhymes