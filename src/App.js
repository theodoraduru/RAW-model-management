import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Landing from "./routes/Landing";
import WhoWeAre from "./routes/WhoWeAre";
import WomanHome from "./routes/WomanHome";
import EdithA from "./routes/EdithA";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
// import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  // const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/WomanHome" element={<WomanHome />} />
          <Route path="/WhoWeAre" element={<WhoWeAre />} />
          <Route path="/EdithA" element={<EdithA />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
