import "./App.css";
import Header from "./components/header/Header";
import IconBar from "./components/iconBar/IconBar";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <IconBar />
      </Layout>
    </>
  );
}

export default App;
