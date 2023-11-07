import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    image:{
        width: '100%',
        height: '100%',
    },
    baseText: {
        fontSize: 17 ,
        marginVertical: 15,
        fontFamily: 'SyneMonoRegular',
        color: '#FFFFFF',
        backgroundColor: colors.quinary,
        borderRadius:10,
    },
    container:{
        flex:1,
        backgroundColor: colors.tertiary,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    loginContainer:{
        width: '100%',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 90,
    },
    inputEmail: {
        width: '95%',
        backgroundColor: colors.quaternary,
        height: 35,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    text:{
        fontSize: 18,
        color: 'white',
        fontFamily: 'SyneMonoRegular',
        backgroundColor: colors.quinary,
        borderRadius: 10,
    },
    loginButton: {
        backgroundColor: colors.primary,
        width: '50%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 15,
        marginVertical: 10,
    }
})