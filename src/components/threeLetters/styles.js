import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


const styles = StyleSheet.create({
    lettersContainer: {
        width: wp("100%"),
        marginBottom: hp("4%"),
        flexDirection: "column",
        backgroundColor: "yellow",
        alignSelf: "flex-start"
    },
    lettersSubcontainer: {
        flexDirection: "row",
        // width: wp("100%"),
        paddingLeft: wp("9.25%"),
        paddingRight: wp("2.25%"),
        marginBottom: hp("2.5%")
    },
    letterBlock: {
        width: wp("24%"),
        height: hp("13%"),
        marginRight: wp("5.5%"),
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    blockText: {
        resizeMode: "contain",
        transform: [{scale: 0.85}]
    },
})

export default styles