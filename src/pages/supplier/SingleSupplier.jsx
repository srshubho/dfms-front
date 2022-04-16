import "../single/single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import React, { useEffect, useState } from "react";
import List from "../../components/table/Table";
import { useParams } from "react-router-dom";
import { getData } from "../../apiCall";
import { Link } from "react-router-dom";

const SingleSupplier = () => {
    let params = useParams();
    const [supplier, setSupplier] = useState({});
    console.log(params.supplierId)
    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await getData(`supplier/${params.supplierId}`)
                setSupplier(res.data[0])
                console.log(supplier)


            } catch (error) {
                console.log(error.response)
            }
        }
        fetchData()

    }, []);
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <Link to="/">
                            <div className="editButton">Edit</div>
                        </Link>
                        <h1 className="title">Information</h1>
                        <div className="item">

                            <div className="details">
                                <h1 className="itemTitle">{supplier?.supplier_name}</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">{supplier?.supplier_phone}</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">
                                        {supplier?.supplier_address}
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="right">

                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <List />
                </div>
            </div>
        </div>
    );
};

export default SingleSupplier;
