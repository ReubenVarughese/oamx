import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import AboutPage from '@/components/pages/AboutPage';
import Event2025Page from '@/components/pages/Event2025Page';
import GetInvolvedPage from '@/components/pages/GetInvolvedPage';
import RegistrationPage from '@/components/pages/RegistrationPage';
import MentorshipPage from '@/components/pages/MentorshipPage';
import TeamPage from '@/components/pages/TeamPage';
import MediaKitPage from '@/components/pages/MediaKitPage';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "2025-event",
        element: <Event2025Page />,
      },
      {
        path: "get-involved",
        element: <GetInvolvedPage />,
      },
      {
        path: "registration",
        element: <RegistrationPage />,
      },
      {
        path: "mentorship",
        element: <MentorshipPage />,
      },
      {
        path: "team",
        element: <TeamPage />,
      },
      {
        path: "media-kit",
        element: <MediaKitPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
