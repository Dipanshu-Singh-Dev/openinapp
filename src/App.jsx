import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signin from './Pages/Signin';
import Upload from './Pages/Upload';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
