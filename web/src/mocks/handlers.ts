import { http, HttpResponse } from 'msw';

import barrierFreeData from './data/barrierFreeData.json';
import campusData from './data/campusData.json';

const API_URL = import.meta.env.VITE_API_URL;

export const handlers = [
  // GET - 베리어 프리 마커
  http.get(`${API_URL}/markers`, () => {
    return HttpResponse.json({ markers: barrierFreeData });
  }),

  // GET - 일반 마커
  http.get(`${API_URL}/campus/markers`, () => {
    return HttpResponse.json({ markers: campusData });
  }),
];
