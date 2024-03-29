import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import MainPage from './pages/MainPage';
import SettingPage from './pages/SettingPage';
import ConfirmPage from './pages/ConfirmPage';
import LoadingPage from './pages/LoadingPage';
import WinnerPage from './pages/WinnerPage';

export enum RoutePath {
  Root = '/',
  Setting = '/setting',
  Confirm = '/confirm',
  Loading = '/loading',
  Winner = '/winner',
}

const RouteProvider = () => {
  const [participants, setParticipants] = useState<string[]>([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.Root} element={<MainPage participants={participants} />} />
        <Route path={RoutePath.Setting} element={<SettingPage participants={participants} setParticipants={setParticipants} />} />
        <Route path={RoutePath.Confirm} element={<ConfirmPage participants={participants} />} />
        <Route path={RoutePath.Loading} element={<LoadingPage />} />
        <Route path={RoutePath.Winner} element={<WinnerPage participants={participants} setParticipants={setParticipants} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteProvider;
