import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./pages/customers";
import Add from "./pages/customers/add";
import Navbar from "./components/Navbar";

import {useDispatch} from 'react-redux'
import {fetchCustomers, deleteCustomers} from './redux/customers/api';

function App() {

  const dispatch = useDispatch()

  useEffect(()=> {
    fetchCustomers()(dispatch)
  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
