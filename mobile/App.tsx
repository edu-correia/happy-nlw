import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, {Marker, Callout ,PROVIDER_GOOGLE} from 'react-native-maps';

import mapMarker from './src/images/map-marker.png';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map} 
       initialRegion={{
         latitude: -22.5971366,
         longitude: -47.3935564,
         latitudeDelta: 0.008,
         longitudeDelta: 0.008,
       }}
      >
        <Marker 
          icon={mapMarker}
          coordinate={{
            latitude: -22.5971366,
            longitude: -47.3935564 
          }}
        >
          <Callout>
            <Text>Lar das meninas</Text>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
