import "./Cows.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { cowColumns } from "../../utils/dataSource";
import React, { useState, useEffect } from "react";
import { getData } from "../../apiCall";

const CowList = () => {
    const [cows, setCows] = useState([]);
    async function fetchData() {
        try {
            let res = await getData("cow")
            setCows(res.data)
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
                {cows.length && <Datatable rows={cows} columns={cowColumns} title="Cow" link="cow" />}
                {!cows.length && <Datatable rows={cows} columns={cowColumns} title="Cow" link="cow" />}
            </div>
        </div>
    )
}

export default CowList