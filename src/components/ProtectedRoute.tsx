// src/components/ProtectedRoute.tsx

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/appStore";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
