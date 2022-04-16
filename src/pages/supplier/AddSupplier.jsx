import "../new/new.scss";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import { getData, postData } from "../../apiCall";
import { supplierfInputs as inputs } from "../../utils/inputs";
import { useForm } from "react-hook-form";

const AddSupplier = ({ title }) => {
    const [select, setSelect] = useState([]);
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        const res = await postData("/supplier", data)
        console.log(data);
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await getData("/")
                console.log(res.data)

            } catch (error) {
                console.log(error.response)
            }
        }

        fetchData()
        // fetchData()

    }, []);

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="side">

                    </div>
                    <div className="middle">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} {...register(input.name)} />
                                </div>
                            ))}
                            {inputs.length % 2 !== 0 && <div className="formInput" >

                            </div>}



                            <button type="submit">Send</button>
                        </form>
                    </div>
                    <div className="side">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddSupplier;
