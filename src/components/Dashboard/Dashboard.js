import React, {useState} from 'react';
import Button from "@mui/material/Button";
import {Box} from "@mui/material";

import "./Dashboard.css"

export default function Dashboard() {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    }

    const handleSubmission = () => {
        const formData = new FormData();

        formData.append('file', selectedFile);

        fetch('http://localhost:8080/uploadFile',
            {
                method: 'POST',
                body: formData
            }
        )
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
                setIsFilePicked(false);
            })
            .catch((error) => {
                console.error('Error', error);
            });
    };

    const style = {
        display: 'block',
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        border: '1px solid',
        borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
    }

    return (
        <Box>
            <Button variant="contained" component="label">
                Select File
                <input hidden type="file" name="file" onChange={changeHandler}/>
            </Button>
            {isFilePicked ? (
                <div className="image-info">
                    <Box component="span" sx={style}>Filename: {selectedFile.name}</Box>
                    <Box component="span" sx={style}>Filetype: {selectedFile.type}</Box>
                    <Box component="span" sx={style}>Size in bytes: {selectedFile.size}</Box>
                    <Box  component="span" sx={style}>
                        lastModifiedDate:{' '}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </Box>
                </div>
            ) : (
                <p>Select a file to show details</p>
            )}
            <Button variant="contained" component="label" onClick={handleSubmission}>Upload</Button>
        </Box>
    );
}