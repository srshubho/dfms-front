import "../new/new.scss";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import { getData, postData } from "../../apiCall";
import { supplierfInputs as inputs } from "../../utils/inputs";
import { useForm } from "react-hook-form";
import { Snackbar, Alert } from "@mui/material";

const AddSupplier = ({ title }) => {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        try {
            const res = await postData("/supplier", data)
            console.log(data);
            setError(false)
            setOpen(true)
            reset()
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

                            <div className="formInput" >

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

export default AddSupplier;
