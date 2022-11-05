import React, {useState} from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Preferences from "../Preferences/Preferences";
import Login from "../Login/Login";
import {Box, IconButton} from "@mui/material";
import Button from "@mui/material/Button";
import HomeIcon from '@mui/icons-material/Home';
import BasicMenu from "../BasicMenu/BasicMenu";

function App() {
    const [token, setToken] = useState();

    if (!token) {
        return <Login setToken={setToken}/>
    }

    return (
        <Box>
            <header>
                <BasicMenu />
                <Button
                    sx={{
                        color: 'white',
                        backgroundColor:'black',
                    }}
                    variant="variant">Upload Images
                </Button>
                <Button
                    sx={{
                        color: 'white',
                        backgroundColor:'black',
                    }}
                    variant="variant">Create User
                </Button>
                <IconButton>
                    <HomeIcon />
                </IconButton>
            </header>
            <div className="wrapper">
                <BrowserRouter>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard/>}></Route>
                        <Route path="/preferences" element={<Preferences/>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </Box>
    );
}

export default App;
