import { Routes, Route } from 'react-router-dom';
import './App.css';
import NftCard from './sections/NftCards/NftCards';
import Homepage from './sections/Homepage/Homepage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/nfts-place-to-stay' element={<NftCard />}/>
      </Routes>
    </>
  );
}

export default App;
