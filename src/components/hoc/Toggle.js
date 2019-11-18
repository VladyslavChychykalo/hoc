import { Component } from "react";

export default class Toggle extends Component {
  state = { isOpen: false };

  toggle = () => this.setState(state => ({ isOpen: !state.isOpen }));

  render() {
    return this.props.children({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    });
  }
}
