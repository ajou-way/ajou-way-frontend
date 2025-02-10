import { MarkerType } from '@/pages/BarrierFreeMap/BarrierFreeMap.type';

import {
  AudioDeviceMarker,
  ElevatorMarker,
  ImparimentToiletMarker,
  NoteMarker,
  RampMarker,
  SupportOfficeMarker,
} from '@/assets/markers';

export const MARKER_TYPE: Record<MarkerType, string> = {
  elevator: '엘리베이터',
  impariment_toilet: '장애인 화장실',
  ramp: '경사로',
  note: '특이 사항 존재',
  audio_device: '음성 유도기',
  support_office: '장애학생지원실',
};

export const MARKER_ICON: Record<MarkerType, string> = {
  elevator: ElevatorMarker,
  impariment_toilet: ImparimentToiletMarker,
  ramp: RampMarker,
  note: NoteMarker,
  audio_device: AudioDeviceMarker,
  support_office: SupportOfficeMarker,
};
