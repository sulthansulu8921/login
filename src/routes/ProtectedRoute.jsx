import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // TEMP: allow access during UI development
  return children;
}
