import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";

import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Revive from "./components/Revive";
import About from "./components/About";
import Banner from "./components/Banner";
import Service from "./components/Service";
import Procedure from "./components/Procedure";
import Consult from "./components/Consult";
import Whychoose from "./components/Whychoose";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Booknow from "./components/Booknow";
import Privacy from "./components/Privacy";

// Service Pages
import Depression from "./pages/Depression";
import AnxietyDisorders from "./pages/AnxietyDisorders";
import OCD from "./pages/Ocd";
import Bipolardisorder from "./pages/Bipolardisorder";
import Childadolescentpsychiatry from "./pages/Childadolescentpsychiatry";
import Deaddictionrecovery from "./pages/Deaddictionrecovery";
import Sexualhealthcounseling from "./pages/Sexualhealthcounseling";

// Shared Layout
function Layout() {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}

// Home Page
function HomePage() {
  return (
    <>
      <Banner />
      <Home />
      <Revive />
      <Service />
      <Procedure />
      <Consult />
      <Whychoose />
      <Brands />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Shared Layout */}
      <Route element={<Layout />}>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Other Pages */}
        <Route path="/detail" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/procedure" element={<Procedure />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/why-choose-us" element={<Whychoose />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/revive" element={<Revive />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/booknow" element={<Booknow />} />
        <Route path="/privacy-policy" element={<Privacy />} />

        {/* Service Dropdown Pages */}
        <Route
          path="/service/depression"
          element={<Depression />}
        />

        <Route
          path="/service/anxiety-disorders"
          element={<AnxietyDisorders />}
        />

        <Route
          path="/service/ocd"
          element={<OCD />}
        />

        <Route
          path="/service/bipolar-disorder"
          element={<Bipolardisorder />}
        />

        <Route
          path="/service/child-adolescent-psychiatry"
          element={<Childadolescentpsychiatry />}
        />

        <Route
          path="/service/de-addiction-recovery"
          element={<Deaddictionrecovery />}
        />

        <Route
          path="/service/sexual-health-counseling"
          element={<Sexualhealthcounseling />}
        />
      </Route>
    </Routes>
  );
}

export default App;