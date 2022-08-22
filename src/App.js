import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyles from "./globalStyles";

// pages
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import SingupPage from "./pages/SingupPage";
// ens pages

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/Signup" element={<SingupPage />} />
        <Route exact path="/Pricing" element={<PricingPage />} />
      </Routes>
    </>
  );
}

export default App;
