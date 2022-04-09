import { useState, useEffect } from 'react'
import { Box, Paper, Grid, Typography, FormControl, Input, InputLabel, Select, MenuItem, Button, Alert, Radio, FormLabel } from "@mui/material"
import { inhouse as inputs } from '../utils/inputs'
import { getData, postData } from "../apiCall";
import { useFormik } from 'formik';


const InhouseForm = () => {
    const [message, setMessage] = useState("")
    const [severity, setSeverity] = useState("info")
    const [colors, setColors] = useState([])
    const [calves, setCalves] = useState([])
    const formik = useFormik({
        initialValues: {
            name: "",
            date_of_birth: "",
            color_id: "",
            gender: 0,
            estimated_live_weight: 0,
            estimated_value: 0,
            date_of_production: "",
            inhouse_or_purchased: true,

        },
        onSubmit: async (values) => {
            try {
                const data = dataValidate(values)
                console.log(data)
                const res = await postData("/cow", data)
                console.log(res.data)
                setSeverity("success")
                setMessage("Data inserted!!!")
            } catch (error) {
                console.log(error.message)
                setSeverity("error")
                setMessage(error.message)

            }
        },
    });
    async function fetchData() {
        try {
            let res = await getData("color")
            setColors(res.data)
            res = await getData("calves")
            setCalves(res.data)

        } catch (error) {
            setMessage("error")
        }
    }
    useEffect(() => {
        fetchData()

    }, []);



    const dataValidate = (values) => {
        delete values.id;
        delete values.created_at;
        delete values.updated_at;
        delete values.parent_id;
        // formik.setFieldValue("estimated_live_weight", Number(formik.values.estimated_live_weight)
        values.estimated_live_weight = Number(values.estimated_live_weight)
        values.cow_id = values.calf_id
        delete values.calf_id;
        return values
    }


    const onCalfSelect = async (e) => {
        const res = await getData(`calves/${e.target.value}`)
        formik.setValues({ ...formik.initialValues, ...res.data[0] })
        console.log(formik.values)

    };

    return (
        <>
            <Box >
                <Select
                    sx={{ width: "50%", m: "1rem 1.5rem", justifyContent: "center" }}
                    onChange={onCalfSelect}
                >

                    {calves.length > 1 && calves.map((calf) => (<MenuItem value={calf.id}>{calf.name}</MenuItem>))}
                </Select>
            </Box>
            <Box component="form" onSubmit={formik.handleSubmit} id="addCow">
                <Paper variant="outlined" square sx={{ p: 5, m: 5 }}>
                    <div>
                        <Typography variant="h6" m={5} align="center">
                            Add Cow
                        </Typography>
                        {message && <Alert severity={severity} onClose={() => { setMessage("") }} sx={{ mx: "10px" }}>{message}</Alert>}
                        <Grid container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            {inputs.map((input) => (
                                <Grid item xs={2} sm={4} md={4}  >
                                    <FormControl variant="standard">
                                        <InputLabel htmlFor="component-simple">{input.label}</InputLabel>
                                        {!input.select && <Input
                                            key={input.id}
                                            {...input}
                                            value={formik.values[input.name]}
                                            onChange={formik.handleChange}
                                        />}
                                        {input.select && <Select
                                            key={input.id.toString()}
                                            {...input}
                                            onChange={formik.handleChange}
                                            sx={{ width: "10rem" }}
                                        >

                                            {colors.length > 1 && colors.map((color) => (<MenuItem value={color.id}>{color.name}</MenuItem>))}
                                            <Input onChange={formik.handleChange} />
                                        </Select>}
                                    </FormControl>
                                </Grid>
                            ))}
                            <Grid item xs={2} sm={4} md={4}  >
                                <FormControl>
                                    <FormLabel>Female

                                        <Radio
                                            checked={formik.values.gender}
                                            onChange={formik.handleChange}
                                            value={1}
                                            name="gender"
                                            label="female"

                                        />
                                    </FormLabel>
                                    <FormLabel>Male


                                        <Radio
                                            checked={!formik.values.gender}
                                            onChange={formik.handleChange}
                                            value={0}
                                            name="gender"

                                        />
                                    </FormLabel>
                                </FormControl>


                            </Grid>


                            <Grid
                                item


                            >
                                <Button
                                    variant="contained"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </Grid>

                        </Grid>
                    </div>
                </Paper>
            </Box>
        </>


    )
}

export default InhouseForm