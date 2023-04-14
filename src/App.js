import logo from './logo.svg';
import './App.css';
import Home from "./components/homePage"
import Form from "./components/formPage"
import FormTwo from "./components/formTimechamp"
import FormThree from "./components/formHr"
import Dashboard from "./components/dashboardPage"
import DashboardTC from "./components/dashboardTC"
import DashboardHR from "./components/dashboardHR"
import LoginPage from "./components/loginPage"
import LoginPageTwo from "./components/loginTC"
import LoginPageThree from "./components/loginHR"
import ReviewDetails from './components/viewPage'
import ViewPageTwo from "./components/viewPageTC"
import ViewPageThree from "./components/viewPageHR"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" exact element={<Home />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/form" exact element={<Form />} />
          <Route path="/formTimechamp" exact element={<FormTwo />} />
          <Route path="/formHr" exact element={<FormThree />} />
          <Route path="/dashboardTC" exact element={<DashboardTC />} />
          <Route path="/dashboardHR" exact element={<DashboardHR />} />
          <Route path="/review/:id" element={<ReviewDetails />} />
          <Route path="/reviewtwo/:id" element={<ViewPageTwo />} />
          <Route path="/reviewthree/:id" element={<ViewPageThree />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/loginTC" exact element={<LoginPageTwo />} />
          <Route path="/loginHR" exact element={<LoginPageThree />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
