import React, { lazy, Suspense, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Auto Scroll To Top
import ScrollToTop from "./AutoScrollFuncanality/ScrollToTop";

// Toast Container
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
const Earner_Vehicals = lazy(
  () => import("./components/EarnerHome/Earner_Vehicals"),
);
const My_Earnings = lazy(() => import("./components/EarnerHome/My_Earnings"));
const My_Requests = lazy(() => import("./components/EarnerHome/My_Requests"));

const My_Bookings = lazy(() => import("./components/UserHome/My_Bookings"));
const Offers = lazy(() => import("./components/UserHome/Offers"));
const Support = lazy(() => import("./components/UserHome/Support"));

const User_History = lazy(() => import("./components/UserHome/User_History"));
const Earner_History = lazy(
  () => import("./components/EarnerHome/Earner_History"),
);

const EarnWithUs = lazy(() => import("./Entry_Pages/EarnWitUs"));
const Investor = lazy(() => import("./InvestmentComponents/Investor"));
const ExploreInvestment = lazy(
  () => import("./InvestmentComponents/ExploreInvestment"),
);
const OffersSection = lazy(() => import("./Entry_Pages/OffersSection"));
const SubscriptionSection = lazy(
  () => import("./Entry_Pages/SubscriptionSection"),
);
const GetRidingAccessories = lazy(
  () => import("./Entry_Pages/GetRidingAccessories"),
);

// Footer Pages
const Footer = lazy(() => import("./Footer_Section/Footer"));
const Terms = lazy(() => import("./Footer_Section/Trems"));
const PrivatecyPolicy = lazy(() => import("./Footer_Section/PrivacyPolicy"));
const HowWorks = lazy(() => import("./Footer_Section/HowWorks"));
const About = lazy(() => import("./Footer_Section/About"));
const HelpCenter = lazy(() => import("./Footer_Section/HelpCenter"));
const Contect = lazy(() => import("./Footer_Section/Contect"));

const App = () => {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const routeLabels = {
      "/": "Login",
      "/register": "Register",
      "/earn/with/us": "Earn With Us",
      "/investor/own": "Investor",
      "/explore/investment": "Explore Investment",
      "/offerssection": "Offers",
      "/static/data": "Accessories",
      "/user/subscription": "Subscription",
      "/userhome": "User Dashboard",
      "/earnerhome": "Earner Dashboard",
      "/earner/data": "My Vehicles",
      "/earner/requests": "Requests",
      "/earner/earnings": "Earnings",
      "/user/booking": "My Bookings",
      "/user/offers": "Offers",
      "/user/support": "Support",
      "/user/history": "Booking History",
      "/earner/history": "Earner History",
      "/footer": "Footer",
      "/how-it-works": "How It Works",
      "/terms": "Terms",
      "/privacy": "Privacy Policy",
      "/about": "About",
      "/help-center": "Help Center",
      "/contact": "Contact",
    };

    const path = location.pathname.toLowerCase();
    const label = routeLabels[path] || path.replace("/", "") || "Page";
    const toastMethod = path.startsWith("/user") || path.startsWith("/earner") ? toast.success : toast.info;

    toastMethod(`Navigated to ${label}`, {
      position: "top-right",
      autoClose: 2000,
      pauseOnHover: true,
      iconTheme: { primary: "#0f172a", secondary: "#ffffff" },
      style: {
        background: "#ffffff",
        color: "#0f172a",
        border: "0.5px solid rgba(15, 23, 42, 0.12)",
        boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
        borderRadius: "20px",
      },
    });
  }, [location]);

  return (
    <GlobelContext>
      <ScrollToTop />

      <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
        {/* ✅ CORRECT PLACE */}
        <ToastContainer position="top-right" autoClose={2000} theme="light" />

        <Routes>
          <Route element={<Layout />}>
            {/* PUBLIC ROUTES */}
            <Route element={<PublicRoute />}>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/earn/with/us" element={<EarnWithUs />} />
              <Route path="/Investor/own" element={<Investor />} />
              <Route
                path="/Explore/Investment"
                element={<ExploreInvestment />}
              />
              <Route path="/OffersSection" element={<OffersSection />} />

              <Route path="/static/data" element={<GetRidingAccessories />} />
            </Route>
            <Route
              path="/user/subscription"
              element={<SubscriptionSection />}
            />
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
              <Route path="/user/history" element={<User_History />} />
              <Route path="/earner/history" element={<Earner_History />} />
              <Route path="/footer" element={<Footer />} />
              {/* <Route path="/user/subscription" element={<SubscriptionSection />} /> */}
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
