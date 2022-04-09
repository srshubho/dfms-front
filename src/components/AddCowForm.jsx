import { Box, FormControlLabel, FormGroup, Input, Switch } from "@mui/material"
import InhouseForm from "./InhouseForm"
import PurchasedForm from "./PurchasedForm"
import { useState } from 'react'

const AddCowForm = () => {
    const [isPurchased, setIsPurchased] = useState(false)
    return (
        <div>
            <Box>
                <FormGroup>
                    <FormControlLabel control={<Switch onClick={(e) => setIsPurchased(e.target.checked)} />} label="Purchased" />
                </FormGroup>
                {isPurchased ? <PurchasedForm /> :
                    <InhouseForm />}

            </Box>
        </div>
    )
}

export default AddCowForm