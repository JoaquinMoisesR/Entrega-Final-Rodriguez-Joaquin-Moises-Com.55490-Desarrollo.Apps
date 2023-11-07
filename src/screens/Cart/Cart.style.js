import { StyleSheet } from "react-native";
import {colors} from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        paddingVertical: 1,
        marginVertical: 1,
        backgroundColor: colors.quaternary,
    },
    listContainer: {
        flex: 4,

    },
    cart: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily :'SyneMonoRegular',
    },
    confirmar: {
        padding:3,
        marginLeft: 80,
        justifyContent: 'center',
        backgroundColor: colors.siete,
        textAlign: 'center',
        fontSize:15,
        marginVertical: 5,
        width: 200,
        height: 25,
        color: 'white',
        fontFamily: 'SyneMonoRegular',
        borderRadius: 20,
    },
    boton:{
       marginVertical: 5,
    },
   
})