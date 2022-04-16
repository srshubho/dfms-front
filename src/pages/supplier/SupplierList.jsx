import "./supplier.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { supplierColumns } from "../../utils/dataSource";
import React, { useState, useEffect } from "react";
import { getData } from "../../apiCall";


const SupplierList = () => {
    const [suppliers, setSuppliers] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await getData("supplier")
                setSuppliers(res.data)
                console.log(res.data)


            } catch (error) {
                console.log(error.response)
            }
        }
        fetchData()

    }, []);
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                {suppliers.length ? <Datatable rows={suppliers} columns={supplierColumns} link="supplier" title="Supplier" /> : <div>Loading...</div>}
            </div>
        </div>
    )
}

export default SupplierList