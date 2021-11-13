import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/Home/Home'
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';
import Baskets from './Pages/Home/Baskets/Baskets';
import Login from './Pages/Home/Login/Login';
import Register from './Pages/Home/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddBraskets from './Pages/Dashboard/Admin/AddBraskets/AddBraskets';
import AuthProvider from './Context/AuthProvider';
import Purchase from './Pages/Home/Purchase/Purchase';
import PrivateRoute from './Pages/Home/Login/PrivateRoute/PrivateRoute';
import Payment from './Pages/Dashboard/User/Payment/Payment';
import MyOrder from './Pages/Dashboard/User/MyOrder/MyOrder';
import UserReview from './Pages/Dashboard/User/UserReview/UserReview';
import Testimonal from './Pages/Home/Testimonal/Testimonal';
import Explore from './Pages/Home/Explore/Explore';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header />
        <Switch>
            <Route exact path="/"> <Home></Home> </Route>
            <Route  path="/home"> <Home></Home> </Route>
            <Route  path="/baskets"> <Baskets></Baskets> </Route>
            <Route  path="/explore"> <Explore></Explore> </Route>
            <PrivateRoute  path="/purchase/:id"> <Purchase></Purchase> </PrivateRoute>
            <Route  path="/login"> <Login></Login> </Route>
            <Route  path="/register"> <Register></Register> </Route>
            <PrivateRoute  path="/dashboard"> <Dashboard></Dashboard> </PrivateRoute>
            <Route  path="/addbraskets"> <AddBraskets></AddBraskets> </Route>
            <PrivateRoute  path="/payment"> <Payment></Payment> </PrivateRoute>
            <PrivateRoute  path="/myorder"> <MyOrder></MyOrder> </PrivateRoute>
            <PrivateRoute  path="/userreview"> <UserReview></UserReview> </PrivateRoute>
        </Switch>
        <Footer />
      </Router>
   </AuthProvider>
    </div>
  );
}

export default App;
