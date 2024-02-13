import { View, StyleSheet, Dimensions } from "react-native";

function Card({children}) {
    return(
      <View style={styles.inputContainer}>
        {children}
      </View>
    )
}

export default Card;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: deviceWidth < 350 ? 18 : 20,
        marginHorizontal: 24,
        backgroundColor: "#4e0329",
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
      },
})