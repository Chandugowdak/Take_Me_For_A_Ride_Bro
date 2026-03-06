import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// CORE COMPONENTS (do not lazy load)
import GlobelContext from "./context/GlobelContext";
import PublicRoute from "./router/PublicRoute";
import ProtectedRoute from "./router/ProtectedRoute";

// LAZY LOADED COMPONENTS
const Layout = lazy(() => import("./Layout_Section/Layout"));
const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Registration"));

const User_Home = lazy(() => import("./components/UserHome/User_Home"));
const Earn_Home = lazy(() => import("./components/EarnerHome/Earn_Home"));
const Earner_Vehicals = lazy(() =>
  import("./components/EarnerHome/Earner_Vehicals")
);
const My_Earnings = lazy(() => import("./components/EarnerHome/My_Earnings"));
const My_Requests = lazy(() => import("./components/EarnerHome/My_Requests"));

const My_Bookings = lazy(() => import("./components/UserHome/My_Bookings"));
const Offers = lazy(() => import("./components/UserHome/Offers"));
const Support = lazy(() => import("./components/UserHome/Support"));
const User_Data = lazy(() => import("./User_Data/User_Data"));

const User_History = lazy(() => import("./components/UserHome/User_History"));
const Earner_History = lazy(() =>
  import("./components/EarnerHome/Earner_History")
);

const EarnWithUs = lazy(() => import("./Entry_Pages/EarnWitUs"));
const Franchise = lazy(() => import("./Entry_Pages/Franchise"));
const OffersSection = lazy(() => import("./Entry_Pages/OffersSection"));
const SubscriptionSection = lazy(() =>
  import("./Entry_Pages/SubscriptionSection")
);
const GetRidingAccessories = lazy(() =>
  import("./Entry_Pages/GetRidingAccessories")
);

// Footer Pages
const Footer = lazy(() => import("./Footer_Section/Footer"));
const Terms = lazy(() => import("./Footer_Section/Trems"));
const PrivatecyPolicy = lazy(() =>
  import("./Footer_Section/PrivacyPolicy")
);
const HowWorks = lazy(() => import("./Footer_Section/HowWorks"));
const About = lazy(() => import("./Footer_Section/About"));
const HelpCenter = lazy(() => import("./Footer_Section/HelpCenter"));
const Contect = lazy(() => import("./Footer_Section/Contect"));

const App = () => {
  return (
    <GlobelContext>
      <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
        <Routes>

          {/* PARENT ROUTE */}
          <Route element={<Layout />}>

            {/* PUBLIC ROUTES */}
            <Route element={<PublicRoute />}>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/earn/with/us" element={<EarnWithUs />} />
              <Route path="/franchise/own" element={<Franchise />} />
              <Route path="/OffersSection" element={<OffersSection />} />
              <Route path="/Sub" element={<SubscriptionSection />} />
              <Route path="/static/data" element={<GetRidingAccessories />} />
            </Route>

            {/* PROTECTED ROUTES */}
            <Route element={<ProtectedRoute />}>
              <Route path="/Userhome" element={<User_Home />} />
              <Route path="/Earnerhome" element={<Earn_Home />} />
              <Route path="/Earner/Data" element={<Earner_Vehicals />} />
              <Route path="/earner/requests" element={<My_Requests />} />
              <Route path="/earner/earnings" element={<My_Earnings />} />
              <Route path="/user/booking" element={<My_Bookings />} />
              <Route path="/user/offers" element={<Offers />} />
              <Route path="/user/support" element={<Support />} />
              <Route path="/user/data" element={<User_Data />} />
              <Route path="/user/history" element={<User_History />} />
              <Route path="/earner/history" element={<Earner_History />} />
              <Route path="/footer" element={<Footer />} />
            </Route>

            {/* STATIC ROUTES */}
            <Route path="/how-it-works" element={<HowWorks />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<PrivatecyPolicy />} />
            <Route path="/about" element={<About />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/contact" element={<Contect />} />

          </Route>
        </Routes>
      </Suspense>
    </GlobelContext>
  );
};

export default App;