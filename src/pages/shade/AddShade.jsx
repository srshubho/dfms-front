import "../new/new.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import React, { useState, useEffect } from "react";
import { MenuItem, Select } from "@mui/material";
import { postData } from "../../apiCall";
import { shadeInputs as inputs } from "../../utils/inputs";
import { useForm } from "react-hook-form";

const AddShade = ({ title }) => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async data => {

        try {
            const res = await postData("/shade", data)
            console.log(data);
            reset()
        } catch (error) {
            console.log(error.response);

        }
    }




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
                            {/* {inputs.length % 2 !== 0 && <div className="formInput" >

                            </div>} */}

                            <div className="formInput" >
                                <label>Shade Type</label>
                                <Select
                                    fullWidth
                                    variant="standard"
                                    defaultValue=""
                                    {...register("shade_type")}
                                >
                                    <MenuItem value={100}>---Select---</MenuItem>
                                    <MenuItem value={0}>Calf</MenuItem>
                                    <MenuItem value={1}>Cow</MenuItem>


                                </Select>

                            </div>

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

export default AddShade;
