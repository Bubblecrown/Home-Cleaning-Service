import { Navbar } from "./components";
import GlobalStyles from "./globalStyles";
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
    </>
  );
}

export default App;
