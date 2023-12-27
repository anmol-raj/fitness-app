import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Box width={"400px"} sx={{ width: { xl: "1488px" } }} m={"auto"}>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path="/exercise/1" element={<ExerciseDetail />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Box>
    </>
  );
};

export default App;
