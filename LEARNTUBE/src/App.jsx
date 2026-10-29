import { Routes, Route, Navigate } from "react-router-dom";

import RootLayout from "./components/layout/RootLayout";
import HomePage from "./pages/HomePage";
import DashboardPage, {
  InProgressCourses,
  CompletedCourses,
} from "./pages/DashboardPage";
import CatalogPage from "./pages/CatalogPage";
import CoursesPage from "./pages/CoursesPage";
import PlayerPage from "./pages/PlayerPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<Navigate to="in-progress" replace />} />
          <Route path="in-progress" element={<InProgressCourses />} />
          <Route path="completed" element={<CompletedCourses />} />
        </Route>
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/courses/:topicId" element={<CoursesPage />} />
        <Route path="/player/:courseId" element={<PlayerPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
