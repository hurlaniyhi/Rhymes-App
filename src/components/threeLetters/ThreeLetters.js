import React, {useContext} from 'react'
import { TouchableOpacity, Image, View } from "react-native";
import DataContext from '../../state_manager/manager'
import styles from './styles'
import dataProvider from '../../provider/dataProvider'


const ThreeLetters = ({ navigation, position }) => {

    const {stopBackgroundMusic, goRhymePage} = useContext(DataContext)

    async function rhymeScreen(row, column){
        await stopBackgroundMusic()
        goRhymePage(navigation, row, column)
    }
    
    let length = position === 8 ? [0, 1] : [0, 1, 2]
    let info = length.map(data => {
       
        return(
            <TouchableOpacity 
                activeOpacity= {0.7}
                key={`${position}${data}`}
                onPress={() => rhymeScreen(position, data)}
                style={[styles.letterBlock, {backgroundColor: dataProvider.letterRows[position].colors[data]}]}>
                <Image 
                    source={dataProvider.letterRows[position].ImageUrl[data]}
                    style={styles.blockText}
                />
            </TouchableOpacity>
        )
    })
    
    return(
        <View style={styles.lettersSubcontainer}>
            {info}
        </View>
    )
}

export default ThreeLetters