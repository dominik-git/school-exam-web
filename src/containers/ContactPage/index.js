import React from "react";
import GoogleMapComponent from "../../components/GoogleMap";

// const MyMapComponent = withScriptjs(
//   withGoogleMap(props => (
//     <GoogleMap defaultZoom={16} defaultCenter={{ lat: 48.7290529, lng: 21.2764167 }}>
//       {props.isMarkerShown && <Marker position={{ lat: 48.7290529, lng: 21.2764167 }} />}
//     </GoogleMap>
//   )),
// );

class ContactPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isMarkerShown: true,
    };
  }

  render() {
    const MarkerPosition = { lat: 48.7290529, lng: 21.2764167 };
    const CenterPosition = { lat: 48.7290529, lng: 21.2764167 };
    return (
      <div>
        <GoogleMapComponent
          MarkerPosition={MarkerPosition}
          CenterPosition={CenterPosition}
          isMarkerShown={this.state.isMarkerShown}
        />
        {/* <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "400px" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div> */}
      </div>
    );
  }
}
export default ContactPage;
