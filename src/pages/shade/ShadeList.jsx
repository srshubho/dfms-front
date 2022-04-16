
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { shadeColumns } from "../../utils/dataSource";
import React, { useState, useEffect } from "react";
import { getData } from "../../apiCall";


const ShadeList = () => {
    const [shades, setShades] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await getData("shade")
                setShades(res.data)
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
                {shades.length ? <Datatable rows={shades} columns={shadeColumns} link="shade" title="Shade" /> : <div>Loading...</div>}
            </div>
        </div>
    )
}

export default ShadeList