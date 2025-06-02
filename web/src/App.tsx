import { BrowserRouter, Routes, Route } from 'react-router';

import BarrierFreeMap from '@/pages/BarrierFreeMap/BarrierFreeMap';
import BuildingDetail from '@/pages/BuildingDetail/BuildingDetail';
import Landing from '@/pages/Landing/Landing';
import Layout from '@/pages/Layout';
import MainMap from '@/pages/MainMap/MainMap';
import RoutesMap from '@/pages/RoutesMap/RoutesMap';
import SignUp from '@/pages/SignUp/SignUp';

import { PATH } from '@/constants/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={PATH.LANDING} element={<Landing />} />
          <Route path={PATH.JOIN} element={<SignUp />} />
          <Route path={PATH.MAIN_MAP} element={<MainMap />} />
          <Route path={PATH.ROUTES_MAP} element={<RoutesMap />} />
          <Route path={PATH.BARRIER_FREE_MAP} element={<BarrierFreeMap />} />
          <Route path={`${PATH.BUILDING_DETAIL}/:id`} element={<BuildingDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
