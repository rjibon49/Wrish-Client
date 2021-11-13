import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import DashBoardHome from "./Pages/DashBoard/DashboardHome";
import FeatureDetails from "./Pages/Features/FeatureItems/FeatureDetails";
import Features from "./Pages/Features/Features";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import PrivetRoute from "./Pages/PrivetRoute/PrivetRoute";
import Login from "./Pages/Registration/Login";
import Register from "./Pages/Registration/Register";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/features">
              <Features />
            </Route>
            <PrivetRoute path="/feature/:featureId">
              <FeatureDetails />
            </PrivetRoute>
            <PrivetRoute path="/dashboardhome">
              <DashBoardHome />
            </PrivetRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
