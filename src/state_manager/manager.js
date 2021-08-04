import React, {useReducer} from 'react'
import { Audio } from 'expo-av';
import provider from '../provider/dataProvider'

const StateContext = React.createContext()

const stateReducer = (state, action) => {

    switch (action.type){
        case "start_background_music": 
            return {...state, isBackgroundMusic: true}

        case "stop_background_music": 
            return {...state, isBackgroundMusic: false}

        case "setPosition_letter": 
            return {...state, position: action.payload.position, letter: action.payload.letter}
        
        case "set_play": 
            return {...state, play: action.payload}

        case "set_next":
            return {...state, position: action.payload.position, play: action.payload.play, letter: action.payload.letter}
    }

}



export const StateProvider = (props) => {

    const [state, dispatch] = useReducer(stateReducer,{
        backgroundMusic: new Audio.Sound(), isBackgroundMusic: null, music: new Audio.Sound(), position: {row: null, column: null},
        play: false, letter: null
    })

    const startBackgroundMusic = async() => {
        if(!state.isBackgroundMusic){
            await dispatch({type: "start_background_music"})
            if(state.isBackgroundMusic === null){
                await state.backgroundMusic.loadAsync(require('../../assets/backgroundSong/rhyme_song2.mp3'));
                await state.backgroundMusic.setIsLoopingAsync(true);
            }
            await state.backgroundMusic.playAsync();
        }
    }

    const stopBackgroundMusic = async () => {
        await state.backgroundMusic.stopAsync()
        await dispatch({type: "stop_background_music"})
    }

    const goRhymePage = async (navigation, row, column) => {
        await dispatch({type: "setPosition_letter", payload: {
            position: {row, column},
            letter: provider.letterRows[row].letters[column]
        }})
        await navigation.navigate("Rhymes")
    }

    const willRhymePage = async () => {
        await state.music.unloadAsync()
        await state.music.loadAsync(provider.letterRows[state.position.row].rhyme[state.position.column])
        //await state.music.setIsLoopingAsync(true)
    }

    const togglePlay = async () => {
        if(state.play){
            await state.music.stopAsync()
        }
        else{
            await state.music.playAsync()
        }
        await dispatch({type: "set_play", payload: !state.play})
    }

    const toggleNext = async (type) => {
        let column;
        let row = state.position.row

        if(type === "next"){
            if(state.position.column + 1 >= provider.letterRows[row].rhyme.length){
                column = 0
                if(state.position.row + 1 < provider.letterRows.length){
                    row = state.position.row + 1
                }
                else{
                    row = state.position.row
                    column = state.position.column
                }
                
            }
            else{
                column = state.position.column + 1
            }
        }
        else{
            if(state.position.column - 1 < 0){
                if(state.position.row - 1 < 0){
                    row = 0
                    column = 0
                }
                else{
                    row = state.position.row - 1
                    column = (provider.letterRows[row].rhyme.length) - 1
                }
            }
            else{
                column = state.position.column - 1
            }
        }
        console.log({column, row})

        await dispatch({type: "set_next", payload: {
            position: {
                row: row, column: column
            },
            play: false,
            letter: provider.letterRows[row].letters[column]
        }})
        await state.music.stopAsync()
        await state.music.unloadAsync()
        await state.music.loadAsync(provider.letterRows[row].rhyme[column])
        await state.music.setIsLoopingAsync(true);
    }

    const stopRhyme = async () => {
        await state.music.stopAsync()
        await dispatch({type: "set_play", payload: false})
    }


    const boundActions = {
       startBackgroundMusic,
       stopBackgroundMusic,
       goRhymePage,
       willRhymePage,
       togglePlay,
       toggleNext,
       stopRhyme
    }


    return (
        <StateContext.Provider value={{state: state, ...boundActions}}>
            {props.children}
        </StateContext.Provider>
        )

}

export default StateContext