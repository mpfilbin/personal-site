declare module 'gpx-parser-builder' {
  interface GpxTrackPoint {
    $: {
      lat: string;
      lon: string;
    };
  }

  interface GpxTrackSegment {
    trkpt: GpxTrackPoint[];
  }

  interface GpxTrack {
    trkseg: GpxTrackSegment[];
  }

  interface GpxData {
    trk?: GpxTrack[];
  }

  interface GpxParser {
    parse(gpxString: string): GpxData;
  }

  const gpxParser: GpxParser;
  export default gpxParser;
}

