import { mappls, mappls_plugin } from "mappls-web-maps";
import { useEffect, useRef, useState } from "react";
import styles from './map.module.css';

const mapplsClassObject = new mappls();
const mapplsPluginObject = new mappls_plugin();

const NearbySearchPlugin = ({ map , userLocation }) => {
  const nearbysearchRef = useRef(null);

  useEffect(() => {
    if (map && nearbysearchRef.current) {
      nearbysearchRef.current.remove();
      mapplsClassObject.removeLayer({ map, layer: nearbysearchRef.current });
    }
    var options = {
      divId: "nearby_search",
      map: map,
      keywords: "hospital",
      refLocation: `${userLocation[0]},${userLocation[1]}`,
      fitbounds: true,
      icon: {
        url: "https://apis.mappls.com/map_v3/1.png",
      },
      click_callback: function (d) {
        if (d) {
          var l =
            "Name: " +
            d.placeName +
            "\nAddress: " +
            d.placeAddress +
            "\neLoc: " +
            d.eLoc;
          alert(l);
        }
      },
    };

    nearbysearchRef.current = mapplsPluginObject.nearby(
      options,
      function (data) {
        let nr = data;
        console.log(nr);
      }
    );

    return () => {
      if (map && nearbysearchRef.current) {
        mapplsClassObject.removeLayer({ map, layer: nearbysearchRef.current });
      }
    };
  }, [map]);
};

const Map = ({logout}) => {
  const mapRef = useRef(null);
  const [isMapLoaded, setIsMapLoaded] = useState(localStorage.getItem('map_loader')?JSON.parse(localStorage.getItem('map_loader')):false);
  const [userLocation,Setuserlocation] = useState([28.633, 77.2194])

  const loadObject = { map: true, plugins: ["nearby"] };

  if (!logout){
    setIsMapLoaded(false)
  }

  const getLocation = () => {
    var getbutton = document.getElementById('getbutton');
    getbutton.style.display = "none";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            Setuserlocation([
              position.coords.latitude,
              position.coords.longitude
            ]);
            console.log( position.coords.latitude,position.coords.longitude);

            mapplsClassObject.initialize(import.meta.env.VITE_ACCESS_TOKEN, loadObject, () => {
                const newMap = mapplsClassObject.Map({
                  id: "map",
                  properties: {
                    center: [userLocation[0], userLocation[1]],
                    zoom: 4,
                  },
                });
          
                newMap.on("load", () => {
                  setIsMapLoaded(true);
                  localStorage.setItem("map_loader","false")
                });
          
                mapRef.current = newMap;
              });
            
          },
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
        return () => {
            if (mapRef.current) {
              mapRef.current.remove();
            }
          };
    } else {
        console.error('Geolocation is not supported by this browser.');
      
    }
  }

  return (
    
      <div id="map" style={{ width: "100%", height: "70%",marginTop:"110px", display: "flex", justifyContent:"center" ,alignItems:"center"}}>
        {isMapLoaded ?<NearbySearchPlugin map={mapRef.current} userLocation={userLocation} className={styles.nearby}/>:
          <button onClick={getLocation} className={styles.button} id="getbutton">Get Near by Hospitals</button>
        }
      </div>
      
    
  );
};

export default Map;

