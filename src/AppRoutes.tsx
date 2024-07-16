import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Web3Modal from "./pages/web3modal";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Web3Modal />} />
        <Route path="*" element={<Web3Modal />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
