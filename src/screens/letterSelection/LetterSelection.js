import React, { useEffect, useContext } from "react";
import { TouchableOpacity, Image, ScrollView, View } from "react-native";
import {SafeAreaView, NavigationEvents} from 'react-navigation'
import DataContext from '../../state_manager/manager'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import ThreeLetters from '../../components/threeLetters/ThreeLetters'
import styles from './styles'


const LetterSelection = ({navigation}) => {

  const {startBackgroundMusic} = useContext(DataContext)

  let rowArray = [...Array(9).keys()].map(item => {
    return <ThreeLetters key={item} navigation={navigation} position={item} />
  })

  return  (
    <SafeAreaView style={styles.areaView} forceInset={{top: "always"}}>
      <NavigationEvents onWillFocus={startBackgroundMusic}/>
      {/* <TouchableOpacity style={styles.backButtonContainer} onPress={() => navigation.navigate("LandingPage")}>
        <Image 
          source={require("../../../assets/images/back.png")}
          style={styles.backButton}
        />
      </TouchableOpacity> */}
      <Image 
        source={require("../../../assets/images/Letters.png")}
        style={styles.title}
      />
      <ScrollView style={{marginTop: hp("12%")}}>
        <View style={styles.lettersContainer}>
          {rowArray}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
  
};

LetterSelection.navigationOptions = {
    headerShown: null
}

export default LetterSelection;
