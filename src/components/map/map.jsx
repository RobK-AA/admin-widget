import React, { useState, useEffect } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const Map = ({clients, locations, fetchLocation }) => {
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

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={3.8}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
          {
            locations.map(location => {
              return (
              <Marker label="Client" key={location.results[0].geometry} position={location.results[0].geometry.location}/>
              )
            })
         }
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map);