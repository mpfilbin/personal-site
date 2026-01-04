import React, {type FC, useEffect, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';


interface RouteMapProperties {
  routeURL: string;
  dimensions?: {
    height: string;
    width: string;
  };
  center: [number, number];
  zoom?: number;
}


export const RouteMap: FC<RouteMapProperties> = ({routeURL, dimensions, center, zoom}) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const {height = '500px', width = '500px'} = dimensions ?? {};

  if (!isBrowser) {
    return <div style={{height, width}}/>;
  }

  return (
    <BrowserOnly fallback={<div style={{height, width}}/>}>
      {() => {
        // Require client-only module at runtime so the server build doesn't try to resolve its transitive deps
        // (like jsdom/canvas from gpxparser). Using require keeps this synchronous inside the BrowserOnly callback.
        // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
        const ClientMap = require('./ClientMap').default;
        return <ClientMap routeURL={routeURL} height={height} width={width} center={center} zoom={zoom} />;
      }}
    </BrowserOnly>
  );
};

