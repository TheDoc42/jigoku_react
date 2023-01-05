import logo from './logo.svg';
import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import './App.css';

import JiGoku from "./JiGoku"

const theme = createTheme({
    palette: {
        mode: 'light',
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <JiGoku/>
        </ThemeProvider>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);

export default App;
