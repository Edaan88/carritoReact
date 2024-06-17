
import Home from './componets/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataProvider from './componets/Context/DataContext';
import CartContent from './componets/CartContent/CartContent';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartContent /> } /> 
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
