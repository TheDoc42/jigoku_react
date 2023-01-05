import logo from './logo.svg';
import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import './App.css';

import JiGoku from "./JiGoku"

const themeLight = createTheme({
    palette: {
        background: {
            default: "#e4f0e2"
        }
    }
});

const themeDark = createTheme({
    palette: {
        background: {
            default: "#222222"
        },
        text: {
            primary: "#ffffff"
        }
    }
});

const App = () => {
    const [light, setLight] = React.useState(true);
    return (
        <ThemeProvider theme={light ? themeLight : themeDark}>
            <CssBaseline/>
            <JiGoku/>
        </ThemeProvider>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);

export default App;
