import { NextPage } from "next";
import GoogleMapReact, { Maps } from 'google-map-react';
import { data, Font } from "../../shared/data";
import Marker from "./Marker";
import FontDrawer from "./FontDrawer";
import { useState } from "react";

const defaultMapsProps = {
  center: {
    lat: 41.418167,
    lng: 1.933617
  },
  zoom: 14
};

const options = (maps: Maps) => ({
  mapTypeId: maps.MapTypeId.SATELLITE,
  mapTypeControl: true,
  mapTypeControlOptions: {
    style: maps.MapTypeControlStyle.DROPDOWN_MENU,
    mapTypeIds: [
      maps.MapTypeId.TERRAIN,
      maps.MapTypeId.ROADMAP,
      maps.MapTypeId.SATELLITE
    ]
  }
});

const FontsPage: NextPage = () => {

  const [activeFont, setActiveFont] = useState<Font>();

  const handleOnFontClick = (font: Font) => {
    setActiveFont(font);
  }

  return (
    <>
      <div style={{ width: '100vw', height: '100vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.NEXT_PUBLIC__GOOGLE_MAPS_API_KEY as string,
            region: 'ES',
            language: 'ca'
          }}
          options={options}
          defaultCenter={defaultMapsProps.center}
          defaultZoom={defaultMapsProps.zoom}
        >
          {
            data.map((font, index) => (
              <Marker key={index}
                lat={font.latitud}
                lng={font.longitud}
                font={font}
                onClick={() => handleOnFontClick(font)}
              ></Marker>
            ))
          }
        </GoogleMapReact>
      </div>

      <FontDrawer
        font={activeFont}
        onClose={() => setActiveFont(undefined)}
      />

    </>
  )
}

export default FontsPage;