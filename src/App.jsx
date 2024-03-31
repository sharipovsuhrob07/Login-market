import React from "react";

import Home from "./pages/home/Home";
import Add from "./pages/add/AddProduct";
import Edit from "./pages/edit/Edit";
import Profile from "./pages/profile/Profile";
import NotFound from "./pages/notfound/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./authentication/Authentication";
import Login from "./pages/login/Login";
import RequireAuth from "./components/RequireAuth";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/add-product"
          element={
            <RequireAuth>
              <Add />
            </RequireAuth>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <RequireAuth>
              <Edit />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
