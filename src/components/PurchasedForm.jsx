import { useState, useEffect } from 'react'
import { Box, Paper, Grid, Typography, FormControl, Input, InputLabel, Select, MenuItem, Button, Alert } from "@mui/material"
import { purchase as inputs } from '../utils/inputs'
import { getData, postData } from "../apiCall";



const PurchasedForm = () => {
    const [message, setMessage] = useState("")
    const [colors, setColors] = useState([])
    const [suppliers, setSuppliers] = useState([])
    const colorOption = colors.map((item) => item.name)

    const initialValues = {
        name: "",
        date_of_purchase: "",
        color: "",
        estimated_live_weight: 0,
        transaction_cost: 0,
        labour_cost: 0,
        date_of_production: ""

    }

    const [values, setValues] = useState(initialValues);
    async function fetchData() {
        try {
            let res = await getData("color")
            setColors(res.data)
            res = await getData("supplier")
            setSuppliers(res.data)



        } catch (error) {
            setMessage(error.message)
        }
    }

    useEffect(() => {
        fetchData()
        console.log(inputs)
    }, []);

    const cancelForm = () => {
        document.getElementById("addCow").reset();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("DoNe!")
        setValues(initialValues)
        console.log(values)
        cancelForm()


    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        setMessage(e.target.value)
        console.log(values)

    };
    return (

        <Box component="form" onSubmit={handleSubmit} id="addCow">
            <Paper variant="outlined" square sx={{ p: 5, m: 5 }}>
                <div>
                    <Typography variant="h6" m={5} align="center">
                        Add Cow
                    </Typography>
                    {message && <Alert severity="info" onClose={() => { setMessage("") }}>{message}</Alert>}
                    <Grid container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {inputs.map((input) => (
                            <Grid item xs={6}   >
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="component-simple">{input.label}</InputLabel>
                                    {!input.select && <Input
                                        key={input.id}
                                        {...input}
                                        onChange={onChange}
                                    />}

                                </FormControl>
                            </Grid>
                        ))}
                        {/* <Grid item xs={6}   >
                            <FormControl variant="standard">


                                <Select

                                    name="colors_id"
                                    placeholder="Colors"
                                    onChange={onChange}
                                    sx={{ width: 250 }}

                                >

                                    {colors.length > 1 && colors.map((item) => (<MenuItem value={item.id}>{item.name}</MenuItem>))}
                                    <MenuItem value={0}><Input /></MenuItem>
                                </Select>

                            </FormControl>
                        </Grid>
                        <Grid item xs={6}   >
                            <FormControl variant="standard">
                                <InputLabel htmlFor="component-simple">Suppliers</InputLabel>

                                <Select

                                    name="colors_id"
                                    placeholder="Colors"
                                    onChange={onChange}
                                    sx={{ width: 250 }}
                                >

                                    {suppliers.length > 1 && suppliers.map((item) => (<MenuItem value={item.id}>{item.name}</MenuItem>))}
                                </Select>
                            </FormControl>
                        </Grid> */}
                        <Grid container>
                            <Grid
                                item
                                xs={6}

                            >
                                <Button
                                    variant="contained"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>

                    </Grid>
                </div>
            </Paper>
        </Box>

    )
}

export default PurchasedForm