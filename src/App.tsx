import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { LandingPage } from "./pages/LandingPage";
import { HumanizerTool } from "./pages/HumaizerTool";
import { PricingPage } from "./pages/PricingPage";
import { Dashboard } from "./pages/Dashboard";
import { Login, Signup, ForgotPassword } from "./pages/Auth/AuthPage";
import { SignaturePage } from "./pages/SignaturePage";

// --- NEW IMPORT ---
import { NotFoundPage } from "./pages/NotFoundPage";

// Protected Route Wrapper
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <LandingPage />
          </Layout>
        }
      />
      <Route
        path="/humanizer"
        element={
          <Layout>
            <HumanizerTool />
          </Layout>
        }
      />
      <Route
        path="/pricing"
        element={
          <Layout>
            <PricingPage />
          </Layout>
        }
      />

      <Route
        path="/signature"
        element={
          <Layout>
            <SignaturePage />
          </Layout>
        }
      />

      {/* Auth Routes - No Layout for focus */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}
