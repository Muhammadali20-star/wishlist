import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/layout/Layout';
const Home = lazy(() => import('./pages/home/Home'));
const Vishlist = lazy(() => import('./pages/Wishlist/Vishlist'));


const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Suspense><Layout/></Suspense>}>
          <Route path="/" element={<Suspense><Home /></Suspense>} />
          <Route path="/wishlist" element={<Suspense><Vishlist /></Suspense>} />
          </Route>
        </Routes>
      </Suspense>
      {/* <Footer /> */}
    </div>
  );
};

export default React.memo(App);
