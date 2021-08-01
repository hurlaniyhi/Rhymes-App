// Landing Page Styles
import { StyleSheet, YellowBox } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


const styles = StyleSheet.create({
    title: {
        // width: 150,
        // height: 60,
        // position: "absolute",
        // top: hp("8%"),
        transform: [{scale: 0.95}],
        resizeMode: "contain"
    },
    text: {
      fontSize: 25,
      textAlign: "center",
      color: "white",
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      width: wp("20%"),
      fontWeight: "bold"
    },
    areaView: {
        flex: 1, 
        backgroundColor: "#FFBDD5"
    },
    container: {
        flex: 1, 
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    image: {
        // width: wp("80%"),
        // height: hp("40%"),
        //transform: [{scale: 0.9}],
        marginBottom: hp("2%"),
        resizeMode: "contain"
    },
    button: {
        // width: 300,
        // height: 90,
        //transform: [{scale: 0.6}],
        resizeMode: "contain"
    },
    buttonContainer: {
        // position: "absolute",
        // bottom: hp("13%")
    }
  });

  export default styles;

  //  <LinearGradient
//   // Button Linear Gradient
//   colors={['#FF005C','#FF98BD','#FF005C']}
//   start={[0.2, 0.4, 0.8]}
//   style={styles.button}>
//   <Text style={styles.text}>Start</Text>
// </LinearGradient>