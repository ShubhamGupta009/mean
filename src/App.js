import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './users/pages/Users';
import NewPlaces from './places/pages/NewPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
      <Routes>
        <Route path="/" exact element={<Users/>} />
        <Route path="/places/new" element={<NewPlaces/>}  />
      </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
