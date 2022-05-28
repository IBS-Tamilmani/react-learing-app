import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPage from './Pages/MenuPage';
import ListPage from './Pages/ListPage';
import Layout from './dashboard'
import loadable from '@loadable/component'

const LoadablePage = loadable((props) => import(`${props.page}`), {
  fallback: <div>Page is Loading...</div>,
  cacheKey: (props) => props.page
});

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MenuPage />} />
          <Route path="list" element={<ListPage />} />
          <Route path="menulist" element={<MenuPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}