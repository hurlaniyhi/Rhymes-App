import React, {useState, useEffect, useContext} from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'
import {SafeAreaView, NavigationEvents} from 'react-navigation'
import {FontAwesome} from '@expo/vector-icons'
import DataContext from '../../state_manager/manager'
import style from '../letterSelection/styles'
import styles from './styles'


const Rhymes = ({navigation}) => {

    //const rhymeData = navigation.getParam("rhymeInfo")
    const {state, willRhymePage, togglePlay, toggleNext, stopRhyme} = useContext(DataContext)

    useEffect(() => {

       return () => {
           stopRhyme()
       }
    }, [])


    return(
        <SafeAreaView style={style.areaView} forceInset={{top: "always"}}>
            <NavigationEvents onWillFocus={willRhymePage}/>
            <TouchableOpacity 
                activeOpacity= {0.7}
                style={style.backButtonContainer} 
                onPress={() => navigation.navigate("LetterSelection")}>
            <Image 
                source={require("../../../assets/images/back.png")}
                style={style.backButton}
            />
            </TouchableOpacity>

            <Image
                source={require("../../../assets/images/Rhyme.png")}
                style={style.title}
            />

            <View style={styles.circleContainer}>
                <Image
                    source={require("../../../assets/images/circle.png")}
                    style={styles.circle}
                />
                <View style={styles.circleBackground}></View>
                <Image
                    source={state.letter}
                    style={styles.circleLetter}
                />
            </View>

            <View style={[styles.border, styles.borderTop]}></View>

            <Image
                source={require("../../../assets/images/apple.png")}
                style={[styles.letterImages]}
            />

            <View style={[styles.border, styles.borderBottom]}></View>

            <Text style={styles.letterMeaning}>a is in apple</Text>

            <View style={styles.rhymeBar}>
                <Text style={styles.rhymePositionReader}></Text>
                <View style={styles.rhymePositionPointer}></View>
            </View>

            <View style={styles.rhymeTimeContainer}>
                <Text style={styles.rhymeTime}>00:52</Text>
                <Text style={styles.rhymeTime}>01:18</Text>
            </View>

            <View style={styles.rhymeControllerContainer}>
                <TouchableOpacity 
                    activeOpacity= {0.7}
                    style={style.rhymeToggler} 
                    onPress={() =>toggleNext("prev")}>
                    <Image 
                        source={require("../../../assets/images/previous.png")}
                        style={styles.togglerButton}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    activeOpacity= {0.7}
                    style={styles.rhymeToggler} 
                    onPress={togglePlay}>
                    {!state.play ? <FontAwesome
                        name="play"
                        style={styles.playButton}
                    /> : <FontAwesome
                        name="pause"
                        style={styles.playButton}
                    />}
                </TouchableOpacity>
                <TouchableOpacity 
                    activeOpacity= {0.7}
                    style={style.rhymeToggler} 
                    onPress={() =>toggleNext("next")}>
                    <Image 
                        source={require("../../../assets/images/next.png")}
                        style={styles.togglerButton}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

Rhymes.navigationOptions = {
    headerShown: null
}

export default Rhymes