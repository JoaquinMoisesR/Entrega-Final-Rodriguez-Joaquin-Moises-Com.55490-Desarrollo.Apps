import { StyleSheet } from "react-native";
import {colors} from '../../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 3,
        borderBottomWidth: 2,
        backgroundColor: colors.quaternary,
    },
    name: {
        fontSize: 15,
    },
    details: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 100,
        height: 100,
    },
})