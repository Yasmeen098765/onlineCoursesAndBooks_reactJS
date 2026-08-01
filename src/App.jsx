import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import HandleLottie from "./components/HandleLottie/HandleLottie";
import { Toaster } from "react-hot-toast";
import ProtectedRout from "./components/ProtectedRout/ProtectedRout";
//اي مكون لازم احمله بشكل كسول lazy:
const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./pages/Home/Home"));
const CourseDetails = lazy(() => import("./pages/CourseDetails/CourseDetails"));
const Shope = lazy(() => import("./pages/Shope/Shope"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const BookDetails = lazy(() => import("./pages/BookDetails/BookDetails"));
const Register = lazy(() => import("./pages/Auth/Register"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Profile = lazy(() => import("./pages/Profile/Profile"));

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <Suspense fallback={<HandleLottie state={"main"} />}>
            <Layout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<HandleLottie state={"secondary"} />}>
                <Home />
              </Suspense>
            ),
          },
          {
            path: "courseDetails/:id",
            element: (
              <Suspense fallback={<HandleLottie state={"secondary"} />}>
                <CourseDetails />
              </Suspense>
            ),
          },
          {
            path: "shope",
            element: (
              <Suspense fallback={<HandleLottie state={"secondary"} />}>
                <ProtectedRout>
                  <Shope />
                </ProtectedRout>
              </Suspense>
            ),
          },
          {
            path: "courseDetails",
            element: (
              <Suspense fallback={<HandleLottie state={"secondary"} />}>
                <CourseDetails />
              </Suspense>
            ),
          },
          {
            path: "cart",
            element: (
              <Suspense fallback={<HandleLottie state={"secondary"} />}>
                <ProtectedRout>
                  <Cart />
                </ProtectedRout>
              </Suspense>
            ),
          },
          {
            path: "register",
            element: (
              <Suspense fallback={<HandleLottie state={"secondary"} />}>
                <Register />
              </Suspense>
            ),
          },
          {
            path: "login",
            element: (
              <Suspense fallback={<HandleLottie state={"secondary"} />}>
                <Login />
              </Suspense>
            ),
          },
          {
            path: "profile",
            element: (
              <Suspense fallback={<HandleLottie state={"secondary"} />}>
                <ProtectedRout>
                  <Profile />
                </ProtectedRout>
              </Suspense>
            ),
          },
          {
            path: "bookDetails",

            children: [
              {
                index: true,
                element: (
                  <Suspense fallback={<HandleLottie state={"secondary"} />}>
                    <BookDetails />
                  </Suspense>
                ),
              },
              {
                path: ":id",
                element: (
                  <Suspense fallback={<HandleLottie state={"secondary"} />}>
                    <BookDetails />
                  </Suspense>
                ),
              },
            ],
          },
        ],
        errorElement: <HandleLottie state={"error"} />,
      },
    ],
    {
      basename: "/onlineCoursesAndBooks_reactJS/", // 👈 هذا هو الحل!
    },
  );
  return (
    <main>
      <RouterProvider router={router} />
      <Toaster />
    </main>
  );
}

export default App;
