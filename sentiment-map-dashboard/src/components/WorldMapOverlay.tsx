import { useMemo } from 'react';
import DeckGL from '@deck.gl/react';
import { HeatmapLayer } from '@deck.gl/aggregation-layers';
import { useSelector } from 'react-redux';
import { SentimentEntry } from '../utils/loadSentimentData';

type Props = {
    viewState: any;
    data: SentimentEntry[];
};

const colorRanges = {
    positive: [[0, 255, 0, 180]],     // green
    neutral: [[255, 255, 0, 180]],    // yellow
    negative: [[255, 0, 0, 180]],     // red
    overall: [
        [0, 255, 0, 180],   // green
        [255, 255, 0, 180], // yellow
        [255, 0, 0, 180]    // red
    ]
};

const sentimentMap: any = {
    positive: 0,
    neutral: 1,
    negative: 2
};

export const DeckGLOverlay = ({ viewState, data }: Props) => {

    const filter = useSelector((state: any) => state.sentiment.sentimentType);

    const filtered = useMemo(() => {
        if (filter === 'overall') return data;
        return data.filter(d => d.sentiment === sentimentMap[filter]);
    }, [filter, data]);

    const layers = [
        new HeatmapLayer({
            id: 'heatmap-layer',
            data: filtered,
            getPosition: d => d.coordinates,
            getWeight: d => 1,
            radiusPixels: 40,
            aggregation: 'SUM',
            colorRange: colorRanges[filter]
        })
    ];

    return <DeckGL viewState={viewState} controller={true} layers={layers} />;
};
