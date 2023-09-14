import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
      </Routes>
      <div>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favourites">Preferiti</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/favourites" component={Preferiti} />
          </Switch>
        </Router>
      </div>
    </BrowserRouter>
  );
}

// export default App;
// import React from "react";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import Azienda from "./Azienda";
// import Preferiti from "./Preferiti";

// const App = () => {
//   return (
//     <div>
//       <Router>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/favourites">Preferiti</Link>
//             </li>
//           </ul>
//         </nav>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/favourites" component={Preferiti} />
//         </Switch>
//       </Router>
//     </div>
//   );
// };

// const Home = () => {
//   // Qui puoi renderizzare l'elenco di aziende e il componente Azienda
// };

export default App;
