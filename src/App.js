import logo from './logo.svg';
import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import {ThemeProvider, createTheme} from "@mui/material/styles";
import './App.css';

import JiGoku from "./JiGoku"

const myTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const App = () => <Box>
    <ThemeProvider theme={myTheme}>
        <CssBaseline/>
        <JiGoku/>
    </ThemeProvider>
</Box>

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);

export default App;
