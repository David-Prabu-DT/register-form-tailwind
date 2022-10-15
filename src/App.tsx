import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import { AuthService } from "./services/auth.service";

function App() {
  let userInfo = AuthService.getUserInfo();

  let infoLength = Object.keys(userInfo).length;

  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<LoginPage />} /> */}
              <Route path="/SignUp" element={<SignUpPage />} />

              <Route
                path="/"
                element={
                  infoLength !== 0 ? (
                    <Navigate to="Home" />
                  ) : (
                    <Navigate to="auth" />
                  )
                }
              />

              <Route
                path="/Home"
                element={infoLength !== 0 ? <Home /> : <Navigate to="/auth" />}
              />

              <Route
                path="/auth"
                element={
                  infoLength !== 0 ? <Navigate to="/Home" /> : <LoginPage />
                }
              />
              <Route
                path="/"
                element={
                  infoLength !== 0 ? (
                    <Navigate to="Home" />
                  ) : (
                    <Navigate to="/auth" />
                  )
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
