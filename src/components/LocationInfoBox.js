const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info-box">
      <h3>Location Info</h3>
      <ul>
        <li>
          Id: <strong>{info.id}</strong>
        </li>
        <li>
          Title: <strong>{info.title}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
