export interface MarkerDetail {
  id: number;
  name: string;
}

export interface Building {
  id: number;
  name: string;
  geometry: {
    type: string;
    coordinates: number[];
  };
  remarks?: string;
  imgUrl?: string;
  amenityInfoTypes?: string[];
}

export interface AmenityInfo {
  id: number;
  buildingId: number;
  type: string;
  contents: string;
}

export interface BuildingDetail {
  id: number;
  name: string;
  geometry: {
    type: string;
    coordinates: number[];
  };
  remarks?: string;
  imgUrl?: string;
  amenityInfos?: AmenityInfo[];
}

export type FacilityType = 'ELEVATOR' | 'IMPAIRMENT_TOILET' | 'RAMP' | 'NOTE' | 'AUDIO_DEVICE' | 'SUPPORT_OFFICE';

export interface Facilites {
  id: number;
  facilityMarkerType: FacilityType;
  geometry: {
    type: string;
    coordinates: number[];
  };
  remarks: string;
  imgUrl: string;
  buildingId: number;
  buildingName: string;
}

export interface Admin {
  title: string;
  contents: string;
  geometry: {
    type: string;
    coordinates: number[];
  };
}
