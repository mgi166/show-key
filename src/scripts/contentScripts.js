import React from 'react';
import { render } from 'react-dom';
import Notification from "../views/notification";

const identifier = "show-key";
const element = document.createElement('div');

element.id = identifier;
document.body.appendChild(element);
render(<Notification />, document.getElementById(identifier));
