import React from 'react';
import Button from "@mui/material/Button";
import {Stack} from "@mui/material";

export default function Dashboard() {
    return (
        <Stack direction="column" spacing={2}>
            <h2>Upload Images</h2>
            <br/>
            <Button variant="contained" component="label">
                Upload
                <input hidden accept="image/*" type="file"/>
            </Button>
        </Stack>
    );
}