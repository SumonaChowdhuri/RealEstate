import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Auth/SignIn";
import Forget from "./Auth/Forget";
import LayoutDashboard from "./Layout/LayoutDashboard";
import LayoutProperty from "./Layout/LayoutProperty";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/SignIn" element={<SignIn />}/>
        <Route path="/" element={<LayoutDashboard/>}/>
        <Route path="/Property" element={<LayoutProperty/>}/>
        <Route path="/Forget" element={<Forget />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;