import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#1789FC',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        paddingBottom: 1,
    },
    withoutLocation: {
        width: '100%',
        height: '100%',
        borderWidth: 2,
        padding: 10,
        borderColor: colors.quaternary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    direccion:{
        fontSize: 20,
        color: 'white',
        fontFamily: 'SyneMonoRegular',
        marginVertical: 5,
        textDecorationLine: 'underline'
    },
    cordenadas: {
        fontSize: 13,
        color: 'white',
        fontFamily: 'SyneMonoRegular',
    }
})