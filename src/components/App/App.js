import React, {useState} from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import UploadFile from "../UploadFile/UploadFile";
import ListImages from "../Preferences/ListImages";
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
                    <Route path="/" element={<MainPage/>}></Route>
                    <Route path="/upload-images" element={<UploadFile/>}></Route>
                    <Route path="/list-images" element={<ListImages/>}></Route>
                </Routes>
            </div>
        </Box>
    );
}

export default App;
