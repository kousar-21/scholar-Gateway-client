import {
  createBrowserRouter,
} from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";
import AuthLayouts from "../Layouts/AuthLayouts";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Spinner from "../Spinner/Spinner";
import Scholarships from "../Pages/Scholarships/Scholarships";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import AllReviews from "../Pages/Dashboard/AllReviews/AllReviews";
import AppliedScholarship from "../Pages/Dashboard/AppliedScholarship/AppliedScholarship";
import AddScholarship from "../Pages/Dashboard/AddScholarship/AddScholarship";
import ManageScholarship from "../Pages/Dashboard/ManageScholarship/ManageScholarship";
import MyReviews from "../Pages/Dashboard/MyReviews/MyReviews";
import MyApplication from "../Pages/Dashboard/MyApplication/MyApplication";
import ScholarshipDetails from "../Pages/Details/ScholarshipDetails";
import ApplicantForm from "../Components/ApplyScholarshipPayment/ApplicantForm/ApplicantForm";
// import PaymentGateway from "../Components/ApplyScholarshipPayment/PaymentGateway/PaymentGateway";
import Payment from "../Components/ApplyScholarshipPayment/Payment/Payment";
import AppliedDetails from "../Pages/Dashboard/MyApplication/component/AppliedDetails";
import EditApplication from "../Pages/Dashboard/MyApplication/component/EditApplication";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import AdminRoute from "../PrivateRoutes/AdminRoute";
import RestrictedRoute from "../PrivateRoutes/RestrictedRoute";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blogs from "../Pages/Blogs/Blogs";


export const router = createBrowserRouter([
  {
    path: "/",
    hydrateFallbackElement: <Spinner></Spinner>,
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/allScholarship',
        element: <Scholarships></Scholarships>
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      },
      {
        path: "/scholarship/:id",
        element: <ScholarshipDetails></ScholarshipDetails>
      },
      {
        path: "/apply-scholarship/:id",
        element: <PrivateRoutes><ApplicantForm></ApplicantForm></PrivateRoutes>
      },
      {
        path: "/payment/:id",
        element: <PrivateRoutes><Payment></Payment></PrivateRoutes>
      },

    ]
  },
  {
    path: "/",
    hydrateFallbackElement: <Spinner></Spinner>,
    element: <AuthLayouts></AuthLayouts>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ]
  },
  {

    path: '/dashboardLayout',
    hydrateFallbackElement: <Spinner></Spinner>,
    element: <PrivateRoutes><DashboardLayouts></DashboardLayouts></PrivateRoutes>,
    children: [
      {
        index: true,
        element: <DashboardHome></DashboardHome>
      },
      {
        path: "my-profile",
        element: <PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>
      },
      // user part
      {
        path: 'my-applications',
        element: <PrivateRoutes><MyApplication></MyApplication></PrivateRoutes>
      },
      {
        path: 'my-applications/appliedDetails/:id',
        element: <AppliedDetails></AppliedDetails>
      },
      {
        path: 'my-applications/edit-application/:id',
        element: <EditApplication></EditApplication>
      },
      {
        path: 'my-reviews',
        element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
      },
      // moderator part
      {
        path: 'manage-scholarships',
        element: <RestrictedRoute><ManageScholarship></ManageScholarship></RestrictedRoute>
      },
      {
        path: 'add-scholarship',
        element: <RestrictedRoute><AddScholarship></AddScholarship></RestrictedRoute>
      },
      {
        path: 'all-applications',
        element: <RestrictedRoute><AppliedScholarship></AppliedScholarship></RestrictedRoute>
      },
      {
        path: 'all-reviews',
        element: <RestrictedRoute><AllReviews></AllReviews></RestrictedRoute>
      },
      // admin part
      {
        path: 'manage-users',
        element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
      },
    ]

  },
  {
    path: "/*",
    element: <Error></Error>
  }
]);