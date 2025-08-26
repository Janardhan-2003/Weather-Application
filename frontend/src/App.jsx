import { Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import FavouritesPage from "./pages/FavouritesPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/favourites"
          element={
            <ProtectedRoute>
              <FavouritesPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
