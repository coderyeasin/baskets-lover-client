import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import './Dashboard.css';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import AddBraskets from '../Admin/AddBraskets/AddBraskets';
import ManagelAllOrder from '../Admin/ManageAllOrders/ManagelAllOrder';
import MyOrder from '../User/MyOrder/MyOrder';
import Payment from '../User/Payment/Payment';
import UserReview from '../User/UserReview/UserReview';
import AdminRoute from '../../Home/Login/AdminRoute/AdminRoute';

const Dashboard = () => {

    const { users, admin, logoutUsers } = useAuth();
    // const [control, setControl] = useState("myOrders")
    let { path, url } = useRouteMatch();

    return (
        <Container className="my-5 py-5">
            <Row>
                <div className="col-md-3 dashboard_item" >
                    <Link to={`${url}`} className="text-decoration-none text-light fs-4 p-2" >My Orders</Link> <br />

                    <Link to={`${url}/userReview`} className="text-decoration-none text-light fs-4 p-2" >Review</Link> <br />

                    <Link to={`${url}/payments`} className="text-decoration-none text-light fs-4 p-2 m-3" >Pay</Link> <br />
                    
                    <Link className="text-decoration-none text-light fs-4 p-2" to="">Profile</Link> <br />
                    <Link className="text-decoration-none text-light fs-4 p-2" to="">Settings</Link> <br />

                    {/* Admin */}
                    {admin && <div>
                    <Link className="text-decoration-none text-light fs-4 p-2" to={`${url}/`}>AddProduct</Link> <br />
                    <Link className="text-decoration-none text-light fs-4 p-2" to={`${url}/makeAdmin`}>Make Admin</Link> <br />
                    <Link className="text-decoration-none text-light fs-4 p-2" to={`${url}/manageAllOrder`}>ManageAllOrders</Link> <br />
                    <Link className="text-decoration-none text-light fs-4 p-2" to={`${url}/managePrducts`}>Manage Products</Link> <br />
                    </div>
                    }


                    <Link onClick={logoutUsers} className="text-decoration-none fs-4 p-1 bask_btn" to="">Logout</Link>
                </div>
                <div className="col-md-9">
                   
                    { users &&
                        <Switch>
                        <Route exact path={path}> <MyOrder></MyOrder>  </Route>
                        <Route path={`${path}/userReview`}> <UserReview></UserReview> </Route>
                        <Route path={`${path}/payments`}> <Payment></Payment> </Route>
                        </Switch>
                    }
                    
                    {admin && 
                        <Switch>
                        <Route exact path={path}> <AddBraskets></AddBraskets>  </Route>
                        <AdminRoute path={`${path}/makeAdmin`}> <MakeAdmin></MakeAdmin> </AdminRoute>
                        <AdminRoute path={`${path}/manageAllOrder`}> <ManagelAllOrder></ManagelAllOrder> </AdminRoute>
                        <AdminRoute path={`${path}/managePrducts`}> <ManageProducts></ManageProducts> </AdminRoute>
                        </Switch>
                    }
                </div>
            </Row>
        </Container>
    );
};

export default Dashboard;