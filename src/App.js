import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import PageOne from "./Pages/PageOne";
import PageTwo from "./Pages/PageTwo";
import PageThree from "./Pages/PageThree";
import PageCTA from "./Pages/PageCTA";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={"/"} exact element={<Home />} />
          <Route path={"/page-one"} exact element={<PageOne />} />
          <Route path={"/page-two"} exact element={<PageTwo />} />
          <Route path={"/page-three"} exact element={<PageThree />} />
          <Route path={"/page-cta"} exact element={<PageCTA />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
