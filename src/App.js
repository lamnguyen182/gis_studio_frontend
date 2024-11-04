import logo from './logo.svg';
import './App.css';
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useState } from 'react';
import MapComponent from './components/MapComponent';
import FilterComponent from './components/FilterComponent';
function App() {
  const [studios, setStudios] = useState([]);
   const [filteredStudios, setFilteredStudios] = useState([]);

   useEffect(() => {
       fetch('/api/studios') 
           .then(response => response.json())
           .then(data => {
               setStudios(data);
               setFilteredStudios(data);
           });
   }, []);

   const handleFilter = (search) => {
       const filtered = studios.filter(studio =>
           studio.name.toLowerCase().includes(search.toLowerCase())
       );
       setFilteredStudios(filtered);
   };
  return (
    <div className="App">
    <h1>Danh sách Studio Cưới tại Cần Thơ</h1>

     <FilterComponent onFilter={handleFilter} />
     <MapComponent studios={filteredStudios} />
</div>
  );
}

export default App;
