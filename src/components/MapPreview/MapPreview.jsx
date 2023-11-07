import { View, Image } from 'react-native'
import React from 'react'
import {googleApi} from '../../firebase'
import styles from './mapPreview.stye'


const MapPreview = ({location}) => {
    const mapPreviewUrl= 
    `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=14&size=600x410&maptype=roadmap&markers=color:red%7Clabel:S%7C${location.latitude},${location.longitude}&markers=color.green%7Clabel:G%7C${location.latitude},${location.longitude}&markers=color:blue%7Clabel:C%7C${location.latitude},${location.longitude}&key=${googleApi.mapStatic}`;

  
  return (
    <View style={styles.mapPreview}>
      <Image style={styles.mapImage} source={{uri: mapPreviewUrl}}/>
    </View>
  )
}

export default MapPreview