import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ServiceDetail from "../component/pages/services/[slug]/ServiceDetail";

// Option 1: Standalone Routes component
export const ServiceRoutes = () => {
  return (
    <Routes>
      <Route path="/services/:slug" element={<ServiceDetail />} />
    </Routes>
  );
};

// Option 2: Conditional rendering based on current path
export const ConditionalServiceRoutes = () => {
  const location = useLocation();

  // Only render service routes when we're on a service detail page
  if (
    location.pathname.startsWith("/services/") &&
    location.pathname !== "/services"
  ) {
    return (
      <Routes>
        <Route path="/services/:slug" element={<ServiceDetail />} />
      </Routes>
    );
  }

  return null;
};

// Option 3: Nested routes within existing structure
export const NestedServiceRoutes = () => {
  return (
    <Routes>
      <Route path=":slug" element={<ServiceDetail />} />
    </Routes>
  );
};

// Option 4: Route configuration object for manual integration
export const serviceRouteConfig = {
  path: "/services/:slug",
  element: <ServiceDetail />,
};

// Export the main component for easy access
export { ServiceDetail };
