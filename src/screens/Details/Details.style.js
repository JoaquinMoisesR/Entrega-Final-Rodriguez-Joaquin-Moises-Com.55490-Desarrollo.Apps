import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";


export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.quaternary,
    },
    image: {
        height: 410,
        width: '100%',
        marginVertical: 5,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 28,
        fontFamily: 'CourgetteRegular',
        marginVertical: 2,
        margin:8, 
        textDecorationLine: 'underline'
    },
    price: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 1,
        marginLeft: 5,
    },
    description: {
        marginLeft: 8,
        fontSize: 15,
    },
    text: {
        fontSize: 28,
        fontFamily: 'SyneMonoRegular',
        textDecorationLine: 'underline',
    },
    agregar: {
        marginVertical:2,
        padding: 10,
        backgroundColor: colors.siete,
        width: '60%',
        margin: 7,
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 7,
        height: 40
    },
    texto:{
        color: 'white',
        fontSize: 15,
        fontFamily: 'SyneMonoRegular',
    }
})