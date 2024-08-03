
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NanBarComponent from './Navigation_bar';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Store from './pages/Store';
import Cancel from './pages/Cancel';
import Success from './pages/Success';

function App() {

  return (
    <Container>
    <NanBarComponent ></NanBarComponent >
    <BrowserRouter>
      <Routes>
        <Route path='shopping-cart' element={<Store/>} />
        <Route path='shopping-cart/success' element={<Success />} />
        <Route path='shopping-cart/cancel' element={<Cancel />} />
      </Routes>
    </BrowserRouter>
    </Container>
  )
}

export default App
