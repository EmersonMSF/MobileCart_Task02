import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateAccount from "./pages/CreateAccount";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import global from "./asset/css/global";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create_account" element={<CreateAccount />} />
      </Routes>

      {/* <ErrorModalBox /> */}
      {/* <LoginPage /> */}

      {/* <CreateAccount /> */}
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
