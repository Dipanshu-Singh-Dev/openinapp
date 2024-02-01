import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signin from './Pages/Signin';
import Upload from './Pages/Upload';
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {

  return (
 <GoogleOAuthProvider clientId="968090425936-35i8ft5efecmqjr0p5qkjvrsnjijpvke.apps.googleusercontent.com">
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
    </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App
