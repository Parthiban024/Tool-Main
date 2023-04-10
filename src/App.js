import logo from './logo.svg';
import './App.css';
import Home from "./components/homePage"
import Form from "./components/formPage"
import Dashboard from "./components/dashboardPage"
import LoginPage from "./components/loginPage"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" exact element={<Home />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/employee/details/:empid" exact element={<Details />} />
          <Route path="/form" exact element={<Form />} />
          <Route path="/login" exact element={<LoginPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
