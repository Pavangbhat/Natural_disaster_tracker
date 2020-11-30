import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const { REACT_APP_MY_GOOGLE_MAP_API_KEY } = process.env;

const Map = ({ events }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = events.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => {
            setLocationInfo({
              id: ev.id,
              title: ev.title,
            });
          }}
        />
      );
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: REACT_APP_MY_GOOGLE_MAP_API_KEY }}
        defaultCenter={{
          lat: 20.5937,
          lng: 78.9629,
        }}
        defaultZoom={2}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

export default Map;
