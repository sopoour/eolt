//import { useState } from "react";
//import useApiData from "./hooks/useApiData";
import Home from "./pages/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Contents from "./pages/Contents";
import { Route, Routes } from "react-router-dom";
import useApiData from "./hooks/useApiData";
import ContentDetail from "./pages/ContentDetail";
import About from "./pages/About";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound"

const App = () => {
  const { data, httpError, isLoading } = useApiData();

  // TODo: figure out how to define a route path so that path is relative → so I don't need to use /eolt but /eolt = /

  return (
    <div style={{ position: "relative" }}>
      <NavBar />
      <Routes>
        <Route
          path="/eolt"
          element={
            <Home isLoading={isLoading} httpError={httpError} data={data} />
          }
        />
        <Route
          path="/eolt/contents"
          element={
            <Contents isLoading={isLoading} httpError={httpError} data={data} />
          }
        />
        <Route path="/eolt/contents/:contentId" element={<ContentDetail />} />
        <Route path="/eolt/about-us" element={<About />} />
        <Route path="/eolt/support-us" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
