import React, { useState, useCallback, useEffect } from 'react';
import Map from 'react-map-gl/maplibre';
import maplibregl from 'maplibre-gl';
import { DeckGLOverlay } from './WorldMapOverlay';
import 'maplibre-gl/dist/maplibre-gl.css';
import { loadSentimentData, SentimentEntry } from '../utils/loadSentimentData';


const WorldMap: React.FC = () => {
  const [viewState, setViewState] = useState(() => ({
    latitude: 20,
    longitude: 0,
    zoom: 1.5,
    bearing: 0,
    pitch: 0,
    width: window.innerWidth,
    height: 600,
    padding: { top: 0, bottom: 0, left: 0, right: 0 }
  }));

  const onViewStateChange = useCallback((evt: any) => {
    setViewState(evt.viewState);
  }, []);

 const [data, setData] = useState<SentimentEntry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sentimentData = await loadSentimentData();
        setData(sentimentData);
      } catch (error) {
        console.error('Error loading sentiment data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: '100vw', height: '600px' }}>
      <Map
        mapLib={maplibregl}
        initialViewState={viewState}
        viewState={viewState}
        onMove={onViewStateChange}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        style={{ width: '100%', height: '100%' }}
        onError={(e) => {
          console.error("Map error:", e);
        }}
        onLoad={() => {
          console.log('Map loaded');
        }}
      >
        <DeckGLOverlay viewState={viewState} data={data} />
      </Map>
    </div>
  );
};

export default WorldMap;
