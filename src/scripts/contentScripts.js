import React from 'react';
import { render } from 'react-dom';
import Notification from "../views/index.js";

const element = document.createElement('div');
element.id = "show-key";
document.body.appendChild(element);
render(<Notification />, document.getElementById("show-key"));
