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
      <HomePage />
      <AboutPage/>
    </>
  );
}

export default App;
