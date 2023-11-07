
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Home, Products, Details} from '../screens'
import { View} from "react-native";
import { Header } from "../components";
import Feather from '@expo/vector-icons/Feather';
import { colors } from "../constants/colors";
import { useDispatch } from "react-redux";
import { clearUser } from "../featuers/auth/authSlice";
import { deleteSession } from "../db";



const Stack = createNativeStackNavigator()



function StackNavigator () {

  const dispatch = useDispatch()

  const logout = () => {
    dispatch (clearUser())
    deleteSession()
  } 


    return (
            <Stack.Navigator initialRouteName="Home" screenOptions={({route, navigation}) => ({
              headerShown:true,
            header: () => (
               <View style={{ flexDirection:'row', height:57, justifyContent: 'space-around', alignItems: 'center',}}>
              
                <Header title={'Aspetto BookStore'} />
                  <Feather name="log-out" size={30} color={'white'} style={{marginEnd:10, padding:12, backgroundColor:colors.primary,}} onPress={logout}/>
               </View>    
              )
            })}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Products' component={Products} />
                <Stack.Screen name='Details' component={Details} />
            </Stack.Navigator>
    )
}


export default StackNavigator