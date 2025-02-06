import { BrowserRouter, Routes, Route } from 'react-router';

import BarrierFreeMap from '@/pages/BarrierFreeMap/BarrierFreeMap';
import Layout from '@/pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<BarrierFreeMap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
