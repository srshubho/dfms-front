import "../new/new.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import React, { useState, useEffect } from "react";
import { MenuItem, Select, Snackbar, Alert } from "@mui/material";
import { getData, postData } from "../../apiCall";
import { calfInputs as inputs } from "../../utils/inputs";
import { useForm } from "react-hook-form";

const AddCalf = ({ title }) => {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);
    const [colors, setColors] = useState([]);
    const [shades, setShades] = useState([]);
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {

        try {
            const res = await postData("/calf", data)
            console.log(data);
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


    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await getData("color")
                console.log(res.data)
                setColors(res.data)
                res = await getData("shade_calf")
                setShades(res.data)

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
                            {/* {inputs.length % 2 !== 0 && <div className="formInput" >

                            </div>} */}
                            <div className="formInput" >
                                <label>Colors</label>
                                <Select
                                    fullWidth
                                    variant="standard"
                                    defaultValue=""
                                    {...register("calf_color_id")}
                                >
                                    <MenuItem value={100}>---Select---</MenuItem>

                                    {colors.length && colors.map((option, i) => (
                                        <MenuItem value={option.id} key={option.id}>{option.color_name}</MenuItem>

                                    ))}

                                </Select>

                            </div>
                            <div className="formInput" >
                                <label>Shades</label>
                                <Select
                                    fullWidth
                                    variant="standard"
                                    defaultValue=""
                                    {...register("calf_shade_id")}
                                >
                                    <MenuItem value={100}>---Select---</MenuItem>

                                    {shades.length && shades.map((option, i) => (
                                        <MenuItem value={option.id} key={option.id}>{option.shade_no}</MenuItem>

                                    ))}

                                </Select>

                            </div>
                            <div className="formInput" >
                                <label>Gender</label>
                                <Select
                                    fullWidth
                                    variant="standard"
                                    defaultValue=""
                                    {...register("calf_gender")}
                                >
                                    <MenuItem value={100}>---Select---</MenuItem>
                                    <MenuItem value={0}>Male</MenuItem>
                                    <MenuItem value={1}>Female</MenuItem>


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

export default AddCalf;
