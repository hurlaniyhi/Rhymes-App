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
            return {...state, position: action.payload.position, letter: action.payload.letter, stopTime: action.payload.stopTime}
        
        case "set_play": 
            return {...state, play: action.payload}

        case "set_next":
            return {...state, position: action.payload.position, play: action.payload.play, letter: action.payload.letter, stopTime: action.payload.stopTime}

        case "set_interval":
            return {...state, interval: action.payload}

        case "set_rhyme_bar":
            if(action.payload >= 80){
                //state.music.stopAsync()
                clearInterval(state.interval)
            }
                return {...state, rhymeBar: action.payload}
           

        case "set_start_time":
            if(state.rhymeBar >= 80){
                action.payload = state.stopTime
            } 
            return {...state, startTime: action.payload}

        case "set_current_time":
            return {...state, currentTime: 0}
    }

}



export const StateProvider = (props) => {

    const [state, dispatch] = useReducer(stateReducer,{
        backgroundMusic: new Audio.Sound(), isBackgroundMusic: null, music: new Audio.Sound(), position: {row: null, column: null},
        play: false, letter: null, interval: null, rhymeBar: 0, startTime: "00:00", stopTime: "", currentTime: 0
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
            letter: provider.letterRows[row].letters[column],
            stopTime: provider.letterRows[row].duration[column]
        }})
        await navigation.navigate("Rhymes")
    }

    const willRhymePage = async () => {
        await state.music.unloadAsync()
        await state.music.loadAsync(provider.letterRows[state.position.row].rhyme[state.position.column])
        //await state.music.setIsLoopingAsync(true)
    }

    async function setRhymeTime(){
        let stopTime =  provider.letterRows[state.position.row].duration[state.position.column].split(':').reduce((acc,time) => (60 * acc) + +time);
        // let everyInterval = String(Number(stopTime)/80).replace(".","")
        // everyInterval = everyInterval.length === 1 ? `${everyInterval}000` : everyInterval.length === 2 ? `${everyInterval}00`
        //  : everyInterval.length === 3 ? `${everyInterval}0` : everyInterval.substring(0,4)

        //  everyInterval = everyInterval[0] == '0' ? everyInterval.substring(1, everyInterval.length) : everyInterval
        //  everyInterval = Number(everyInterval)

        state.currentTime++

        let interval = setInterval(async () =>{

            let currentTime = new Date((state.currentTime++) * 1000).toISOString().substr(11, 8).substring(3, 8)
            state.rhymeBar = state.rhymeBar + (80/Number(stopTime))
            await dispatch({type: "set_rhyme_bar", payload: state.rhymeBar})
            await dispatch({type: "set_start_time", payload: currentTime})
        }, 1000)

        await dispatch({type: "set_interval", payload: interval})
    }

    const togglePlay = async () => {
        if(state.play){
            await state.music.stopAsync()
            clearInterval(state.interval)
            await dispatch({type: "set_rhyme_bar", payload: 0})
            await dispatch({type: "set_start_time", payload: "00:00"})
            await dispatch({type: "set_current_time"})
        }
        else{
            setRhymeTime()
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

        await dispatch({type: "set_next", payload: {
            position: {
                row: row, column: column
            },
            play: false,
            letter: provider.letterRows[row].letters[column],
            stopTime: provider.letterRows[row].duration[column]
        }})
        await state.music.stopAsync()
        await state.music.unloadAsync()
        await state.music.loadAsync(provider.letterRows[row].rhyme[column])
        //await state.music.setIsLoopingAsync(true);
        clearInterval(state.interval)
        await dispatch({type: "set_rhyme_bar", payload: 0})
        await dispatch({type: "set_start_time", payload: "00:00"})
        await dispatch({type: "set_current_time"})
    }

    const stopRhyme = async () => {
        await state.music.stopAsync()
        await dispatch({type: "set_play", payload: false})
        clearInterval(state.interval)
        await dispatch({type: "set_rhyme_bar", payload: 0})
        await dispatch({type: "set_start_time", payload: "00:00"})
        await dispatch({type: "set_current_time"})
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