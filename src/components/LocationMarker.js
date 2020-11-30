import React from "react";
import Marker from "@iconify/icons-mdi/fire-alert";
import Icon from "@iconify/react";

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div>
      <Icon
        className="icon"
        icon={Marker}
        lat={lat}
        lng={lng}
        onClick={onClick}
      />
    </div>
  );
};

export default LocationMarker;
