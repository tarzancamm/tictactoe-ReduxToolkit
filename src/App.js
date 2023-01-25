import './App.css';

import {Route, Routes, Navigate} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='*' element={<Navigate to='/'/>} />
      </Routes>
    </div>
  );
}

export default App;
