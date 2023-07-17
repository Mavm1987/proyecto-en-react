import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Inicio from './componentes/Inicio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

