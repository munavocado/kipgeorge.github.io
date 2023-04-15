import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import { Routes, Route } from 'react-router-dom';

function Main() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default Main;
