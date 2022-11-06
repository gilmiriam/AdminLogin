import Button from "@mui/material/Button";
import * as React from "react";

import "./MainPage.css"
import {useNavigate} from "react-router-dom";

export default function MainPage() {
    const style = {
        marginTop: '1em',
    }
    const navigate = useNavigate();
    const handleUpload = () => {
        navigate("/upload-images");
    }
    const handlePreferences = () => {
        navigate("/list-images");
    }
    return (
        <div className="main">
            <Button
                sx={style}
                variant="contained"
                onClick={handleUpload}
            >Upload Images
            </Button>
            <Button
                sx={style}
                variant="contained"
                onClick={handlePreferences}
            >List Images
            </Button>
        </div>
    );
}