import React, {useState} from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import UploadFile from "../UploadFile/UploadFile";
import Preferences from "../Preferences/Preferences";
import Login from "../Login/Login";
import {Box} from "@mui/material";
import BasicMenu from "../BasicMenu/BasicMenu";
import MainPage from "../MainPage/MainPage";

function App() {
    const [token, setToken] = useState();

    if (!token) {
        return (
            <>
                <Login setToken={setToken}/>
            </>
        );
    }

    return (
        <Box>
            <header>
                <BasicMenu/>
            </header>
            <div className="wrapper">
                <Routes>
                    <Route path="/home" element={<MainPage/>}></Route>
                    <Route path="/dashboard" element={<UploadFile/>}></Route>
                    <Route path="/preferences" element={<Preferences/>}></Route>
                </Routes>
            </div>
        </Box>
    );
}

export default App;
