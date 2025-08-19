import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact";
import NewArrivals from "../page/NewArrivals";
import Sale from "../page/Sale";
import Men from "../page/Men";
import Women from "../page/Women";
import Kids from "../page/Kids";
import Accessories from "../page/Accessories";
import CardComponet from "../components/common/CardComponet";
import { ScrollToTop } from "../components/ScroolToTop";
const AppRoute = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewArrivals />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CardComponet />} />
      </Routes>
    </>
  );
};

export default AppRoute;
