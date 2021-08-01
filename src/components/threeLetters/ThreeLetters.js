import React, {useContext} from 'react'
import { TouchableOpacity, Image, View } from "react-native";
import DataContext from '../../state_manager/manager'
import styles from './styles'
import dataProvider from '../../provider/dataProvider'


const ThreeLetters = ({ navigation, position }) => {

    const {stopBackgroundMusic} = useContext(DataContext)

    async function stopMusic(){
        stopBackgroundMusic()
        navigation.navigate("Rhymes")
    }
    
    let length = position === 8 ? [0, 1] : [0, 1, 2]
    let info = length.map(data => {
       
        return(
            <TouchableOpacity 
                key={`${position}${data}`}
                onPress={stopMusic}
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