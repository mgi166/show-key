import React, { Component } from 'react';

export default class OptionsForm extends Component {
  onSubmit(e) {
    e.preventDefault();
    const target = e.target;

    chrome.storage.sync.set(
      {
        eventName: target.eventName.value
      }
    );
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>EventName</label>
        <button type="submit" />
      </form>
    );
  }
};
