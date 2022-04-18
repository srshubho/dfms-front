import "./calf.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { calfColumns } from "../../utils/dataSource"
import React, { useState, useEffect } from "react";
import { getData } from "../../apiCall";

const CalfList = () => {
    const [calves, setCalves] = useState([]);
    async function fetchData() {
        try {
            let res = await getData("calf")
            setCalves(res.data)
            console.log(res.data)



        } catch (error) {
            console.log(error.response)
        }
    }
    useEffect(() => {
        fetchData()

    }, []);
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                {calves.length && <Datatable rows={calves} columns={calfColumns} title="Calf" link="calf" />}
                {!calves.length && <Datatable rows={calves} columns={calfColumns} title="Calf" link="calf" />}
            </div>
        </div>
    )
}

export default CalfList