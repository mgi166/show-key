import React, { Component } from 'react';
import { OrderedSet } from 'immutable';
import { NotificationStack } from 'react-notification';

export default class ShowKeyNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: OrderedSet()
    };
  }

  addKeyboardEvent(event) {
    const { notifications } = this.state;
    const newNotifications = notifications.add(
      {
        message: event.key,
        key: "!!!",
      }
    );
    return this.setState(
      { notifications: newNotifications }
    );
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  render() {
    return(
      <div id="show-key-test">
        <NotificationStack
          isActive="true"
          message="!!!!!"
          notifications={this.state.notifications.toArray()}
          onDismiss={
            notification => this.setState(
              { notifications: this.state.Notification.delete(notification) }
            )
          }
        />
      </div>
    );
  }
}
