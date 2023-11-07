import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import *as Location from 'expo-location'
import styles from './location.style'
import { MapPreview } from '../../components'

const LocationScreen = () => {

const [location, setLocation] = useState({latitude: '', longitude: ''})
const [error, setError] = useState('')

useEffect(() => {
    (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            setError('Permission to access location was denied')
            return
        }
        let location = await Location.getCurrentPositionAsync({})
        setLocation({
            latitude: location?.coords.latitude,
            longitude: location?.coords.longitude,
        })
    })()
}, [])


  return (
    <View style={styles.container}>
      {location ? ( 
      <View style={styles.withoutLocation}>
        <Text style={styles.direccion}>MI DIRECCION</Text>
        <Text style={styles.cordenadas}>Latitud: {location.latitude}, Longitud: {location.longitude}</Text>
        <MapPreview location={location}/>
      </View> 
      ) : (  
      <View style={styles.withoutLocation}>
        <Text>{error}</Text>
      </View>
      )}
    </View>
  )
}

export default LocationScreen