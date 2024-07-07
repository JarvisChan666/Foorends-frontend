import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";

const HomePage = lazy(() => import("./pages/HomePage"));
const AuthCallbackPage = lazy(() => import("./pages/AuthCallbackPage"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path="/auth-callback"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <AuthCallbackPage />
          </Suspense>
        }
      />
      <Route path="/user-profile" element={<span>USER PROFILE PAGE</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;

// import { Navigate, Route, Routes } from "react-router-dom";
// import React, { lazy, Suspense } from "react";
// import Layout from "./layouts/layout";
// import HomePage from "./pages/HomePage";
// import AuthCallbackPage from "./pages/AuthCallbackPage";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={
//           <Layout>
//             <HomePage />
//           </Layout>
//         }
//       />
//       <Route path="/auth-callback" element={<AuthCallbackPage/>} /> 
//       <Route path="/user-profile" element={<span>USER PROFILE PAGE</span>} />
//       <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
//   );
// };

// export default AppRoutes;
