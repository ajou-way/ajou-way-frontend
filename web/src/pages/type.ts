export type MarkerType = 'elevator' | 'impariment_toilet' | 'ramp' | 'note' | 'audio_device' | 'support_office';

export interface Marker {
  id: number;
  markerType: MarkerType;
  geometry: {
    type: string;
    coordinates: number[];
  };
  remarks: string;
}

export interface MarkerDetail {
  id: number;
  name: string;
}
