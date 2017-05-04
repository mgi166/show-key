import React, { Component } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class OptionsForm extends Component {
  constructor(props) {
    super(props);
    this.state = props.config;
  }

  onSubmit(e) {
    e.preventDefault();
    const target = e.target;

    chrome.storage.sync.set(
      {
        eventName: target.eventName.value,
        dismissAfter: Number(target.dismissAfter.value) || 2000,
      }
    );

    this.setState({ snackbarOpen: true });
  }

  render() {
    const subheaderStyle = {
      fontSize: 20,
    };

    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <Subheader style={subheaderStyle}>Event name</Subheader>
          <RadioButtonGroup name="eventName" defaultSelected={this.state.eventName}>
            <RadioButton
              label="keydown"
              value="keydown"
            />
            <RadioButton
              label="keypress"
              value="keypress"
            />
            <RadioButton
              label="keyup"
              value="keyup"
            />
          </RadioButtonGroup>

          <Subheader style={subheaderStyle}>Show duration (milliseconds)</Subheader>
          <TextField
            hintText="default is 2000[ms]"
            name="dismissAfter"
            defaultValue={this.state.dismissAfter}
          />

          <br />

          <RaisedButton label="save" primary={true} type="submit"/>
          <Snackbar
            open={this.state.snackbarOpen || false}
            message="Save success!"
            autoHideDuration={4000}
            contentStyle={{ textAlign: 'center' }}
          />
        </form>
      </div>
    );
  }
};
