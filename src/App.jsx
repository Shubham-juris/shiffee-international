import "./App.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import AppRoute from "./routes/AppRoute";

function App() {
  return (
    <>
      <Navbar />
      <AppRoute />
      <Footer />
    </>
  );
}

export default App;
