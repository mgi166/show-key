import React from 'react';
import { render } from 'react-dom';
import Notification from "../scripts/notification";
import Config from './config';

const identifier = "show-key";
const element = document.createElement('div');

element.id = identifier;
document.body.appendChild(element);

const config = new Config;

config.load().then((config) => {
  render(<Notification config={config} />, document.getElementById(identifier));
});
