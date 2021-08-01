import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation'
import { StateProvider } from './src/state_manager/manager';
import StateContext from './src/state_manager/manager';
import LandingPage from "./src/screens/landingPage/LandingPage";
import LetterSelection from './src/screens/letterSelection/LetterSelection';
import Rhymes from './src/screens/rhymes/rhyme';


const RhymeFlow = createStackNavigator({
  LetterSelection,
  Rhymes
})

const switchNavigator = createSwitchNavigator({
  LandingPage,
  loginFlow: RhymeFlow
})

const App = createAppContainer(switchNavigator);

export default () => {
  return(
        <StateProvider>
          <App />                  
        </StateProvider>
  )
}
