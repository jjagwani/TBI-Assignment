import Papa from 'papaparse';

export interface SentimentEntry {
  country: string;
  region: string;
  sentiment: number; // 0: positive, 1: neutral, 2: negative
  coordinates: [number, number];
}

export const loadSentimentData = async (): Promise<SentimentEntry[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse('/data/geo_sentiments.csv', {
      header: true,
      download: true,
      complete: async (result: any) => {
        try {
          const entries = await Promise.all(
            result.data.map(async (d: any) => {
              const coords = await fetchCoordinates(d.country, d.region);
              return {
                country: d.country,
                region: d.region,
                sentiment: Number(d.sentiment),
                coordinates: coords
              };
            })
          );
          resolve(entries);
        } catch (err) {
          reject(err);
        }
      },
      error: reject
    });
  });
};


const fetchCoordinates = async (country: string, region: string): Promise<[number, number]> => {
  // For mock, return random points around continents (or better, use a lookup table or API like OpenCage)
  return [Math.random() * 360 - 180, Math.random() * 180 - 90];
};
