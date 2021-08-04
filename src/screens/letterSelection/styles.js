// Letter Selection Page Styles
import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


const styles = StyleSheet.create({
    areaView: {
        flex: 1, 
        backgroundColor: "#FFDEEA",
        alignItems: "center"
    },
    text: {
        fontSize: 20
    },
    backButtonContainer: {
        position: "absolute",
        left: wp("7%"),
        top: hp("6%"),
        activeOpacity: 0.7
    },
    backButton: {
        resizeMode: "contain",
    },
    title: {
        position: "absolute",
        left: wp("50%"),
        top: hp("7.5%"),
        transform: [{translateX: wp("-15%")}]
    }
})

export default styles