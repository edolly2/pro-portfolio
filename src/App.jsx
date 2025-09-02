import "./App.css";
import Header from "./components/header/Header";
import IconBar from "./components/iconBar/IconBar";
import Nav from "./components/navigation/Nav";
import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";

function App() {
  return (
    <>
      <Layout>
        <Header>
          <Nav />
        </Header>
        <IconBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
