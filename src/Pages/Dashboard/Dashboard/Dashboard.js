import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import {
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
import { FaList, FaRegEdit, FaDollarSign, FaUserAlt, FaUserSecret, FaRegSun, FaRegCalendarPlus, FaRegCalendarAlt, FaWindowRestore, FaSignOutAlt } from 'react-icons/fa';


const Dashboard = () => {

    const { users, admin, logoutUsers } = useAuth();
    let { path, url } = useRouteMatch();

    return (
        <Container className="my-5 py-5">
            <Row>
                <div className="col-md-3 dashboard_item" style={{ textAlign: 'right' }}>
                    <h3 className="mt-5 pt-5 text-uppercase text-center" style={{ color: '#FFFFFF' }}> Dashboard  </h3>
                    
                             {/* Admin */}
                    {admin ? <div>
                        <Link className="text-decoration-none text-light fs-4 p-2" to={`${url}/manageAllOrder`}>Manage All Orders
                        <FaRegCalendarAlt className="mx-2" />
                        </Link> <br />
                    <Link className="text-decoration-none text-light fs-4 p-2" to={`${url}/addProducts`}>AddProduct
                    <FaRegCalendarPlus className="mx-2" />
                        </Link> <br />
                        <Link className="text-decoration-none text-light fs-4 p-2" to={`${url}/makeAdmin`}>Make Admin
                            <FaUserSecret className="mx-2" />
                        </Link> <br />
                        
                        <Link className="text-decoration-none text-light fs-4 p-2" to={`${url}/manageProducts`}>Manage Products
                        <FaWindowRestore className="mx-2" />
                        </Link> <br />
                    </div>
                    

                    :
                        <div>
                                <Link to={`${url}/userOrder`}
                            className="text-decoration-none text-light fs-4 p-2" >
                            My Orders <FaList className="mx-2" />
                        </Link> <br />

                        <Link to={`${url}/userReview`} className="text-decoration-none text-light fs-4 p-2" >
                        Review  <FaRegEdit className="mx-2" /> </Link> <br />

                        <Link to={`${url}/payments`} className="text-decoration-none text-light fs-4 p-2 m-3" >Pay
                            <FaDollarSign  />
                            </Link> <br />

                

                        <Link className="text-decoration-none text-light fs-4 p-2" to="#">Profile
                        <FaUserAlt className="mx-2" />
                        </Link> <br />
                        <Link className="text-decoration-none text-light fs-4 p-2" to="#">Settings
                        <FaRegSun className="mx-2" />
                        </Link> <br />
                    </div>
                   }

                    <Link onClick={logoutUsers} className="text-decoration-none fs-4 p-1 bask_btn" to="">Logout
                    <FaSignOutAlt className="mx-2" />
                    </Link>
                </div>
                <div className="col-md-9">
                   
                    <h3 className="my-5"> Welcome Mr. {users?.displayName} <br />
                        <FaUserSecret className="display-3" style={{color:'#a17154'}} /></h3>
                {admin && 
                        <Switch>
                        <AdminRoute exact path={`${path}/manageAllOrder`}> <ManagelAllOrder></ManagelAllOrder> </AdminRoute>
                        <Route path={`${path}/addProducts`}> <AddBraskets></AddBraskets>  </Route>
                        <AdminRoute path={`${path}/makeAdmin`}> <MakeAdmin></MakeAdmin> </AdminRoute>     
                        <AdminRoute exact path={`${path}/manageProducts`}> <ManageProducts></ManageProducts> </AdminRoute>
                        </Switch>
                    }
                
                    { users &&
                        <Switch>
                        <Route exact path={`${path}/userOrder`}> <MyOrder></MyOrder>  </Route>
                        <Route path={`${path}/userReview`}> <UserReview></UserReview> </Route>
                        <Route path={`${path}/payments`}> <Payment></Payment> </Route>
                        </Switch>
                    }
               </div>
            </Row>
        </Container>
    );
};

export default Dashboard;