// import React from 'react';
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
// import './map.css';

// const libraries = ['places'];
// const mapContainerStyle = {
//   width: '100vw',
//   height: '100vh',
// };
// const center = {
//   lat: 22.41389166898138,
//   lng: 80.6337262,
// };

// const markers = [
//   { id: 1, position: { lat: 6.9271, lng: 79.8612 }, label: 'Colombo' },
//   { id: 2, position: { lat: 7.8731, lng: 80.7718 }, label: 'Anuradhapura' },
//   { id: 3, position: { lat: 6.0535, lng: 80.2210 }, label: 'Galle' },
//   { id: 4, position: { lat: -33.8472767, lng: 151.2188164 }, label: "Taronga Zoo" },
// ];

// const Map = () => {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//     libraries,
//   });

//   if (loadError) return <div className="error">Error loading map</div>;
//   if (!isLoaded) return <div className="loading">Loading map...</div>;

//   return (
//     <div className="map-container">
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         zoom={7}
//         center={center}
//       >
//         {markers.map(marker => (
//           <Marker
//             key={marker.id}
//             position={marker.position}
//             label={{
//               text: marker.label,
//               className: 'marker-label',
//             }}
//           />
//         ))}
//       </GoogleMap>
//     </div>
//   );
// };

// export default Map;
