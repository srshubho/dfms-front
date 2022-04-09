import "./Cows.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { cowColumns } from "../../utils/CowDataSource";
import React, { useState, useEffect } from "react";
import { getData, postData } from "../../apiCall";

const Cows = () => {
    const [cows, setCows] = useState([]);
    const [cowRows, setCowRows] = useState([]);
    async function fetchData() {
        try {
            let res = await getData("cow")
            setCows(res.data)
            console.log(res.data)
            console.log(cows[0].name)


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
                {cows.length && <Datatable rows={cows} columns={cowColumns} />}
                {!cows.length && <div>Loading...</div>}
            </div>
        </div>
    )
}

export default Cows