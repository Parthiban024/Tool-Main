import logo from './logo.svg';
import './App.css';
import Home from "./components/homePage"
import Form from "./components/formPage"
import Dashboard from "./components/dashboardPage"
import { BrowserRouter as Router,Routes, Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
      
       <Route path="/" exact element={<Home/>}/>
       <Route path="/dashboard" exact element={<Dashboard/>}/>
       <Route path="/form" exact element={<Form/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
