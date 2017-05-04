import React, { Component } from 'react';
import { render } from 'react-dom';
import OptionsForm from './optionsForm';
import Config from './../scripts/config';

const config = new Config;

config.load()
  .then((config) => {
    render(<OptionsForm config={config} />, document.querySelector("#options"));
  });
