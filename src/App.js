import { Route, Routes } from "react-router-dom";
import Header from "./views/Header/Header";
import Main from "./views/Main/Main";
import Footer from "./views/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
