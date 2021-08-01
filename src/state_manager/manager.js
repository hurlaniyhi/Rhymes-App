import React, {useReducer} from 'react'
import { Audio } from 'expo-av';

const StateContext = React.createContext()

const stateReducer = (state, action) => {

    switch (action.type){
        case "start_background_music": 
            return {...state, isBackgroundMusic: true}

        case "stop_background_music": 
            return {...state, isBackgroundMusic: false}
    }

}



export const StateProvider = (props) => {

    const [state, dispatch] = useReducer(stateReducer,{backgroundMusic: new Audio.Sound(), isBackgroundMusic: null})

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

    const boundActions = {
       startBackgroundMusic,
       stopBackgroundMusic
    }


    return (
        <StateContext.Provider value={{state: state, ...boundActions}}>
            {props.children}
        </StateContext.Provider>
        )

}

export default StateContext