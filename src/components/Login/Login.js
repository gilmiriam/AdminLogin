import React, {useState} from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

import "./Login.css"
import {Box, createTheme, CssBaseline, TextField, ThemeProvider, Typography} from "@mui/material";

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    const theme = createTheme({
        typography: {
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
        },
    });

    return (
        <div className="login-wrapper">
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Typography variant="h4">Please Log In</Typography>
            </ThemeProvider>
            <Box component="form"
                 sx={{
                     '& .MuiTextField-root': {m: 1, width: '25ch'},
                     '& button': {m: 1},
                 }}
                 noValidate
                 autoComplete="off"
                 onSubmit={handleSubmit}
            >
                <div>
                    <TextField id="outlined-search"
                               label="Username"
                               type="text"
                               onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div>
                    <TextField id="outlined-password-input"
                               label="Password"
                               type="password"
                               autoComplete="current-password"
                               onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="button-submit">
                    <Button variant="contained" type="submit">Submit</Button>
                </div>
            </Box>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}