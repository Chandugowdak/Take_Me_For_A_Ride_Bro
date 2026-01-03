import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout_Section/Layout';
import Login from './Pages/Login';
import Register from './Pages/Registration';
import User_Home from './components/UserHome/User_Home';
import Earn_Home from './components/EarnerHome/Earn_Home';

import GlobelContext from './context/GlobelContext';

// // Import Routes
import PublicRoute from './router/PublicRoute';
import ProtectedRoute from './router/ProtectedRoute';
import Earner_Vehicals from './components/EarnerHome/Earner_Vehicals';
import My_Earnings from './components/EarnerHome/My_Earnings';
import My_Requests from './components/EarnerHome/My_Requests';
import My_Bookings from './components/UserHome/My_Bookings';
import Offers from './components/UserHome/Offers';
import Support from './components/UserHome/Support';
import User_Data from './User_Data/User_Data';
import EarnWithUs from './Entry_Pages/EarnWitUs';
import Franchise from './Entry_Pages/Franchise';
import OffersSection from './Entry_Pages/OffersSection';
import SubscriptionSection from './Entry_Pages/SubscriptionSection'; 
import GetRidingAccessories from './Entry_Pages/GetRidingAccessories'; 
import User_History from './components/UserHome/User_History';

const  App = ()=>{
  return (
    <GlobelContext>
      <Routes>
        {/* IMPLEMENT OUT LET SO IT WILL BW BE PARENT ROUTE */}
    <Route  element={<Layout/>}>
   {/* CHILD ROUTE FOR THE OUTLET */}
        {/* PUBLIC ROUTES */}
        <Route element={<PublicRoute />}>
              <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/earn/with/us" element={<EarnWithUs/>}/>
          <Route path="/franchise/own" element={<Franchise/>}/>
          <Route path="/OffersSection" element={<OffersSection/>}/>
          <Route path="/Sub" element={<SubscriptionSection/>}/>
          <Route path="/static/data" element={<GetRidingAccessories/>}/>
        </Route>

        {/* PROTECTED ROUTES */}
        <Route element={<ProtectedRoute />}>
          <Route path="/Userhome" element={<User_Home />} />
          <Route path="/Earnerhome" element={<Earn_Home  />} />
          <Route path="/Earner/Data" element={<Earner_Vehicals/>}/>
          <Route path="/earner/requests" element={<My_Requests/>}/>
          <Route path="/earner/earnings" element={<My_Earnings/>}/>
          <Route path="/user/booking" element={<My_Bookings/>}/>
          <Route path="/user/offers" element={<Offers/>}/>
          <Route path="/user/support" element={<Support/>}/>
          <Route path='/user/data' element={<User_Data/>}/>
          <Route path="/user/support" element={<Support/>}/>
          <Route path="/user/offers" element={<Offers/>}/>
          <Route path="/user/history" element={<User_History/>}/>
        </Route>

</Route>

      </Routes>
    </GlobelContext>
  );
}

export default App;





