import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import SettingPage from './pages/SettingPage';
import PickPage from './pages/PickPage';
import LoadingPage from './pages/LoadingPage';
import WinnerPage from './pages/WinnerPage';

export enum RoutePath {
  Root = '/',
  Setting = '/setting',
  Pick = '/pick',
  Loading = '/loading',
  Winner = '/winner',
}

const RouteProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path={RoutePath.Root} element={<MainPage/>} />
      <Route path={RoutePath.Setting} element={<SettingPage/>} />
      <Route path={RoutePath.Pick} element={<PickPage/>} />
      <Route path={RoutePath.Loading} element={<LoadingPage/>} />
      <Route path={RoutePath.Winner} element={<WinnerPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteProvider;