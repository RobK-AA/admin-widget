import React, { useState, useCallback, memo } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const Map = ({ locations }) => {
    const containerStyle = {
        width: '75%',
        height: '400px'
    };

    const center = {
        lat: 39.8283,
        lng: -98.5795
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDYvOc7LNWIAuEr5AnVBEU2_YnoUehlnh4"
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])
    
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
          {
            locations.map((location, i) => {
              return (
              <Marker label="Client" key={i} position={location.results[0] !== undefined ? location.results[0].geometry.location : null}/>
              )
            })
         }
      </GoogleMap>
  ) : <></>
}

export default memo(Map);