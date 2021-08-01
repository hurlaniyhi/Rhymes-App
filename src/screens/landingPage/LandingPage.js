import React, {useContext} from "react";
import { TouchableOpacity, View, Image } from "react-native";
import {SafeAreaView, NavigationEvents} from 'react-navigation'
import DataContext from '../../state_manager/manager'
import styles from './styles'



const LandingPage = (props) => {

  const {startBackgroundMusic} = useContext(DataContext)

  return (
    <SafeAreaView forceInset={{top: "always"}} style={styles.areaView}>
      <NavigationEvents onWillFocus={startBackgroundMusic}/>
      <View style={styles.container}>
        <Image 
          source={require("../../../assets/images/Rymz.png")}
          style={styles.title}
        />
        <Image 
          source={require("../../../assets/images/children.png")}
          style={styles.image}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={() => props.navigation.navigate("LetterSelection")}>
          <Image 
            source={require("../../../assets/images/start.png")}
            style={styles.button}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};

export default LandingPage;