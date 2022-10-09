import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'src/widgets/layout';
import { MainPage } from 'src/pages/main';
import { ProfilePage } from 'src/pages/profile';
import { MarketPage } from 'src/pages';
import { MarketItemPage } from 'src/pages/market-item/MarketItemPage';
import { EducationPage } from 'src/pages/education/EducationPage';

export const Routing = () =>
  <Routes>
    <Route element={<Layout/>}>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
      <Route path="/profile/:tab" element={<ProfilePage />}></Route>
      <Route path="/market" element={<MarketPage />}></Route>
      <Route path="/market/:id" element={<MarketItemPage />}></Route>
      <Route path="/education" element={<EducationPage />}></Route>
    </Route>
    <Route path="*" element={<Navigate to="/"/>}></Route>
  </Routes>
