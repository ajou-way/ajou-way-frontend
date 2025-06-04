import { FacilityType } from '@/pages/type';

import {
  AudioDeviceMarker,
  ElevatorMarker,
  ImparimentToiletMarker,
  NoteMarker,
  RampMarker,
  SupportOfficeMarker,
} from '@/assets/markers';

export const MARKER_TYPE: Record<FacilityType, string> = {
  ELEVATOR: '엘리베이터',
  IMPAIRMENT_TOILET: '장애인 화장실',
  RAMP: '경사로',
  NOTE: '특이 사항 존재',
  AUDIO_DEVICE: '음성 유도기',
  SUPPORT_OFFICE: '장애학생지원실',
};

export const MARKER_ICON: Record<FacilityType, string> = {
  ELEVATOR: ElevatorMarker,
  IMPAIRMENT_TOILET: ImparimentToiletMarker,
  RAMP: RampMarker,
  NOTE: NoteMarker,
  AUDIO_DEVICE: AudioDeviceMarker,
  SUPPORT_OFFICE: SupportOfficeMarker,
};
