import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import Users from "../pages/Users";

const AppRoutes = () => {
    return(
    <BrowserRouter>
    <Layout>
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="orders" element={<Orders/>} />
        </Routes>
    </Layout>
    </BrowserRouter>
    );
};

export default AppRoutes;