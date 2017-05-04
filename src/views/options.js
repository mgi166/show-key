import React, { Component } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import OptionsForm from './optionsForm';
import Config from './../scripts/config';

const config = new Config;

config.load()
  .then((config) => {
    render(
      <MuiThemeProvider>
        <OptionsForm config={config} />
      </ MuiThemeProvider>,
      document.querySelector("#options")
    );
  });
