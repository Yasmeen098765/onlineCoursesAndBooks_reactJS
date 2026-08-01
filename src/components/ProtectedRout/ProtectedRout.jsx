import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./ProtectedRout.css";
import { Navigate } from "react-router-dom";

function ProtectedRout({ children }) {
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRout;
