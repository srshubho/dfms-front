import "../new/new.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import React, { useState, useEffect } from "react";
import { MenuItem, Select, Snackbar, Alert } from "@mui/material";
import { postData } from "../../apiCall";
import { shadeInputs as inputs } from "../../utils/inputs";
import { shade as model } from "../../utils/objects";
import { useForm } from "react-hook-form";

const EditShade = ({ title }) => {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);
    const { register, handleSubmit, reset } = useForm({
        defaultValues: model
    });
    const onSubmit = async data => {

        try {
            const res = await postData("/shade", data)
            console.log(data);
            reset()
            setOpen(true)
        } catch (error) {
            setError(true)
            setOpen(true)
            console.log(error.response);

        }
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false)
    }


    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                    <Snackbar
                        open={open}
                        autoHideDuration={3000}
                        onClose={handleClose}


                    >
                        {error ? <Alert onClose={handleClose} severity="error"> Data Insertion failed!</Alert> : <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>Data inserted successfull!
                        </Alert>}
                    </Snackbar>
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

export default EditShade;
