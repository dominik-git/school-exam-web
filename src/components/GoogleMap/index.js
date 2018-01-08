import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import StyledMapWrapper from "./styles";

/*eslint-disable */

class GoogleMapComponent extends React.Component {
  render() {
    const { MarkerPosition, CenterPosition, isMarkerShown } = this.props;
    const MyMapComponent = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap defaultZoom={17} defaultCenter={{ lat: CenterPosition.lat, lng: CenterPosition.lng }}>
          {isMarkerShown && <Marker position={{ lat: MarkerPosition.lat, lng: MarkerPosition.lng }} />}
        </GoogleMap>
      )),
    );
    return (
      <div>
        <MyMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "400px" }} />}
          mapElement={<div style={{ height: "100%", width: "100%" }} />}
        />
      </div>
    );
  }
}
export default GoogleMapComponent;
