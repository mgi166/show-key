import React from 'react';
import { render } from 'react-dom';
import Notification from "../views/index.js";

const identifier = "show-key";
const element = document.createElement('div');

window.ShowKeyNotification = Notification;

element.id = identifier;
document.body.appendChild(element);
render(<Notification />, document.getElementById(identifier));

document.addEventListener("keydown", (event) => {
  const notification = new window.ShowKeyNotification();
  notification.addKeyboardEvent(event);
});
