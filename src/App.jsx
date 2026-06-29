import { Route, Routes } from "react-router-dom";
import CaptainHome from "./pages/CaptainHome";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainPrivateRoute from "./protected/CaptainPrivateRoute";
import PrivateRoute from "./protected/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route element={<CaptainPrivateRoute />}>
          <Route path="/captain-home" element={<CaptainHome />} />
        </Route>
        <Route path="/" element={<Start />} />
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
