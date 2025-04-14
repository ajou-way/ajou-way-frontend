import { BrowserRouter, Routes, Route } from 'react-router';

import BarrierFreeMap from '@/pages/BarrierFreeMap/BarrierFreeMap';
import BuildingDetail from '@/pages/BuildingDetail/BuildingDetail';
import Layout from '@/pages/Layout';
import MainMap from '@/pages/MainMap/MainMap';

import { PATH } from '@/constants/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={PATH.MAIN_MAP} element={<MainMap />} />
          <Route path={PATH.BARRIER_FREE_MAP} element={<BarrierFreeMap />} />
          <Route path={PATH.BUILDING_DETAIL} element={<BuildingDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
