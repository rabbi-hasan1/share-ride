import { Route, Routes } from "react-router-dom";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import PrivateRoute from "./protected/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
