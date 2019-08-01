import { render } from "react-dom";
import React from 'react';
import App from "./components/app";

import "../css/index.css";
import "../less/less.less"
import "../sass/sass.scss"
import "../stylus/stylus.styl"

render(<App />, document.getElementById('container'))