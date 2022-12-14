import React from 'react'
import { Route, Routes } from 'react-router-dom'

// components
import ABC from './components/ABC'
import Dashboard from './components/Dashboard'
import DashboardAccount from './components/DashboardAccount'
import DashboardPhone from './components/DashboardPhone'
import DashboardWear from './components/DashboardWear'
import Dummy from './components/Dummy'
import Home from './components/Home'
import InvoiceDetail from './components/InvoiceDetail'
import Invoices from './components/Invoices'
import Products from './components/Products'
import TodoApp from './components/TodoApp'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/invoices">
                <Route index={true} element={<Invoices />} />
                <Route path="invoice/:invoiceName" element={<InvoiceDetail />} />
            </Route>
            <Route path="home" element={<TodoApp />} />
            <Route path="products" element={<Products />} />
            <Route path="dummy" element={<Dummy />} />
            <Route path=":bde" element={<ABC />} />
            <Route path="/dashboard">
                <Route index={true} element={<Dashboard />} />
                <Route path="wear" element={<DashboardWear />} />
                <Route path="account" element={<DashboardAccount />} />
                <Route path="phones" element={<DashboardPhone />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes