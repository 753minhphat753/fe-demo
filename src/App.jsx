import { BrowserRouter, Route, Routes } from "react-router";
import './App.css';
import { PublicRoute } from './route/PublicRoute';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {PublicRoute.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );

  
}

export default App
