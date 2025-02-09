import { http, HttpResponse } from 'msw';

import barrierFreeData from './data/barrierFreeData.json';

const API_URL = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${API_URL}/markers`, () => {
    return HttpResponse.json({ markers: barrierFreeData });
  }),
];
