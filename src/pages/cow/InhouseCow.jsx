import "../new/new.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import React, { useState, useEffect } from "react";
import { MenuItem, Select, Snackbar, Alert } from "@mui/material";
import { getData, postData } from "../../apiCall";
import { inhouseInputs as inputs } from "../../utils/inputs";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const InhouseCow = ({ title }) => {
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState({ id: "0", name: "" });
    const [gender, setGender] = useState({ id: "0", name: "" });
    const [calves, setCalves] = useState([]);
    const [shades, setShades] = useState([]);
    const { register, handleSubmit, reset, setValue } = useForm();
    const onSubmit = async data => {

        try {
            console.log(data);
            const res = await postData("/cow", data)
            reset()
            setOpen(true)
        } catch (error) {
            console.log(error.response);

        }
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false)
    }
    const getCalfById = async (event) => {
        const calfId = event.target.value;
        const res = await getData(`calf/${calfId}`)
        const data = res.data[0];
        setInputValues(data)

    }
    const setInputValues = (data) => {
        setValue("cow_name", data.calf_name);
        setValue("cow_color_id", data.calf_color_id);
        setValue("cow_gender", data.calf_gender);
        setValue("cow_date_of_birth", data.calf_date_of_birth);
        setColor({ id: data.calf_color_id, name: data.color_name })
        setGender({ id: data.calf_gender, name: data.calf_gender ? "Female" : "Male" })

    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await getData("calf")
                setCalves(res.data)
                console.log(res.data)
                res = await getData("shade_cow")
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
                        message="Data inserted Successfully"

                    >
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            This is a success message!
                        </Alert>
                    </Snackbar>
                </div>
                <div className="bottom">
                    <div className="side">

                    </div>
                    <div className="middle">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="formInput" >
                                <label>Select a calf</label>
                                <Select
                                    fullWidth
                                    variant="standard"
                                    defaultValue=""
                                    onChange={getCalfById}

                                >
                                    <MenuItem value={100}>---Select---</MenuItem>

                                    {calves.length && calves.map((option, i) => (
                                        <MenuItem value={option.id} key={option.id}>{option.calf_name}</MenuItem>

                                    ))}

                                </Select>

                            </div>

                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input {...input} {...register(input.name)} />
                                </div>
                            ))}
                            {/* {inputs.length % 2 !== 0 && <div className="formInput" >

                            </div>} */}
                            <div className="formInput" >
                                <label>color</label>
                                <Select
                                    fullWidth
                                    variant="standard"
                                    defaultValue=""
                                    {...register("cow_color_id")}
                                >
                                    <MenuItem value={color.id}>{color.name}</MenuItem>
                                </Select>

                            </div>
                            <div className="formInput" >
                                <label>Gender</label>
                                <Select
                                    fullWidth
                                    variant="standard"
                                    defaultValue=""
                                    {...register("cow_gender")}
                                >
                                    <MenuItem value={gender.id}>{gender.name}</MenuItem>
                                </Select>

                            </div>
                            <div className="formInput" >
                                <label>Shades</label>
                                <Select
                                    fullWidth
                                    variant="standard"
                                    defaultValue=""
                                    {...register("cow_shade_id")}
                                >
                                    <MenuItem value={100}>---Select---</MenuItem>

                                    {shades.length && shades.map((option, i) => (
                                        <MenuItem value={option.id} key={option.id}>{option.shade_no}</MenuItem>

                                    ))}

                                </Select>

                            </div>
                            {/* <div className="formInput" >

                            </div> */}
                            <button type="submit">Send</button>
                        </form>
                        <Link to="/cow/new" >
                            <p>Not in the house?</p>
                        </Link>
                    </div>
                    <div className="side">

                    </div>
                </div>
            </div>
        </div >
    );
};

export default InhouseCow;
