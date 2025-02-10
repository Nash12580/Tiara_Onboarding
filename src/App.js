import { createBrowserRouter, createRoutesFromElements, Link, Route, RouterProvider, Outlet } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SingleServiceDetails from "./pages/singleServiceDetails";
import ErrorPage from "./pages/ErrorPage";
import EmailPage from "./pages/EmailPage";
import FullListingsPage from "./pages/FullListingsPage";
import CreatePassword from "./pages/CreatePassword";
import AboutYou from "./pages/AboutYou";
import LocationCard from "./pages/LocationCard";
import BusinessHrs from "./pages/BusinessHrsCard";
import ProductServices from "./pages/ProductServices";
import SignupLayout from "./components/SignupLayout";
// import Showcase from "./pages/Showcase";
import VendorClient from "./pages/VendorClient";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <>
      <Route path='/' element={<Main />} errorElement={<ErrorPage />}>
          <Route index element={<FullListingsPage />} />
      </Route>

      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<SingleServiceDetails />}/>

      <Route path='/signup' element={<SignupLayout />}>
          <Route path='vendor-client' element={<VendorClient />}/>
          <Route path='email' element={<EmailPage />} />
          <Route path='password' element={<CreatePassword />} />
          <Route path='about' element={<AboutYou />} />
          <Route path='location' element={<LocationCard />} />
          <Route path='business-hrs' element={<BusinessHrs />} />
          <Route path='product-services' element={<ProductServices />}/>
      </Route>
    </>
    )
  );

  return <RouterProvider router={router}/>;
}