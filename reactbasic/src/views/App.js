import logo from './logo.svg';
import './App.scss';
import ListTodo from './Todos/ListTodo';
// import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';

// import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import MyComponent from './Example/MyComponent';
import ListUser from './Users/ListUser';
import DetailUserParam from './Users/DetailUserParam';

const history = createBrowserHistory({ window });

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route exact="true" path="/" element={<Home history={history} />} />
            <Route path="/todos" element={<ListTodo />} />
            <Route path="/about" element={<MyComponent />} />
            <Route path="/users" element={<ListUser baseUrl="/users" />} exact="true">
              <Route path=':userId' element={<DetailUserParam />} />
            </Route>
          </Routes>
          <Outlet />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
