import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LogoPage from "./pages/LogoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LogoPage />} />
        <Route path={"/home"} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
