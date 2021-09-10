
import './App.css';
import Home from './comp/Home';
import Main from './comp/Main';
import {BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Company from './comp/Company';
import Service from './comp/Service';

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="header">
            <Link to="/home" className="color">HOME</Link>
            <Link to="/main" className="color">코로나 예방접종 현황</Link>
            <Link to="/company" className="color">코로나 확진현황</Link>
            <Link to="/service" className="color">강원도 춘천시_코로나 19 확진자 월별</Link>
        </header>
        <Switch>
          <Route exact path="/home"> <Home /> </Route>
          <Route exact path="/main"> <Main /> </Route>
          <Route path="/company"> <Company/> </Route>
          <Route path="/service"> <Service/> </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
