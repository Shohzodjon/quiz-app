import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import TestPage from "./pages/TestPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  const AccountPage = lazy(() => import("./pages/AccountPage"));
  const HomePage = lazy(() => import("./pages/Home"));
  const UserLists = lazy(() => import("./pages/UsersList"));
  const UserComment = lazy(() => import("./pages/UserComment"));

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<h2>Loading ... </h2>}>
          <section style={{ display: "flex" }}>
            <HomePage />
            <div style={{ flexGrow: "1" }}>
              <Routes>
                <Route path="/" element={<UserLists />} />
                <Route path="/comments" element={<UserComment />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/test" element={<TestPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
          </section>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
