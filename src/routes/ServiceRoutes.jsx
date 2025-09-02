import { Routes, Route } from "react-router-dom";
import ServiceDetail from "../component/pages/services/[slug]/ServiceDetail";

// Service detail routes configuration
export const ServiceRoutes = () => {
  return (
    <Routes>
      <Route path="/services/:slug" element={<ServiceDetail />} />
    </Routes>
  );
};

// Alternative: Export as a routes array for more flexibility
export const serviceRoutes = [
  {
    path: "/services/:slug",
    element: <ServiceDetail />,
  },
];

// Export the component for direct use
export { ServiceDetail };
