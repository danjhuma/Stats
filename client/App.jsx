import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      import Callback from './pages/Callback';
     <Route path="/callback" element={<Callback />} />
    </Routes>
  );
};

export default App;
