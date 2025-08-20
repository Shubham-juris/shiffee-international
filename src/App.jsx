import "./App.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import AppRoute from "./routes/AppRoute";
import { CurrencyProvider } from "./context/CurrencyContext";

function App() {
  return (
    <CurrencyProvider>
      <Navbar />
      <AppRoute />
      <Footer />
    </CurrencyProvider>
  );
}

export default App;
