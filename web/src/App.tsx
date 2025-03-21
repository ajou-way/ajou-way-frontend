import { BrowserRouter, Routes, Route } from 'react-router';

import BarrierFreeMap from '@/pages/BarrierFreeMap/BarrierFreeMap';
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
