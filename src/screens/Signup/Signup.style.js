import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    image:{
        width: '100%',
        height: '100%',
    },
    ingresoText: {
        fontSize: 18,
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'SyneMonoRegular',
        backgroundColor: '#465775',
        color: 'white',
        borderRadius: 10,
        marginVertical: 40,
    },
    usuario: {
        fontSize: 15,
        padding: 1,
        fontFamily: 'SyneMonoRegular',
        color: 'white',
        backgroundColor: '#465775',
        borderRadius: 10,
    },
    contraseña:{
        fontSize: 15,
        padding: 1,
        fontFamily: 'SyneMonoRegular',
        color: 'white',
        backgroundColor: '#465775',
        borderRadius: 10,
    },
    confirmar: {
        fontSize: 15,
        padding: 1,
        fontFamily: 'SyneMonoRegular',
        color: 'white',
        backgroundColor: '#465775',
        borderRadius: 10,
    },
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainer:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
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
    loginButton: {
        backgroundColor: colors.primary,
        width: '50%',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 15,
        marginVertical: 10,
    },
    count: {
        fontSize: 15,
        padding: 1,
        fontFamily: 'SyneMonoRegular',
        color: 'white',
        backgroundColor: '#465775',
        borderRadius: 10,
    }
})