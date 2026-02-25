import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {useConfig} from "../../utils/config"

export default function ProtectedRoute({ children }) {
  const { serverURL } = useConfig();
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    axios
      .get(`${serverURL}/api/auth/check`, {
        withCredentials: true,
      })
      .then(() => setAuthorized(true))
      .catch(() => setAuthorized(false));
  }, []);

  if (authorized === null) return <div>Loading...</div>;

  if (!authorized) return <Navigate to="/login" replace />;

  return children;
}