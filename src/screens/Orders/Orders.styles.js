import { StyleSheet } from "react-native";
import {colors} from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.quaternary,
      },
      orderContainer: {
        backgroundColor: colors.quaternary,
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
      },
      orderText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3B0086',
      },
      orderInfo: {
        marginBottom: 5,
        padding: 10,
      },
      deleteButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 8,
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
      },
      noOrderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      noOrderText: {
        fontWeight: 'bold',
        fontSize: 18,
      },
      orderInfor: {
        flexDirection: 'column',
        marginBottom: 15,
        color: '#3B0086',
      },
      orderDetail: {
        flexDirection: 'column',
        marginBottom: 15,
      },
      userInfo: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
        fontFamily: 'SyneMonoRegular',
      },
      info: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10,
        fontFamily: 'SyneMonoRegular',
      },
      total: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10,
        fontFamily: 'SyneMonoRegular',
        color: '#3B0086',
      },
      itemsContainer: {
        alignItems: 'center',
        marginBottom: 20,
        
      },
      item: {
        fontSize: 14,
        marginBottom: 5,
        
      },
      orderText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
        fontFamily: 'SyneMonoRegular',
        color: '#3B0086',
      },
      noOrderText: {
        fontSize:20,
        fontFamily: 'SyneMonoRegular',
        color: '#3B0086',
      },
      
    });
    
