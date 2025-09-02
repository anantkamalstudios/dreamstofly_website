# Service Detail Routes Integration Guide

This guide shows you multiple ways to integrate the service detail routes (`/services/:slug`) without modifying your main `App.jsx` file.

## Option 1: Use ConditionalServiceRoutes (Recommended)

This approach automatically detects when you're on a service detail page and renders the appropriate route.

### Step 1: Import in your Services component

```jsx
// In src/component/pages/services/Services.jsx
import { ConditionalServiceRoutes } from "../../routes/ServiceRouting";

export default function Services() {
  return (
    <>
      {/* Your existing Services content */}
      <ServicesHero />
      <FeaturedServices />
      {/* ... other components */}

      {/* Add this at the bottom */}
      <ConditionalServiceRoutes />
    </>
  );
}
```

### Step 2: Update your Services component

```jsx:src/component/pages/services/Services.jsx
// ... existing code ...
import { ConditionalServiceRoutes } from '../../routes/ServiceRouting';

export default function Services() {
  return (
    <>
      <ServicesHero />
      <FeaturedServices />
      <ServicesBenefits />
      <ServicesCategories />
      <ServicesGrid />
      <ServicesExperiences />
      <Testimonials />
      <ServicesCTA />

      {/* Add this line */}
      <ConditionalServiceRoutes />
    </>
  );
}
```

## Option 2: Manual Route Addition (Most Control)

If you want to manually control when and where the routes are added:

### Step 1: Create a wrapper component

```jsx
// Create src/component/layouts/ServiceWrapper.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import ServiceDetail from "../pages/services/[slug]/ServiceDetail";

export const ServiceWrapper = ({ children }) => {
  return (
    <>
      {children}
      <Routes>
        <Route path="/services/:slug" element={<ServiceDetail />} />
      </Routes>
    </>
  );
};
```

### Step 2: Wrap your MainLayout

```jsx
// In App.jsx, wrap MainLayout with ServiceWrapper
import { ServiceWrapper } from "./component/layouts/ServiceWrapper";

export default function App() {
  return (
    <>
      <Router>
        <ServiceWrapper>
          <MainLayout>{/* Your existing routes */}</MainLayout>
        </ServiceWrapper>
      </Router>
    </>
  );
}
```

## Option 3: Dynamic Route Injection

Create a hook that dynamically adds routes:

```jsx
// Create src/hooks/useDynamicRoutes.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useDynamicRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for navigation to service detail pages
    const handleServiceNavigation = (slug) => {
      navigate(`/services/${slug}`);
    };

    // Expose this function globally or through context
    window.navigateToService = handleServiceNavigation;
  }, [navigate]);
};
```

## Option 4: Context-Based Routing

Create a routing context that manages service routes:

```jsx
// Create src/contexts/ServiceRoutingContext.jsx
import React, { createContext, useContext, useState } from "react";
import ServiceDetail from "../component/pages/services/[slug]/ServiceDetail";

const ServiceRoutingContext = createContext();

export const ServiceRoutingProvider = ({ children }) => {
  const [currentService, setCurrentService] = useState(null);

  const navigateToService = (slug) => {
    setCurrentService(slug);
  };

  return (
    <ServiceRoutingContext.Provider
      value={{ navigateToService, currentService }}
    >
      {children}
      {currentService && <ServiceDetail slug={currentService} />}
    </ServiceRoutingContext.Provider>
  );
};

export const useServiceRouting = () => useContext(ServiceRoutingContext);
```

## Testing the Integration

1. **Start your development server**
2. **Navigate to `/services`** - You should see your main Services page
3. **Click on any service card** in `ServicesGrid.jsx` - It should navigate to `/services/[slug]`
4. **Check the URL** - It should change to something like `/services/student-flight-ticket`

## Troubleshooting

### Issue: Routes not working

- Make sure you've imported the routing component correctly
- Check that the path in your routing component matches the navigation path
- Verify that `react-router-dom` is properly installed

### Issue: Page not found

- Ensure the `ServiceDetail` component is properly exported
- Check that all required data files (`ServiceForms.js`, `ServiceDetails.js`) exist
- Verify the slug generation in `ServicesData.js`

### Issue: Navigation not working

- Check that `useNavigate` is properly imported in `ServicesGrid.jsx`
- Verify the `handleCardClick` function is called when clicking cards
- Ensure the slug property exists in your service data

## Recommended Approach

**Use Option 1 (ConditionalServiceRoutes)** as it:

- ✅ Doesn't require App.jsx changes
- ✅ Automatically handles routing
- ✅ Keeps your existing structure intact
- ✅ Easy to implement and maintain

## Next Steps

1. Choose your preferred integration method
2. Implement the chosen option
3. Test navigation from ServicesGrid to individual service pages
4. Customize the service detail pages as needed

The system is now ready to work - you just need to choose how you want to integrate the routing!
