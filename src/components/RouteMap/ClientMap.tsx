import {type FC, useEffect, useState} from 'react';
import {MapContainer, TileLayer, Polyline} from 'react-leaflet';
import gpxParser from 'gpx-parser-builder';

type LatLng = [number, number];

interface GpxTrackPoint {
  $: {
    lat: string;
    lon: string;
  };
}

interface ClientMapProperties {
  routeURL: string;
  height: string;
  width: string;
  center: LatLng;
  zoom?: number;
}

type LoadingState = 'idle' | 'loading' | 'success' | 'error';

const ClientMap: FC<ClientMapProperties> = ({
  routeURL,
  height,
  width,
  center,
  zoom = 16
}) => {
  const [coords, setCoords] = useState<LatLng[]>([]);
  const [loadingState, setLoadingState] = useState<LoadingState>('loading');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    const loadGpxData = async () => {
      try {
        setLoadingState('loading');
        setError(null);

        const response = await fetch(routeURL, {signal: abortController.signal});

        if (!response.ok) {
          throw new Error(`Failed to fetch GPX: ${response.status} ${response.statusText}`);
        }

        const gpxText = await response.text();

        if (abortController.signal.aborted) return;

        const gpx = gpxParser.parse(gpxText);

        if (!gpx?.trk?.[0]?.trkseg?.[0]?.trkpt) {
          throw new Error('Invalid GPX data structure');
        }

        const coordinates: LatLng[] = gpx.trk[0].trkseg[0].trkpt.map(
          (point: GpxTrackPoint) => [
            parseFloat(point.$.lat),
            parseFloat(point.$.lon)
          ]
        );

        if (abortController.signal.aborted) return;

        setCoords(coordinates);
        setLoadingState('success');
      } catch (err) {
        if (abortController.signal.aborted) return;

        const errorMessage = err instanceof Error ? err.message : 'Failed to load map data';
        setError(errorMessage);
        setLoadingState('error');
      }
    };

    loadGpxData();

    return () => {
      abortController.abort();
    };
  }, [routeURL]);

  if (loadingState === 'loading') {
    return (
      <div
        style={{height, width, display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        role="status"
        aria-live="polite"
      >
        Loading route data...
      </div>
    );
  }

  if (loadingState === 'error') {
    return (
      <div
        style={{height, width, display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        role="alert"
      >
        <p>Error loading route: {error}</p>
      </div>
    );
  }


  return (
    <div className="route-map-container" style={{height, width}}>
      <MapContainer
        style={{height: '100%', width: '100%'}}
        zoom={zoom}
        center={center}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {coords.length > 0 && (
          <Polyline
            pathOptions={{fillColor: 'red', color: 'blue'}}
            positions={coords}
          />
        )}
      </MapContainer>
    </div>
  );
};

export default ClientMap;
