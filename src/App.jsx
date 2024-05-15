import { lazy, Suspense, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frontpage from "./page/Frontpage";
import { SiStaffbase } from "react-icons/si";
import Sidebar from "./component/sidebar";
import Navbar from "./component/navbar";
import Staff from "./page/Staff";
import Driver from "./page/Driver";
import Truck from "./page/Truck";
import Dustbin from "./page/Dustbin";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex view-page">
        <Sidebar />
        <div className="render-component">
          <Navbar />
          <Suspense fallback={<span>Loading..</span>}>
            <Routes>
              <Route path="/" element={<Frontpage />} />
              <Route path="/staff" element={<Staff />} />
              <Route path="/driver" element={<Driver />} />
              <Route path="/truck" element={<Truck />} />
              <Route path="/dustbin" element={<Dustbin />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
