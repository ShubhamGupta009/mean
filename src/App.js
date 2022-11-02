import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './users/pages/Users';
import NewPlaces from './places/pages/NewPlaces';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users/>}  />
        <Route path="/places/new" element={<NewPlaces/>}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
