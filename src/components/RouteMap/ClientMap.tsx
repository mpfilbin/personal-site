import React, {type FC, useEffect, useState} from 'react';

interface ClientMapPropersties {
  routeURL: string;
  height: string;
  width: string;
  center: [number, number];
  zoom?: number;
}

const ClientMap: FC<ClientMapPropersties> = ({routeURL, height, width, center, zoom = 16}) => {
  const [coords, setCoords] = useState<Array<[number, number]> | []>([]);
  const [LeafletComponents, setLeafletComponents] = useState<any>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const [{MapContainer, TileLayer, Polyline}, GpxModule] = await Promise.all([
          // dynamic import of react-leaflet
          import('react-leaflet') as Promise<any>,
          // dynamic import of gpxparser
          import('gpx-parser-builder') as Promise<any>,
        ]);

        if (!mounted) return;

        setLeafletComponents({MapContainer, TileLayer, Polyline});

        // fetch and parse GPX
        const res = await fetch(routeURL);
        const gpxText = await res.text();
        if (!mounted) return;

        const GpxParser = (GpxModule as any).default ?? GpxModule;
        const gpx = GpxParser.parse(gpxText);
        const coordinates = gpx.trk[0].trkseg[0].trkpt.map(p => [p.$.lat, p.$.lon]);
        setCoords(coordinates);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('ClientMap load error', e);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [routeURL]);

  if (!LeafletComponents) {
    return <div style={{height, width}}/>;
  }

  const {MapContainer, TileLayer, Polyline} = LeafletComponents;

  console.log(center);
  return (
    <div className="route-map-container" style={{height, width}}>
      <MapContainer style={{height: '100%', width: '100%'}} zoom={zoom} center={center} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline pathOptions={{fillColor: 'red', color: 'blue'}} positions={coords}/>
      </MapContainer>
    </div>
  );
};

export default ClientMap;
