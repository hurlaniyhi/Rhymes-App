import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


const styles = StyleSheet.create({
    circleContainer: {
        height: Platform.OS === 'ios' ? hp("33%") : hp("38%"), 
        marginTop: hp("12%"),
        width: wp("100%"),
        justifyContent: "center",
        alignItems: "center"
    },
    circle: {
        resizeMode: "contain",
        height: Platform.OS === 'ios' ? hp("33%") : hp("38%"),
    },
    circleBackground: {
        width: wp("61.5%"), //55.5
        height: Platform.OS === 'ios' ? hp("28%") : hp("31.5%"),
        borderRadius: wp("100%"),
        backgroundColor: "#C9F9E2",
        position: "absolute"
    },
    circleLetter: {
        resizeMode: "contain",
        position: "absolute",
        transform: [{scale: 1}]
    },
    border: {
        height: hp("0.55%"),
        width: wp("100%"),
        backgroundColor: "#FF005C"
    },
    borderTop: {
        marginTop: Platform.OS === 'ios' ? hp("3%") : hp("4%"),
        marginBottom: hp("1%")
    },
    borderBottom: {
        marginTop: hp("1%"),
        marginBottom: hp("2%")
    },
    letterImages: {
        resizeMode: "contain",
        height: hp("16%"),
    },
    letterMeaning: {
        fontSize: hp("3.5%"), 
        fontFamily: Platform.OS === 'ios' ? 'Noteworthy' : 'sans-serif-condensed',
        fontWeight: "bold",
        color: "#FF005C"
    },
    rhymeBar: {
        width: wp("80%"),
        height: hp("0.3%"),
        backgroundColor: "#C4C4C4",
        marginTop: Platform.OS === 'ios' ? hp("4.5%") : hp("5%"),
        borderRadius: 50,
    },
    rhymePositionReader: {
        width: wp("53%"),
        backgroundColor: "#FF005C",
        height: hp("0.3%")
    },
    rhymePositionPointer: {
        position: "absolute",
        width: wp("4%"),
        height: wp("4%"),
        borderRadius: wp("100%"),
        backgroundColor: "#FF005C",
        top: hp("-0.9%"),
        left: wp("53%")
    },
    rhymeTimeContainer: {
        width: wp("80%"),
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: hp("1%"),
    },
    rhymeTime: {
        fontSize: Platform.OS === 'ios' ? hp("1.1%") : hp("1.3%"),
        fontWeight: "bold"
    },
    rhymeControllerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: hp("8.5%"),
        width: wp("80%"),
        paddingHorizontal: wp("4%"),
        marginTop: Platform.OS === 'ios' ? hp("2%") : hp("1.5%")
    },
    togglerButton: {
        resizeMode: "contain"
    },
    playButton: {
        fontSize: Platform.OS === 'ios' ? hp("7.5%") : hp("8.5%")
    }
})

export default styles