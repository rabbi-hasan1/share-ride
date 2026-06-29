import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import api from "../axios/api";
import { useAuth } from "../hooks/useAuth";

function CaptainPrivateRoute() {
  const { auth, setAuth } = useAuth();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
      return;
    }

    const fetchCaptain = async () => {
      try {
        const response = await api.get("/captains/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setAuth(response.data.captain);
        }
      } catch (error) {
        console.error(error);
        localStorage.removeItem("token");
        navigate("/captain-login");
      } finally {
        setLoading(false);
      }
    };

    fetchCaptain();
  }, [token, setAuth]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!token || !auth) {
    return <Navigate to="/captain-login" replace />;
  }

  console.log(auth);

  return <Outlet />;
}

export default CaptainPrivateRoute;
