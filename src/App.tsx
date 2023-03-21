import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
