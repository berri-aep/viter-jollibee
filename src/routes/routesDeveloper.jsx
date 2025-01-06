import DeveloperProtectedRoute from "@/components/pages/backend/access/DeveloperProtectedRoute";
import Advertisement from "@/components/pages/backend/Developer/advertisement/Advertisement";
import Category from "@/components/pages/backend/Developer/category/Category";
import Dashboard from "@/components/pages/backend/Developer/dashboard/Dashboard";
import Foods from "@/components/pages/backend/Developer/Foods/Foods";
import Role from "@/components/pages/backend/Developer/settings/role/Role";
import Settings from "@/components/pages/backend/Developer/settings/Settings";
import Developer from "@/components/pages/backend/settings/developer/Developer";
import User from "@/components/pages/backend/settings/user/User";

export const routeDeveloper = [
  {
    route: `/developer/`,
    element: (
      <DeveloperProtectedRoute>
        <Dashboard />
      </DeveloperProtectedRoute>
    ),
  },
  {
    route: `/developer/dashboard`,
    element: (
      <DeveloperProtectedRoute>
        <Dashboard />
      </DeveloperProtectedRoute>
    ),
  },
  {
    route: `/developer/advertisement`,
    element: (
      <DeveloperProtectedRoute>
        <Advertisement />
      </DeveloperProtectedRoute>
    ),
  },
  {
    route: `/developer/category`,
    element: (
      <DeveloperProtectedRoute>
        <Category />
      </DeveloperProtectedRoute>
    ),
  },
  {
    route: `/developer/foods`,
    element: (
      <DeveloperProtectedRoute>
        <Foods />
      </DeveloperProtectedRoute>
    ),
  },
  {
    route: `/developer/settings`,
    element: (
      <DeveloperProtectedRoute>
        <Settings />
      </DeveloperProtectedRoute>
    ),
  },
  {
    route: `/developer/settings/role`,
    element: (
      <DeveloperProtectedRoute>
        <Role/>
      </DeveloperProtectedRoute>
    ),
  },

  {
    route: `/developer/settings/developer`,
    element: (
      <DeveloperProtectedRoute>
        <Developer />
      </DeveloperProtectedRoute>
    ),
  },
  {
    route: `/developer/settings/users`,
    element: <User />,
  },
];
