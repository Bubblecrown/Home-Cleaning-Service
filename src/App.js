import { Route, Router, Routes } from "react-router-dom";
import { Navbar } from "./components";
import GlobalStyles from "./globalStyles";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
// pages
// import HomePage from "./pages/HomePage";
// ens pages

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
